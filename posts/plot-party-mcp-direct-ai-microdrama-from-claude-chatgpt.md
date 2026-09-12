---
title: "Plot Party MCP: Direct a Full AI Microdrama From Claude, ChatGPT, or Cursor"
description: "Plot Party MCP turns your AI agent into a director. Connect one URL to Claude, ChatGPT, Cursor, or Codex and generate character sheets, nine-grid variations, Seedance 2.5 and Kling 3.0 clips, dialogue, and music without leaving the chat. Setup, tools, a step-by-step episode workflow, and FAQ."
date: 2026-09-12
author: "Sophia Xing"
readingTime: 11
tags: ["AI Video", "Creators", "AI Drama"]
keywords: ["Plot Party MCP", "MCP AI video generation", "generate AI video from ChatGPT", "generate AI video from Claude", "Claude AI video generator", "ChatGPT video generator MCP", "AI microdrama from chat", "Seedance 2.5 MCP", "Kling 3.0 MCP", "MCP server for creators", "agent-native video creation"]
coverImage: "https://storage.googleapis.com/plotparty-storage-public/blogs/cover-plot-party-mcp-director.png"
outline: deep
head:
  - - link
    - rel: canonical
      href: https://plotparty.ai/page/blog/posts/plot-party-mcp-direct-ai-microdrama-from-claude-chatgpt
  - - meta
    - property: og:title
      content: "Plot Party MCP: Direct a Full AI Microdrama From Claude, ChatGPT, or Cursor"
  - - meta
    - property: og:description
      content: "Plot Party MCP turns your AI agent into a director. Connect one URL to Claude, ChatGPT, Cursor, or Codex and generate character sheets, nine-grid variations, Seedance 2.5 and Kling 3.0 clips, dialogue, and music without leaving the chat. Setup, tools, a step-by-step episode workflow, and FAQ."
  - - meta
    - property: og:image
      content: https://storage.googleapis.com/plotparty-storage-public/blogs/cover-plot-party-mcp-director.png
  - - meta
    - property: og:url
      content: https://plotparty.ai/page/blog/posts/plot-party-mcp-direct-ai-microdrama-from-claude-chatgpt
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:image
      content: https://storage.googleapis.com/plotparty-storage-public/blogs/cover-plot-party-mcp-director.png
---

Most creators now start a project in a chat window. You brainstorm the premise with Claude, outline episodes in ChatGPT, keep the character bible in Cursor next to your scripts. Then, to actually make the video, you leave. You open a generation tool, re-explain the characters, paste prompts one at a time, download clips, and come back.

Plot Party MCP removes the leaving. It is a remote Model Context Protocol (MCP) server at `https://plotparty.ai/mcp`. Paste that URL into Claude, ChatGPT, Cursor, Codex, or any MCP-compatible agent, sign in once, and the agent you already talk to can generate character sheets, storyboard variations, video clips with Seedance 2.5 or Kling 3.0, dialogue, and music through Plot Party. Your credits and credentials stay on Plot Party's side. The agent does the directing.

This guide covers what changed to make this practical, what Plot Party MCP actually exposes, how to connect each client, a full step-by-step episode workflow, and where the limits are.

## What Changed: Agents Got Good Enough to Direct

MCP has existed since late 2024. Anthropic introduced it, OpenAI adopted it at DevDay in October 2025, and by mid-2026 Claude, ChatGPT, Cursor, Codex, and most agent frameworks speak it. What was missing was an agent reliable enough to run a twelve-step production without losing track.

That gap closed this month. OpenAI's GPT-6 Astra began rolling out on September 3, 2026 with a 1M-token context window and a large jump on agentic-workflow benchmarks. Claude's current models have handled long tool chains for a while. Between them, the agent on the other end of an MCP connection can now hold a full script, a character bible, a style guide, and the history of every asset it has generated, then make the next call correctly.

Higgsfield's Games 2.0 launch on Astra this week is one example of the pattern: a frontier agent plans, a creative platform generates. Plot Party MCP applies the same pattern to the thing we care about, which is stories with a cast that survives from shot one to shot forty.

## What Is Plot Party MCP?

Plot Party MCP is the same generation backbone that powers the [Plot Party](https://plotparty.ai/home?auth=register) canvas, exposed as tools an agent can call. Authentication is OAuth. The agent asks for two scopes, `mcp:read` and `mcp:tools`, and every call is logged and billed to your account in credits.

Generation is asynchronous. A video call returns immediately with a card that polls its own status and updates in place when the clip is ready, so the agent is not blocked while Seedance renders a 30-second take.

### The Tools

| Tool | What it does |
|------|--------------|
| `generate_image` | Story frames, concept art, product visuals, and reference-driven images |
| `generate_character_views` | A multi-angle character sheet from a description or a photo, the identity anchor for every later shot |
| `generate_nine_grid` | Nine controlled variations of one reference image: same subject, style, and setting, varied pose, expression, angle, and framing |
| `generate_video` | Cinematic clips from a prompt plus reference images, with model, duration, aspect ratio, and audio options |
| `generate_audio` / `list_supported_audio_voices` | Dialogue and narration with model-specific voices |
| `generate_background_music` | Soundtrack for the cut |
| `upload_media` | Send your own images or video into the pipeline as references |
| `models_explore` | Let the agent inspect which image, video, and audio models are available and what parameters each accepts |
| `get_tool_result` | Poll a task and return signed media URLs when it finishes |
| `fetch_history` | Recall earlier generations in the session |
| `get_account_balance` | Check credits before spending them |

### The Models

The agent chooses per shot, or you tell it which to use.

| Type | Models available through MCP |
|------|------------------------------|
| **Video** | Seedance 2.5 (omni, up to 30-second single take), Seedance 2.0 (omni), Seedance 2.0 Fast, Seedance 2.0 Mini, Kling 3.0 Pro, Kling 3.0 Pro Turbo, Kling 2.5 Pro, Gemini Omni Flash, Happy Horse |
| **Image** | GPT Image 2 and 2.5, Nano Banana 2, Gemini 3 Pro Image, Seedream v5 |
| **Audio** | MiniMax Speech 2.6 HD, ElevenLabs multilingual |

Two reference modes matter. The Seedance family, Gemini Omni Flash, and Happy Horse take **omni references**: pass every image the clip should follow, such as the storyboard frame, the character sheet, a prop, or a previous clip for continuation. Kling models are **frame-locked**: pass an explicit first frame, and optionally a last frame, when the shot pins exact start and end images. The agent handles this distinction, but knowing it helps you ask for the right shot.

### Skills: Packaged Productions

On top of the raw tools, Plot Party exposes **skills**: complete production playbooks the agent can run from start to finish. The current catalog includes:

- **Four-grid 1-minute short drama.** Four key shots on one keyframe board, filmed into a continuous minute with soundtrack and final cut.
- **Nine-grid 15s short episode.** Nine story beats on one board, cut as a single 15-second episode.
- **One-shot video chain.** One uninterrupted take, the camera never cuts.
- **Multi-shot narrative chain.** Keyframes bridged by motion into one flowing film.
- **Realistic short drama** and **Kore-eda film aesthetic.** Slice-of-life texture, restrained emotion, independent-film look.
- **Short drama from your material.** Upload a zip of character photos, scene shots, clips, and a document explaining who is who; get a multi-episode drama back.
- **Series autopilot.** Upload one long script with dozens of episodes and let the agent produce the whole series after one kickoff question.
- **Video recast.** Swap a person or the whole background in your own footage while the scene, camera, timing, and dialogue stay as shot.
- **Wardrobe showcase**, **photo montage**, and **Pixar-style animated ad**.

The agent lists what you can use, starts a skill, keeps the run's state, and asks you one question when a real decision is needed. Skill workflows are visible to the agent as a definition to follow, so you can also ask it to adapt one: "run the four-grid short drama but make shot three a slow push-in."

## How to Connect

**Claude (claude.ai or desktop).** Open Customize, then Connectors. Choose Add custom connector, name it Plot Party, paste `https://plotparty.ai/mcp`, and sign in with your Plot Party account when the browser prompt appears. Claude Code and Cowork use the same server.

**ChatGPT.** ChatGPT supports remote MCP servers only, which Plot Party is. On a paid plan, enable Developer Mode, add a custom connector with the same URL, and authorize. Connector availability can depend on plan, region, and workspace settings.

**Cursor and Codex.** Add the server URL to the client's MCP configuration. The OAuth flow opens in a browser the first time and the token is stored for the session.

**Cherry Studio, OpenClaw, Hermes, and other agents.** Same URL, same OAuth. If the client supports remote MCP with OAuth, it works.

The official [Plot Party MCP guide](https://www.plotparty.ai/guide/mcp) has screenshots for each client.

<PlotPartyCta label="Set Up Plot Party MCP" href="https://www.plotparty.ai/guide/mcp" />

## Full Workflow: A 60-Second Episode From One Chat

Here is a complete session, as it runs in Claude with the connector live.

**Step 1: Set the brief and the budget.**

```
Direct a 60-second vertical microdrama. Premise: a night-shift nurse finds
a letter addressed to her in a patient's coat. Tone: quiet, realistic,
Kore-eda-style. Two characters: the nurse (late 20s, tired, kind) and the
patient (70s, sharp-eyed). Keep both faces consistent in every shot.
Check my balance and estimate cost before generating anything.
```

The agent calls `get_account_balance`, lists the skills you can use, and proposes the four-grid short drama with an estimated credit cost. You confirm.

**Step 2: Lock the cast.**

The agent calls `generate_character_views` twice, once per character, and shows you the sheets. If the nurse looks too polished, you say "more tired, hair coming loose," and it regenerates only her. These sheets become references for everything downstream.

**Step 3: Board the shots.**

The skill plans four key shots and generates the keyframe board. For a shot that needs options, the agent calls `generate_nine_grid` on the nurse's sheet to explore nine expressions and angles and lets you pick the one that lands the beat. Nothing moves to video until you approve the board.

**Step 4: Film.**

The agent calls `generate_video` per shot with the character sheets and the approved keyframe attached as omni references. The two-shot dialogue beat goes to Seedance 2.5 as a single 25-second take. The insert shots go to Seedance 2.0 Fast. If a shot needs an exact opening frame, the agent switches to Kling 3.0 Pro with that frame locked. Each call returns a card that updates itself when the render finishes.

**Step 5: Sound.**

`generate_audio` produces the patient's last line in a voice the agent picks from `list_supported_audio_voices`. `generate_background_music` produces a restrained piano bed.

**Step 6: Review, revise, publish.**

The agent polls with `get_tool_result`, assembles the cut, and returns signed URLs. Revision is a sentence: "regenerate shot two with the camera lower and hold on her hands." Everything you made is also in your Plot Party account, so you can open the canvas, trim, subtitle, and publish to the community from there.

Total time is typically under half an hour. You never opened another tab.

## Plot Party MCP vs Generic Video MCPs

Several platforms now expose video models over MCP. The difference is what the tools are shaped like.

| | Generic video MCP | Plot Party MCP |
|---|---|---|
| **Unit of work** | A prompt becomes a clip | A story becomes characters, boards, shots, and a cut |
| **Consistency** | Your job: re-describe the character every call | Character sheets and nine-grids are first-class tools and travel as references |
| **Planning** | None; the agent improvises | Skills give the agent a production playbook with approval gates |
| **Long takes** | Usually 5 to 15 seconds | Seedance 2.5 single takes up to 30 seconds for dialogue scenes |
| **After the chat** | Download files | Everything lands in your Plot Party canvas for editing and publishing |

If you want one stunning clip, any video MCP will do. If you want episode three to star the same people as episode one, the tools have to know what a character is.

## What Else Can You Do With It?

- **Storyboard vertical shorts** in 9:16 from a script, using image tools only, and spend zero video credits until the board is right.
- **Product UGC.** Upload a product photo with `upload_media`, generate a presenter sheet, and film short reference-driven clips with the product locked in frame.
- **Documentary-style narration.** Generate stills, a narration track, and a photo montage cut, again with no video credits.
- **Recast your own footage.** Swap a performer or a background in a clip you shot while keeping timing and dialogue.
- **Run a whole series hands-off.** Series autopilot reads a long script by outline, asks one kickoff question, and produces every episode.

## Limits and Honest Caveats

- **Credits are spent per generation, retries included.** Approve boards before video. Ask the agent to estimate first.
- **Some models are gated.** Availability of specific video models can depend on your plan. `models_explore` shows what your account can run.
- **Skill runs have a task budget.** A skill submits a bounded number of media tasks before pausing to ask you to confirm more, so a runaway agent cannot drain your balance.
- **ChatGPT connectors are less predictable than Claude's.** Community reports through 2026 include connectors that authorize but do not appear in chat. If ChatGPT misbehaves, the same URL in Claude or Cursor is the fastest workaround.
- **Video is slow by nature.** A 30-second Seedance 2.5 take can take several minutes. The card updates itself; do not make the agent block on it.

## Get Started

1. Create or sign in to your [Plot Party account](https://plotparty.ai/home?auth=register).
2. Add `https://plotparty.ai/mcp` as a connector in Claude, ChatGPT, Cursor, or Codex and authorize.
3. Ask your agent to check your balance and list available skills.
4. Give it a premise and two characters. Approve the cast. Approve the board. Let it film.

The full setup guide with screenshots is at [plotparty.ai/guide/mcp](https://www.plotparty.ai/guide/mcp). If you would rather learn the workflow in the app first, our [drama episode tutorial](./creating-drama-episode-plot-party-tutorial.md) walks through the same steps in the canvas, and our [guide to the best AI video models of 2026](./best-ai-video-models-2026-creator-guide.md) explains when to pick Seedance over Kling.

## FAQ

### What is Plot Party MCP?

A remote Model Context Protocol server at `https://plotparty.ai/mcp` that lets AI agents such as Claude, ChatGPT, Cursor, and Codex call Plot Party's image, video, audio, character, and skill tools directly from a chat.

### Can I generate AI video from ChatGPT or Claude with it?

Yes. Add the URL as a connector, sign in, and ask the agent to generate. Video runs on Seedance 2.5, Seedance 2.0, Kling 3.0, Gemini Omni Flash, or Happy Horse, billed in Plot Party credits.

### Do I need to code?

No. Setup is pasting a URL and signing in. The agent handles the tool calls. Coding matters only if you are building your own agent or automating a pipeline.

### How does it keep characters consistent?

Character sheets from the character views tool and nine-grid variations travel as references into every video call. Skills carry those references automatically from shot to shot.

### Which video model should the agent use?

Seedance 2.5 for dialogue and long single takes up to 30 seconds. Seedance 2.0 Fast or Mini for drafts and coverage. Kling 3.0 Pro when a shot needs an exact locked first or last frame. Ask the agent to run the models tool if you want to see what your plan includes.

### What does it cost?

Generation is billed in Plot Party credits per task, at the same rates as the canvas. The agent can check your balance before spending. See [pricing](https://plotparty.ai/pricing) for plans.

### Does it work with agents other than Claude and ChatGPT?

Yes. Cursor, Codex, Cherry Studio, OpenClaw, Hermes, and any MCP client that supports remote servers with OAuth.

### Where do my generated files go?

Signed URLs come back to the chat, and every asset is also saved to your Plot Party account, where you can open it in the canvas to edit, subtitle, and publish.

## Sources

- [Plot Party MCP guide](https://www.plotparty.ai/guide/mcp)
- [Model Context Protocol specification](https://modelcontextprotocol.io/)
- [Composio: ChatGPT custom connectors with MCP](https://composio.dev/content/chatgpt-custom-connectors-connect-any-app-with-mcp)
- [Peliqan: ChatGPT MCP, plans, setup and what breaks in 2026](https://peliqan.io/blog/chatgpt-mcp)
- [CNBC: OpenAI announces rollout of GPT-6 Astra](https://www.cnbc.com/2026/09/03/open-ai-astra-gpt-6-cyber.html)
- [Higgsfield: Higgsfield MCP on GPT-6 Astra](https://higgsfield.ai/blog/higgsfield-mcp-gpt6-astra-games-2)
