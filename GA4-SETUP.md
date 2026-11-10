# Blog 与主站共用 GA4

## 接入方式

- GA4 Measurement ID：`G-RM2QS8V0LE`，与 `openstory_frontend_v2` 主站一致。
- 主站的 GA 初始化仍由 `src/components/tracking/consented-scripts.tsx` 负责；手动事件由 `src/lib/google-analytics.ts` 统一发送。
- 博客在 `/blog` 首页和所有文章中加载 `public/blog-analytics.js`。VitePress 使用 `mpa: true`，因此脚本通过页面 head 注入，不依赖 Vue 客户端 hydration。
- 博客不加载主站 GTM 容器、Apollo 或 Amplitude。`/page/news` 和独立落地页不在本次博客统计范围。
- 博客关闭初始化时的自动 page view，并在每次页面加载后手动发送一次 `page_view`。浏览器从后退缓存恢复页面时记录一次新的浏览。

## 如何区分 web 与 blog

使用 GA4 **内置维度 Content group / 内容分组**，无需创建自定义维度：

| 来源 | `content_group` |
|---|---|
| 主站页面和应用内事件 | `web` |
| 博客首页、文章及博客互动事件 | `blog` |

主站同时在 Google tag 初始化和统一事件函数中设置 `web`；博客同时在初始化和事件中设置 `blog`。这个字段是事件级分组，不是用户属性，因此同一个访客从博客进入 Studio 后，后续主站事件会归入 `web`。

在 GA4「探索」中添加内置维度「内容分组」、指标「浏览次数 / 活跃用户 / 事件数」，即可按 `web`、`blog` 对比。在页面报告中也可以选择「内容分组」维度，或添加 `内容分组 = blog` 的比较条件。文章明细继续使用「网页路径」或「网页标题」。

新标记从部署之后生效，历史数据不会补写。尚未带分组的历史记录可能显示为 `(not set)`；这些记录仍可用 `/blog` 路径筛选。

## 博客事件

| 事件 | 触发方式 | 参数 |
|---|---|---|
| `page_view` | 首次进入、刷新、文章跳转和后退缓存恢复 | `content_group=blog`、清理后的页面地址、标题、来源页 |
| `blog_scroll` | 阅读到文章的 25%、50%、75%、90%，每档每次浏览仅一次 | `percent_scrolled` |
| `blog_to_web_click` | 点击进入 Plot Party 主站的链接，例如 Studio、工具、模型、Pricing、Contact Sales | `link_url`、`link_domain`、`link_path`、`link_placement` |

阅读进度以文章区域为准；首页不发 `blog_scroll`。`blog_scroll` 与 GA 增强型衡量的标准 `scroll` 是不同事件，分析时不要相加。`blog_to_web_click` 不拦截或延迟导航，也不会给站内链接添加 UTM，从而保留原来的获客来源。它衡量点击，不代表注册或付费成功；后两者继续由主站现有事件负责。

事件名和内容分组可直接用于报表。如果需要在「探索」中按自定义的 `link_path`、`link_placement` 拆分点击，可另行将这些参数注册为事件级自定义维度；这不是区分 `web` / `blog` 的前置条件。

## Cookie 选择与数据范围

- 复用主站 `localStorage` 键 `plotparty:tracking-consent:v1`，值为 `{ "choice": "accepted" | "rejected", "at": 时间戳 }`，有效期 180 天。
- 在同一来源 `https://plotparty.ai` 下，主站与博客共享这份选择。不同主机名、协议或端口不共享 localStorage；本地预览不会读取线上选择。
- 未选择、拒绝、过期或存储不可用时，不加载 Google 脚本，也不排队发送 GA 事件。访客可通过文章底部的「Cookie preferences」修改选择。
- 撤回同意时立即禁用 GA，清理与主站相同的可选统计存储并刷新页面。其他标签页通过 storage 事件同步；登录信息不清理。
- 使用 GA 默认 Cookie 名、自动域名和根路径 `/`，与主站同域访问保持会话连续性；不另设博客专用 Cookie 前缀。
- 页面地址只保留主站已允许的 UTM、`gclid`、`gbraid`、`wbraid` 参数；来源页和点击目标去掉全部查询参数和 fragment。不会额外采集文章评论、表单内容、账号邮箱或登录 token。

## 验证与部署

本地检查：

```sh
node --test scripts/test-blog-analytics.cjs
npx vitepress build
node scripts/verify-blog-seo.cjs
```

主站检查（在 `openstory_frontend_v2` 中）：

```sh
node --test scripts/tests/google-analytics.test.mjs scripts/tests/tracking-consent.test.mjs
npx eslint src/lib/google-analytics.ts src/components/tracking/consented-scripts.tsx
```

需要部署博客服务，以及主站修改过的 GA 配置/事件函数。只部署博客时，博客会有 `blog` 标记，但旧主站还不会自动得到 `web` 标记。

部署后在真实站点验收：

1. 新访客打开文章，未同意前应没有 `gtag/js` 或 GA collect 请求；拒绝后仍然如此。
2. 同意后重新加载，同一个页面应该有一个手动 `page_view`，目标是 `G-RM2QS8V0LE`，包含 `content_group=blog`。可使用浏览器请求面板检查 GA 请求中的 `ep.content_group`，在 GA4 实时报告中查看页面和事件。
3. 滚动文章，检查 `blog_scroll` 各档只出现一次；点击 Studio，检查 `blog_to_web_click`，然后检查主站 `page_view` 的 `content_group=web`。
4. 主站与博客同域切换时应继续使用同一个 GA client/session；用 Cookie preferences 撤回后应停止采集，另一标签页也应更新。
5. 主站已有 GTM 容器的远端配置不在这两个仓库中。若实站出现重复 GA page view，应检查容器是否另外发送了 page view；博客本身不加载该容器。

本地测试验证逻辑和构建产物，不会向 Google 发送测试事件。GA4 后台是否实际收数，需要部署后在真实站点验收。
