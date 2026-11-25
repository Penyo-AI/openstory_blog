import { appUrl } from './site'

export type BlogRelatedLink = {
  label: string
  href: string
}

export type BlogPostItem = {
  slug: string
  title: string
  description: string
  publishedAt: string
  author: string
  role: string
  coverImage: string
  tags: string[]
  readingTime: number
  featured: boolean
  relatedLinks?: BlogRelatedLink[]
}

export const blogPosts: BlogPostItem[] = [
  {
    slug: 'plot-party-vs-character-app-mootion-agent-media-vertical-drama',
    title: 'Plot Party vs. Character App vs. Mootion vs. agent-media (2026): Which AI Vertical Drama Maker Fits 60-Episode Production?',
    description: 'Compare Plot Party, Character App, Mootion, and agent-media for 9:16 AI vertical dramas: per-clip credit pricing, 3D sets, 4K mastering, and MCP workflows.',
    publishedAt: '2026-11-25',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: '',
    tags: ['Comparison', 'AI Drama', 'Creators'],
    readingTime: 10,
    featured: true,
    relatedLinks: [
      { label: 'Try Plot Party AI Microdrama Generator', href: appUrl('/tools/ai-microdrama-generator') },
      { label: 'Plot Party Microdrama Budget Calculator', href: appUrl('/tools/microdrama-budget-calculator') },
      { label: 'AI Character IP & Likeness Compliance', href: '/blog/ai-character-ip-compliance-likeness-guide-microdrama-studios-2026' }
    ]
  },
  {
    slug: 'ai-character-ip-compliance-likeness-guide-microdrama-studios-2026',
    title: 'AI Character IP & Likeness Compliance for Microdrama Studios (2026): How to Screen Synthetic Casts Before Distribution',
    description: 'Learn how microdrama studios prevent accidental celebrity likeness drift, navigate 2026 SAG-AFTRA and AI labeling rules, and screen casts in Plot Party.',
    publishedAt: '2026-11-25',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: '',
    tags: ['Industry', 'Workflow', 'AI Drama'],
    readingTime: 10,
    featured: true,
    relatedLinks: [
      { label: 'Plot Party AI Character Casting', href: appUrl('/tools/ai-character-casting') },
      { label: 'Plot Party for IP Holders & Studios', href: appUrl('/ip') },
      { label: 'Plot Party vs Character App vs Mootion vs agent-media', href: '/blog/plot-party-vs-character-app-mootion-agent-media-vertical-drama' }
    ]
  },
  {
    slug: 'how-to-pitch-ai-microdrama-reelshort-dramabox-shortmax',
    title: 'How to Pitch an AI Microdrama to ReelShort, DramaBox, and ShortMax in 2026',
    description: 'Learn how US producers pitch and sell AI microdramas to ReelShort, DramaBox, and ShortMax in 2026: format specs, paywall hooks, pitch decks, and pilot tips.',
    publishedAt: '2026-11-23',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: '',
    tags: ['Distribution', 'Producers', 'AI Drama'],
    readingTime: 10,
    featured: true,
    relatedLinks: [
      { label: 'Try Plot Party AI Microdrama Generator', href: appUrl('/tools/ai-microdrama-generator') },
      { label: 'Plot Party AI Character Casting', href: appUrl('/tools/ai-character-casting') },
      { label: 'Microdrama Production Cost in 2026', href: '/blog/microdrama-production-cost-traditional-vs-ai-2026' }
    ]
  },
  {
    slug: 'microdrama-production-cost-traditional-vs-ai-2026',
    title: 'Microdrama Production Cost in 2026: Traditional LA Shoots vs. AI-Native Studios (Full Line-Item Breakdown)',
    description: '2026 US microdrama production cost breakdown: compare $150K–$300K LA live-action shoots with AI agencies and lean Plot Party workflows, line by line.',
    publishedAt: '2026-11-23',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: '',
    tags: ['Economics', 'Producers', 'AI Drama'],
    readingTime: 10,
    featured: true,
    relatedLinks: [
      { label: 'Plot Party Microdrama Budget Calculator', href: appUrl('/tools/microdrama-budget-calculator') },
      { label: 'Explore Enterprise Microdrama Studio', href: appUrl('/enterprise/ai-microdrama-studio') },
      { label: 'How to Pitch an AI Microdrama', href: '/blog/how-to-pitch-ai-microdrama-reelshort-dramabox-shortmax' }
    ]
  },
  {
    slug: 'plot-party-vs-higgsfield-microdrama-studio',
    title: 'Plot Party vs Higgsfield MicroDrama Studio (2026): Which AI Microdrama Studio Fits Serialized Production?',
    description: 'Compare Plot Party Drama Studio vs Higgsfield MicroDrama Studio for AI short dramas: 3D set locking, cast consistency, 40-language dubbing, and credit ROI.',
    publishedAt: '2026-11-23',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://plotparty.ai/blog/images/blog/cover-vs-higgsfield.jpg',
    tags: ['Comparison', 'AI Drama', 'Creators'],
    readingTime: 9,
    featured: true,
    relatedLinks: [
      { label: 'Try Plot Party AI Microdrama Generator', href: appUrl('/tools/ai-microdrama-generator') },
      { label: 'Explore Enterprise Microdrama Studio', href: appUrl('/enterprise/ai-microdrama-studio') },
      { label: 'Plot Party vs Dreamina vs LTX', href: '/blog/plot-party-vs-dreamina-capcut-ltx-ai-microdrama' }
    ]
  },
  {
    slug: 'plot-party-vs-dreamina-capcut-ltx-ai-microdrama',
    title: 'Plot Party vs Dreamina (CapCut) vs LTX-2.5 (2026): Three Architectures for AI Microdrama Production',
    description: 'Compare Plot Party, Dreamina by CapCut, and LTX-2.5 for AI microdramas: turnkey studio vs fast clip generator vs open-weight LoRA engine. Full 2026 guide.',
    publishedAt: '2026-11-23',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://plotparty.ai/blog/images/blog/cover-vs-dreamina-ltx.jpg',
    tags: ['Comparison', 'AI Drama', 'Creators'],
    readingTime: 9,
    featured: true,
    relatedLinks: [
      { label: 'Explore Enterprise Microdrama Studio', href: appUrl('/enterprise/ai-microdrama-studio') },
      { label: 'Compare All Available Models', href: appUrl('/models') },
      { label: 'Plot Party vs Higgsfield MicroDrama Studio', href: '/blog/plot-party-vs-higgsfield-microdrama-studio' }
    ]
  },
  {
    slug: 'snowglobe-3d-world-engine-ai-filmmaking-previs',
    title: "Snowglobe: Turn One Line or One Image into a 3D Film Set",
    description: 'Snowglobe turns one sentence or one image into a full 3D set you can step inside. Change the time of day, weather, terrain and layout, block actors, place cameras, and send every shot straight into AI video generation.',
    publishedAt: '2026-11-21',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/snowglobe-cover.jpg',
    tags: ['AI Video', 'Creators', 'Filmmaking'],
    readingTime: 8,
    featured: true,
    relatedLinks: [
      { label: 'Try Snowglobe', href: appUrl('/3d-world/') },
      { label: 'Director Studio: AI Camera Control', href: '/blog/director-studio-ai-video-control-guide' },
      { label: 'Plot Party Studio', href: '/blog/plot-party-studio-agent-native-drama-workbench' }
    ]
  },
  {
    "slug": "kling-4-0-vs-seedance-2-5-vs-veo-3-1-comparison",
    "title": "Kling 4.0 vs Seedance 2.5 vs Veo 3.1: 30s AI Video Test",
    "description": "Compare Kling 4.0, Seedance 2.5 and Google Veo 3.1 on clip length, keyframes, reference limits, audio and 4K output, with copyable prompts for each shot type.",
    "publishedAt": "2026-11-18",
    "author": "Sophia Xing",
    "role": "Founder, Plot Party",
    "coverImage": "",
    "tags": [
      "AI Video",
      "Comparison",
      "Model Guides"
    ],
    "readingTime": 10,
    "featured": true,
    "relatedLinks": [
      {
        "label": "Seedance 2.5",
        "href": "https://plotparty.ai/seedance/2.5"
      },
      {
        "label": "Kling 4.0",
        "href": "https://plotparty.ai/kling/4.0"
      },
      {
        "label": "MiniMax H3 vs Seedance 2.5",
        "href": "/blog/minimax-h3-vs-seedance-2-5-comparison"
      }
    ]
  },
  {
    "slug": "gpt-image-2-6-vs-nano-banana-pro-gemini-3-pro-image",
    "title": "GPT Image 2.6 vs Nano Banana Pro (Gemini 3 Pro): 4K AI Test",
    "description": "Compare OpenAI GPT Image 2.6 and 2.5 markup edits, SVG and GIF output with Google Nano Banana Pro (Gemini 3 Pro Image) and Nano Banana 2 for pre-production.",
    "publishedAt": "2026-11-18",
    "author": "Sophia Xing",
    "role": "Founder, Plot Party",
    "coverImage": "",
    "tags": [
      "AI Image",
      "Comparison",
      "Model Guides"
    ],
    "readingTime": 10,
    "featured": true,
    "relatedLinks": [
      {
        "label": "GPT Image 2.5",
        "href": "https://plotparty.ai/gpt-image/2.5"
      },
      {
        "label": "Nano Banana 2",
        "href": "https://plotparty.ai/nano-banana/2"
      },
      {
        "label": "Nano Banana 2 vs GPT Image 2.5 vs Midjourney",
        "href": "/blog/nano-banana-2-vs-gpt-image-2-5-vs-midjourney"
      }
    ]
  },
  {
    "slug": "gemini-omni-flash-vs-veo-3-1-vs-happy-horse-ai-video",
    "title": "Gemini Omni Flash vs Veo 3.1 vs Happy Horse: AI Video Guide",
    "description": "Compare Google Gemini Omni 1.2 Flash, Veo 3.1 and Alibaba's Happy Horse on clip length, references, editing and audio, and see where Seedance 2.5 fits.",
    "publishedAt": "2026-11-18",
    "author": "Sophia Xing",
    "role": "Founder, Plot Party",
    "coverImage": "",
    "tags": [
      "AI Video",
      "Comparison",
      "Model Guides"
    ],
    "readingTime": 9,
    "featured": true,
    "relatedLinks": [
      {
        "label": "Seedance 2.5",
        "href": "https://plotparty.ai/seedance/2.5"
      },
      {
        "label": "Gemini Omni Flash",
        "href": "https://plotparty.ai/gemini-omni/flash"
      },
      {
        "label": "Kling 4.0 vs Seedance 2.5 vs Veo 3.1",
        "href": "/blog/kling-4-0-vs-seedance-2-5-vs-veo-3-1-comparison"
      }
    ]
  },
  {
    "slug": "how-to-move-manga-panels-animate-webtoons-with-ai",
    "title": "How to Move Manga Panels & Animate Webtoons with AI (2026)",
    "description": "Learn how to move manga panels and turn black-and-white manga or color webtoons into voiced 9:16 AI anime episodes with consistent characters on Plot Party.",
    "publishedAt": "2026-11-18",
    "author": "Sophia Xing",
    "role": "Founder, Plot Party",
    "coverImage": "",
    "tags": [
      "AI Anime",
      "Tutorial",
      "Creators"
    ],
    "readingTime": 9,
    "featured": true,
    "relatedLinks": [
      {
        "label": "AI Anime Microdrama Generator",
        "href": "https://plotparty.ai/tools/ai-anime-microdrama-generator"
      },
      {
        "label": "AI Subtitles & Dubbing",
        "href": "https://plotparty.ai/tools/ai-subtitles-and-dubbing"
      },
      {
        "label": "IP Holders' Guide",
        "href": "/blog/ip-holders-guide-ai-content-monetization"
      }
    ]
  },
  {
    "slug": "image-to-video-vs-text-to-video-ai-filmmaking-workflow",
    "title": "Image-to-Video vs Text-to-Video AI: Pro Filmmaking Workflow",
    "description": "Why AI filmmakers lock character sheets and keyframes before animating. Compare text-to-video, image-to-video and reference video in Seedance 2.5 and H3.",
    "publishedAt": "2026-11-18",
    "author": "Sophia Xing",
    "role": "Founder, Plot Party",
    "coverImage": "",
    "tags": [
      "AI Video",
      "Workflow",
      "Creators"
    ],
    "readingTime": 9,
    "featured": true,
    "relatedLinks": [
      {
        "label": "Plot Party Generate",
        "href": "https://plotparty.ai/generate?tab=video"
      },
      {
        "label": "AI Storyboard Generator",
        "href": "https://plotparty.ai/tools/ai-storyboard-generator"
      },
      {
        "label": "Consistent Character Video",
        "href": "https://plotparty.ai/tools/consistent-character-video"
      }
    ]
  },
  {
    "slug": "grok-imagine-vs-midjourney-vs-nano-banana-2-storyboards",
    "title": "Grok Imagine vs Midjourney vs Nano Banana 2: Storyboard Test",
    "description": "Compare xAI Grok Imagine, Midjourney and Google Nano Banana 2 for mood boards, 9-grid storyboards and key art, and see which fits each pre-production stage.",
    "publishedAt": "2026-11-18",
    "author": "Sophia Xing",
    "role": "Founder, Plot Party",
    "coverImage": "",
    "tags": [
      "AI Image",
      "Comparison",
      "Model Guides"
    ],
    "readingTime": 8,
    "featured": true,
    "relatedLinks": [
      {
        "label": "Grok Imagine",
        "href": "https://plotparty.ai/grok-imagine"
      },
      {
        "label": "Midjourney",
        "href": "https://plotparty.ai/midjourney"
      },
      {
        "label": "AI Storyboard Generator",
        "href": "https://plotparty.ai/tools/ai-storyboard-generator"
      }
    ]
  },
  {
    slug: 'plot-party-vs-openart-ai-microdrama-comparison',
    title: 'Plot Party vs OpenArt (2026): Which AI Microdrama & Character Studio Wins?',
    description: 'Compare Plot Party vs OpenArt for AI microdrama production, character turnaround sheets, multi-shot 9:16 video consistency, and 4K episodic delivery.',
    publishedAt: '2026-11-10',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: '',
    tags: ['Comparison', 'AI Drama', 'Creators'],
    readingTime: 7,
    featured: true,
    relatedLinks: [
      { label: 'Create an AI Microdrama', href: appUrl('/tools/ai-microdrama-generator') },
      { label: 'Consistent Character Video', href: appUrl('/tools/consistent-character-video') },
      { label: 'Microdrama Monetization Playbook', href: '/blog/ai-microdrama-monetization-playbook-reelshort-dramabox-tiktok-series' }
    ]
  },
  {
    slug: 'plot-party-vs-invideo-vs-picsart-ai-microdrama-generator',
    title: 'Best AI Microdrama Generators 2026: Plot Party vs InVideo vs Picsart',
    description: 'Compare Plot Party, InVideo and Picsart for a three-episode 9:16 AI microdrama: recurring characters, storyboards, dialogue, revision control and production cost.',
    publishedAt: '2026-11-10',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: '',
    tags: ['Comparison', 'AI Drama', 'Creators'],
    readingTime: 8,
    featured: true,
    relatedLinks: [
      { label: 'Create an AI Microdrama', href: appUrl('/tools/ai-microdrama-generator') },
      { label: 'Plot Party vs OpenArt', href: '/blog/plot-party-vs-openart-ai-microdrama-comparison' },
      { label: 'Microdrama Monetization Playbook', href: '/blog/ai-microdrama-monetization-playbook-reelshort-dramabox-tiktok-series' }
    ]
  },
  {
    slug: 'ai-microdrama-monetization-playbook-reelshort-dramabox-tiktok-series',
    title: 'AI Microdrama Monetization Playbook 2026: ReelShort, DramaBox & TikTok ROI',
    description: 'Plan AI microdrama monetization with 60-episode budget scenarios, coin-unlock economics, branded short dramas, localization costs and transparent break-even calculations.',
    publishedAt: '2026-11-10',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: '',
    tags: ['Industry', 'Monetization', 'Microdrama'],
    readingTime: 9,
    featured: true,
    relatedLinks: [
      { label: 'IP & Studio Solutions', href: appUrl('/ip?contact=sales') },
      { label: 'Novel to Video AI', href: appUrl('/tools/novel-to-video-ai') },
      { label: 'How Microdramas Make Money', href: '/blog/how-microdramas-make-money-ads-vs-in-app-purchases' }
    ]
  },
  {
    "slug": "minimax-h3-vs-seedance-2-5-comparison",
    "title": "MiniMax H3 (Hailuo 03) vs Seedance 2.5: Which AI Video Model Wins?",
    "description": "Compare MiniMax H3 (Hailuo 03) and Seedance 2.5 side by side on clip length (15s vs 30s), reference limits (12 vs 50), 11-language lip-sync, millisecond shot cuts, and 1080p motion.",
    "publishedAt": "2026-10-26",
    "author": "Sophia Xing",
    "role": "Founder, Plot Party",
    "coverImage": "",
    "tags": [
      "AI Video",
      "Creators",
      "Model Guides"
    ],
    "readingTime": 9,
    "featured": true
  },
  {
    "slug": "nano-banana-2-vs-gpt-image-2-5-vs-midjourney",
    "title": "Nano Banana 2 vs GPT Image 2.5 vs Midjourney: 4K AI Image Test",
    "description": "Compare Google Nano Banana 2 (Gemini 3.1 Flash Image), OpenAI GPT Image 2.5 (Flare & Sunburst), and Midjourney on character consistency, 16-ref editing, alpha PNGs, and 4K key art.",
    "publishedAt": "2026-10-26",
    "author": "Sophia Xing",
    "role": "Founder, Plot Party",
    "coverImage": "",
    "tags": [
      "AI Video",
      "Creators",
      "Model Guides"
    ],
    "readingTime": 10,
    "featured": true
  },
  {
    "slug": "how-to-upscale-ai-video-to-4k-seedvr-2-guide",
    "title": "How to Upscale 480p AI Video to 4K with SeedVR 2 (No Local GPU)",
    "description": "Upscale 480p and 720p AI videos to crisp 4K Ultra HD online in your browser using ByteDance SeedVR 2 on Plot Party. One-step diffusion restoration with temporal face de-flickering.",
    "publishedAt": "2026-10-26",
    "author": "Sophia Xing",
    "role": "Founder, Plot Party",
    "coverImage": "",
    "tags": [
      "AI Video",
      "Creators",
      "Model Guides"
    ],
    "readingTime": 8,
    "featured": true
  },
  {
    "slug": "gpt-image-2-5-flare-vs-sunburst-character-sheet-guide",
    "title": "GPT Image 2.5 Flare vs Sunburst: 16-Ref Character Sheets & Alpha PNGs",
    "description": "Master OpenAI GPT Image 2.5 Flare and Sunburst modes on Plot Party. Combine up to 16 reference images, build 4-angle 4K character turnaround sheets, and export native transparent PNG props.",
    "publishedAt": "2026-10-26",
    "author": "Sophia Xing",
    "role": "Founder, Plot Party",
    "coverImage": "",
    "tags": [
      "AI Video",
      "Creators",
      "Model Guides"
    ],
    "readingTime": 8,
    "featured": true
  },
  {
    slug: 'plot-party-studio-agent-native-drama-workbench',
    title: "Plot Party Studio: Agent-Native AI Drama & Storyboard Workbench",
    description: "Plot Party Studio is an agent-native workbench for long-form AI drama. Brief the agent, and it writes scripts, casts characters, generates every clip, scores the cut, and files each result into a tree you can open, edit, and reuse. Here is how the three-column workbench, the six tools, skills, memory, and credits work.",
    publishedAt: '2026-09-19',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-plot-party-studio-agent.png',
    tags: ['AI Video', 'Creators', 'AI Drama'],
    readingTime: 12,
    featured: true,
    relatedLinks: [
      { label: 'Contact the Plot Party team', href: appUrl('/ip?contact=sales') },
      { label: 'Try Plot Party', href: appUrl('/home') },
      { label: 'Create a Drama Episode on Plot Party', href: '/blog/creating-drama-episode-plot-party-tutorial' }
    ]
  },
  {
    slug: 'plot-party-mcp-direct-ai-microdrama-from-claude-chatgpt',
    title: "Plot Party MCP: Generate AI Video & Dramas in Claude & ChatGPT",
    description: "Plot Party MCP turns your AI agent into a director. Connect one URL to Claude, ChatGPT, Cursor, or Codex and generate character sheets, nine-grid variations, Seedance 2.5 and Kling 3.0 clips, dialogue, and music without leaving the chat. Setup, tools, a step-by-step episode workflow, and FAQ.",
    publishedAt: '2026-09-12',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-plot-party-mcp-director.png',
    tags: ['AI Video', 'Creators', 'AI Drama'],
    readingTime: 11,
    featured: true,
    relatedLinks: [
      { label: 'Plot Party MCP Guide', href: 'https://www.plotparty.ai/guide/mcp' },
      { label: 'Try Plot Party', href: appUrl('/home') },
      { label: 'Create a Drama Episode on Plot Party', href: '/blog/creating-drama-episode-plot-party-tutorial' }
    ]
  },
  {
    slug: 'best-sora-alternatives-2026',
    title: "7 Best OpenAI Sora Alternatives in 2026 (30s & Multi-Shot AI)",
    description: "Sora's app closed in April and its API ends September 24, 2026. Here are the best Sora alternatives for every job it did: Veo 3.1, Kling 3.0, Seedance 2.5, MiniMax H3, Runway, Higgsfield, and a story-first option for creators who used Sora's storyboard and cameos.",
    publishedAt: '2026-09-12',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-sora-alternatives-2026.png',
    tags: ['AI Video', 'Landscape', 'Creators'],
    readingTime: 12,
    featured: true,
    relatedLinks: [
      { label: 'Try Plot Party', href: appUrl('/home') },
      { label: 'Best AI Video Models 2026', href: '/blog/best-ai-video-models-2026-creator-guide' },
      { label: 'Create a Drama Episode on Plot Party', href: '/blog/creating-drama-episode-plot-party-tutorial' }
    ]
  },
  {
    slug: 'best-ai-video-models-2026-creator-guide',
    title: "Best AI Video Models 2026: Seedance 2.5 vs Kling 3 vs Veo 3.1",
    description: "A creator's guide to the best AI video generators in 2026. Compare Seedance 2.5, Kling 3.0, Veo 3.1, MiniMax H3, and Wan 2.6 on clip length, references, audio, and cost, then learn why the platform you run them in matters more than any single model.",
    publishedAt: '2026-09-12',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-best-ai-video-models-2026.png',
    tags: ['AI Video', 'Landscape', 'Creators'],
    readingTime: 12,
    featured: true,
    relatedLinks: [
      { label: 'Try Plot Party', href: appUrl('/home') },
      { label: 'Seedance 2.5 Guide', href: '/blog/seedance-2-5-ai-video-guide' },
      { label: 'Best AI Character Consistency Tools', href: '/blog/best-ai-character-consistency-tools-2026' }
    ]
  },
  {
    slug: 'plot-party-vs-krea-ai-comparison',
    title: "Plot Party vs Krea AI (2026): Story Studio vs Model Canvas",
    description: "Compare Plot Party and Krea AI for AI content creation. See how a story-first AI microdrama workspace differs from Krea's real-time, multi-model creative canvas, and which one fits your workflow.",
    publishedAt: '2026-07-29',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-vs-krea-v2.png',
    tags: ['AI Video', 'Landscape', 'Creators'],
    readingTime: 8,
    featured: true,
    relatedLinks: [
      { label: 'Try Plot Party', href: appUrl('/home') },
      { label: 'AI Video Tools Guide', href: '/blog/ai-video-generation-tools-2026-comparison' },
      { label: 'Best AI Character Consistency Tools', href: '/blog/best-ai-character-consistency-tools-2026' }
    ]
  },
  {
    slug: 'plot-party-vs-midjourney-ai-video-comparison',
    title: "Plot Party vs Midjourney (2026): Key Art to AI Video Workflow",
    description: "Compare Plot Party and Midjourney for AI creative work. See how a story-first AI microdrama platform differs from Midjourney's image-generation-first approach, and which one fits your project.",
    publishedAt: '2026-07-29',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-vs-midjourney-v2.png',
    tags: ['AI Video', 'Landscape', 'Creators'],
    readingTime: 7,
    featured: true,
    relatedLinks: [
      { label: 'Try Plot Party', href: appUrl('/home') },
      { label: 'Best AI Character Consistency Tools', href: '/blog/best-ai-character-consistency-tools-2026' },
      { label: 'How to Create an AI Microdrama', href: '/blog/how-to-create-ai-microdrama-complete-guide' }
    ]
  },
  {
    slug: 'plot-party-vs-pika-ai-video-comparison',
    title: "Plot Party vs Pika AI (2026): Episodic Drama vs Social Clips",
    description: "Compare Plot Party and Pika for AI video creation. See how a story-first microdrama workspace differs from Pika's fast, prompt-driven social video generator, and which one fits your workflow.",
    publishedAt: '2026-07-28',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-vs-pika-v2.png',
    tags: ['AI Video', 'Landscape', 'Creators'],
    readingTime: 7,
    featured: true,
    relatedLinks: [
      { label: 'Try Plot Party', href: appUrl('/home') },
      { label: 'AI Video Tools Guide', href: '/blog/ai-video-generation-tools-2026-comparison' },
      { label: 'Microdrama 101', href: '/blog/microdrama-101-everything-you-need-to-know' }
    ]
  },
  {
    slug: 'plot-party-vs-runway-ai-video-comparison',
    title: "Plot Party vs Runway Gen-4.5 (2026): AI Story & VFX Compared",
    description: "Compare Plot Party and Runway for AI video creation. See how a story-first microdrama workspace differs from Runway's professional video generation and editing platform, and which one fits your workflow.",
    publishedAt: '2026-07-28',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-vs-runway-v2.png',
    tags: ['AI Video', 'Landscape', 'Creators'],
    readingTime: 8,
    featured: true,
    relatedLinks: [
      { label: 'Try Plot Party', href: appUrl('/home') },
      { label: 'AI Video Tools Guide', href: '/blog/ai-video-generation-tools-2026-comparison' },
      { label: 'Best AI Character Consistency Tools', href: '/blog/best-ai-character-consistency-tools-2026' }
    ]
  },
  {
    slug: 'seedance-2-5-ai-video-guide',
    title: "Seedance 2.5 Guide: 30s Takes, 50 Refs & Region Edit | PlotParty",
    description: "Seedance 2.5 is ByteDance's newest AI video model, officially unveiled with native 30-second single-shot generation, 50 full-modal references, and region-level editing. Here's what's confirmed, what's still unclear, and how creators should prepare.",
    publishedAt: '2026-07-27',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-seedance-2-5-v3.png',
    tags: ['AI Video', 'Landscape', 'Creators'],
    readingTime: 10,
    featured: true,
    relatedLinks: [
      { label: 'Try Seedance 2.0 on Plot Party', href: appUrl('/home') },
      { label: 'Seedance 2.0 Complete Guide', href: '/blog/seedance-2-ai-video-model-guide' },
      { label: 'Seedance 2.5 Page', href: '/page/seedance-2-5' }
    ]
  },
  {
    slug: 'microdrama-industry-report-2026-market-size-trends',
    title: "Microdrama Industry Report 2026: Market Size, ReelShort & Trends",
    description: 'The microdrama industry in 2026 by the numbers: market size and growth, regional breakdown, top platforms like ReelShort and DramaBox, monetization shifts, and where AI production fits into the shakeout.',
    publishedAt: '2026-07-25',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-microdrama-industry-report-v2.png',
    tags: ['AI Drama', 'Microdrama', 'Landscape'],
    readingTime: 10,
    featured: true,
    relatedLinks: [
      { label: 'Create Your Own Microdrama', href: appUrl('/home') },
      { label: 'AI Microdrama Adoption Data', href: '/blog/ai-generated-microdrama-adoption-how-much-of-the-charts-is-ai-now' },
      { label: 'Microdrama 101', href: '/blog/microdrama-101-everything-you-need-to-know' }
    ]
  },
  {
    slug: 'ai-generated-microdrama-adoption-how-much-of-the-charts-is-ai-now',
    title: "AI Microdrama Statistics 2026: 38% of Top Manju Charts Are AI",
    description: 'A data-backed look at how much of the microdrama chart is already AI-generated, where the 38% number comes from, and what adoption means for creators, studios, and platforms.',
    publishedAt: '2026-07-24',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/ai-microdrama-adoption-cover-2026.png',
    tags: ['AI Drama', 'Microdrama', 'Landscape'],
    readingTime: 10,
    featured: true,
    relatedLinks: [
      { label: 'Create AI Microdramas', href: appUrl('/home') },
      { label: 'How to Create an AI Microdrama', href: '/blog/how-to-create-ai-microdrama-complete-guide' },
      { label: 'Microdrama 101', href: '/blog/microdrama-101-everything-you-need-to-know' }
    ]
  },
  {
    slug: 'best-ai-character-consistency-tools-2026',
    title: "Best AI Character Consistency Tools 2026 (Video & Image Guide)",
    description: 'Compare the best AI character consistency tools for creators in 2026, including Plot Party, Runway, Kling AI, Higgsfield, Midjourney, ComfyUI, Adobe Firefly, and Pika.',
    publishedAt: '2026-07-23',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-character-consistency-2026.png',
    tags: ['AI Video', 'Landscape', 'Creators'],
    readingTime: 11,
    featured: true,
    relatedLinks: [
      { label: 'Create Consistent Characters', href: appUrl('/home') },
      { label: 'AI Video Tools Guide', href: '/blog/ai-video-generation-tools-2026-comparison' },
      { label: 'Create a Drama Episode', href: '/blog/creating-drama-episode-plot-party-tutorial' }
    ]
  },
  {
    slug: 'how-microdramas-make-money-ads-vs-in-app-purchases',
    title: "How Microdramas Make Money (2026): Coin IAP, Ads & Creator ROI",
    description: 'A practical guide to microdrama monetization models, comparing ad-supported viewing and coin-based in-app purchases so creators can match revenue strategy to story genre, audience, and market.',
    publishedAt: '2026-07-22',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-microdrama-ads-vs-iap.png',
    tags: ['Monetization', 'Microdrama', 'Creators'],
    readingTime: 9,
    featured: true,
    relatedLinks: [
      { label: 'Create Your Own Microdrama', href: appUrl('/home') },
      { label: 'Microdrama 101', href: '/blog/microdrama-101-everything-you-need-to-know' },
      { label: 'How to Create an AI Microdrama', href: '/blog/how-to-create-ai-microdrama-complete-guide' }
    ]
  },
  {
    slug: 'higgsfield-hyperframes-liblibai-plot-party-ai-video-tools-comparison',
    title: "Higgsfield vs HyperFrames vs LiblibAI vs Plot Party (2026)",
    description: 'Compare Higgsfield, HeyGen HyperFrames, LiblibAI, and Plot Party for AI video creation, product videos, open-source rendering, image-to-video workflows, and AI microdrama production.',
    publishedAt: '2026-07-21',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-ai-video-tools-4way.png',
    tags: ['AI Video', 'Landscape', 'Creators'],
    readingTime: 9,
    featured: true,
    relatedLinks: [
      { label: 'Try Plot Party', href: appUrl('/home') },
      { label: 'AI Video Tools Guide', href: '/blog/ai-video-generation-tools-2026-comparison' },
      { label: 'Create a Drama Episode', href: '/blog/creating-drama-episode-plot-party-tutorial' }
    ]
  },
  {
    slug: 'microdrama-feelings-business-four-quadrants',
    title: "How to Write Viral Microdrama Hooks: 4 Emotional Story Tropes",
    description: 'A Plot Party framework for understanding microdrama through four core emotional payoffs: warmth, the reveal, the reckoning, and being owed.',
    publishedAt: '2026-07-17',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: '/page/blog/blogs/microdrama-feelings-01.jpg',
    tags: ['Microdrama', 'Strategy', 'Creators'],
    readingTime: 8,
    featured: true,
    relatedLinks: [
      { label: 'Create Your Own Microdrama', href: appUrl('/home') },
      { label: 'Microdrama 101', href: '/blog/microdrama-101-everything-you-need-to-know' },
      { label: 'AI Video Tools', href: '/blog/ai-video-generation-tools-2026-comparison' }
    ]
  },
  {
    slug: 'director-studio-ai-video-control-guide',
    title: "AI Video Camera Control Guide: Angles, Cuts & Multi-Shot Blocking",
    description: "Learn how Plot Party's Director Studio helps creators control character blocking, poses, props, scenes, and camera movement so AI video models generate closer to your creative intent.",
    publishedAt: '2026-07-09',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/3d-director-sudio.png',
    tags: ['AI Video', 'Creators', 'AI Drama'],
    readingTime: 7,
    featured: true,
    relatedLinks: [
      { label: 'Try Director Studio', href: appUrl('/home') },
      { label: 'Create a Story', href: appUrl('/home') },
      { label: 'Explore Community', href: appUrl('/community') }
    ]
  },
  {
    slug: 'microdrama-101-everything-you-need-to-know',
    title: "Microdrama 101: Complete Guide to the $20B Vertical Drama Market",
    description: 'The complete guide to the microdrama industry — market size, top platforms, revenue models, production costs, audience demographics, and how AI is transforming short-form drama creation.',
    publishedAt: '2026-03-22',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-microdrama-101-v2.png',
    tags: ['AI Drama', 'Landscape', 'Creators'],
    readingTime: 12,
    featured: true,
    relatedLinks: [
      { label: 'Create Your Own Microdrama', href: appUrl('/home') },
      { label: 'How Microdramas Make Money', href: '/blog/how-microdramas-make-money-ads-vs-in-app-purchases' },
      { label: 'Explore Community', href: appUrl('/community') }
    ]
  },
  {
    slug: 'seedance-2-ai-video-model-guide',
    title: "Seedance 2.0 vs 2.5 Multimodal AI Video Prompt Guide | PlotParty",
    description: "Explore Seedance 2.0's multimodal video generation — combine images, video, audio, and text references for cinematic AI content. Best practices, prompting tips, and creative examples.",
    publishedAt: '2026-03-22',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-seedance-2-v3.png',
    tags: ['AI Video', 'Landscape', 'Creators'],
    readingTime: 9,
    featured: true,
    relatedLinks: [
      { label: 'Try It on Plot Party', href: appUrl('/home') },
      { label: 'View Pricing', href: appUrl('/pricing') },
      { label: 'Explore Community', href: appUrl('/community') }
    ]
  },
  {
    slug: 'creating-drama-episode-plot-party-tutorial',
    title: "Creating a Drama Episode in Plot Party: 10-Min Studio Tutorial",
    description: "Learn how to create a 1-2 minute AI drama episode on Plot Party. From writing your script to generating videos and publishing — a complete walkthrough of the agentic canvas.",
    publishedAt: '2026-03-21',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/canvas-agent-mode.png',
    tags: ['AI Drama', 'Creators', 'AI Video'],
    readingTime: 6,
    featured: true,
    relatedLinks: [
      { label: 'Start Creating', href: appUrl('/home') },
      { label: 'Quick Generations', href: appUrl('/generate') },
      { label: 'View Pricing', href: appUrl('/pricing') }
    ]
  },
  {
    slug: 'how-to-create-ai-microdrama-complete-guide',
    title: "How to Create an AI Microdrama: Step-by-Step Producer Guide",
    description: 'Learn how to create compelling AI-generated microdramas from scratch. Step-by-step guide covering story structure, AI video generation, character design, and publishing your first microdrama on Plot Party.',
    publishedAt: '2026-03-20',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-microdrama-how-to-create-v2.png',
    tags: ['AI Video', 'AI Drama', 'Creators'],
    readingTime: 8,
    featured: true,
    relatedLinks: [
      { label: 'Start Creating', href: appUrl('/home') },
      { label: 'Explore Community Stories', href: appUrl('/community') },
      { label: 'View Pricing Plans', href: appUrl('/pricing') }
    ]
  },
  {
    slug: 'ai-video-generation-tools-2026-comparison',
    title: "Best AI Video Generation Platforms 2026: Studio Comparison",
    description: "Compare the top AI video generation tools of 2026 including Plot Party, Runway, Pika, and more. Discover which tool is best for microdramas, short films, and creative storytelling projects.",
    publishedAt: '2026-03-15',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/cover-ai-video-tools-2026-roundup-v2.png',
    tags: ['AI Video', 'Landscape', 'Creators'],
    readingTime: 10,
    featured: false,
    relatedLinks: [
      { label: 'Try Plot Party Free', href: appUrl('/pricing') },
      { label: 'See What Creators Are Making', href: appUrl('/community') }
    ]
  },
  {
    slug: 'ip-holders-guide-ai-content-monetization',
    title: "Webnovel & IP Holders Guide: Adapt Books into AI Microdramas",
    description: 'A comprehensive guide for IP holders on leveraging AI content creation tools to monetize characters, worlds, and stories. Learn about licensing, fan engagement, and revenue strategies with Plot Party.',
    publishedAt: '2026-03-10',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/blog-cover-ip-world.png',
    tags: ['Monetization', 'Landscape', 'Creators'],
    readingTime: 7,
    featured: true,
    relatedLinks: [
      { label: 'IP Holders Program', href: appUrl('/ip') },
      { label: 'Pricing for IP Holders', href: appUrl('/pricing') },
      { label: 'Contact Us', href: appUrl('/ip?contact=sales') }
    ]
  }
]
