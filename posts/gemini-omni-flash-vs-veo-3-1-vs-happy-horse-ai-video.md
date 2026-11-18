---
title: "Gemini Omni Flash vs Veo 3.1 vs Happy Horse: AI Video Guide"
description: "Compare Google Gemini Omni 1.2 Flash, Veo 3.1 and Alibaba's Happy Horse on clip length, references, editing and audio, and see where Seedance 2.5 fits."
date: 2026-11-18
lastUpdated: 2026-11-18
author: "Sophia Xing"
readingTime: 9
tags: ["AI Video", "Comparison", "Model Guides"]
layout: blog-post
titleTemplate: ":title | Plot Party"
outline: deep
faq:
  - question: "Did Gemini Omni Flash replace Veo 3.1?"
    answer: "Only in the Gemini app. Google says Gemini Omni replaces Veo as the video model there, but Veo 3.1 remains available to developers through the Gemini API and Vertex AI. In the API, Gemini Omni 1.2 Flash became generally available on November 5, 2026, and requests to gemini-omni-1.1-flash route to 1.2 from December 3, 2026."
  - question: "How many reference images does Gemini Omni Flash accept?"
    answer: "Google's Gemini app page lists up to five photo references. Google's 1.2 Flash announcement describes character, product and style references without stating a maximum, and API providers set their own limits, so check the cap in the interface you use."
  - question: "Is Gemini Omni 1.2 Flash cheaper than Veo 3.1?"
    answer: "Google lists Gemini Omni 1.2 Flash at about $0.07 per second of 720p video, 30% below Omni 1.1 Flash. Omni drafts at 360p or 720p and upscales the best takes to 1080p or 4K, so the cheapest workflow is to iterate at 720p and upscale only approved clips."
  - question: "When should I use Happy Horse instead of a Google model?"
    answer: "Use Happy Horse for energetic commercial motion, stylized characters, pets and product shots where prompt adherence and synchronized sound matter more than conversational editing. Alibaba's Happy Horse 1.0 reached the top of the Artificial Analysis video arena in April 2026, and version 1.1 followed in June."
  - question: "How do I keep one character consistent across all three models?"
    answer: "Build one approved character sheet and one set of location plates, then send the same files to every model. For photorealistic recurring human leads, Seedance 2.5 and MiniMax H3 inside Plot Party give you the largest reference budgets and keep the cast in one project."
---

## Why Google Now Has Two Video Lines

**Gemini Omni Flash is Google's conversational, reference-first video model; Veo 3.1 is its generation-first model for short, physically convincing shots.** In the Gemini app, [Google says Omni replaces Veo](https://gemini.google/overview/video-generation/?hl=en-CA). For developers, both remain available, which is why creators keep asking which one to use.

On November 5, 2026, Google made [Gemini Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) generally available on the Gemini API and Google Cloud. It extends clips to 15 seconds, lowers the 720p price to about $0.07 per second and adds stronger multi-speaker dialogue. Veo 3.1 still produces 4, 6 or 8-second clips with first and last frame control and up to three reference images.

The third name in this comparison comes from Alibaba. [Happy Horse 1.0](https://www.thestar.com.my/tech/tech-news/2026/04/13/alibaba-claims-viral-happy-horse-ai-model-in-latest-breakthrough) topped the Artificial Analysis text-to-video leaderboard in April 2026 before Alibaba confirmed it built the model. Version 1.1 followed in June. It generates 1080p video with synchronized audio from text, images or reference sets.

- **Gemini Omni 1.2 Flash** suits briefs where you want to talk the edit through: change the weather, swap the product, fix one detail, extend the scene.
- **Veo 3.1** suits short shots where light, glass, water and smoke must read as real, and transitions between two fixed frames.
- **Happy Horse** suits high-energy product and stylized shorts where prompt adherence and native sound matter.

<InlineStudioCallout href="/seedance/2.5" title="Hold a full cast with Seedance 2.5" />

## Specification Table: Omni Flash vs Veo 3.1 vs Happy Horse vs Seedance 2.5

Seedance 2.5 is included because it is the long-take, high-reference model most Plot Party creators already use, and it fills the gaps the other three leave.

| Dimension | Gemini Omni 1.2 Flash | Google Veo 3.1 | Happy Horse 1.0 / 1.1 | Seedance 2.5 |
|---|---|---|---|---|
| Clip length | 3–15 seconds, one-second steps | 4, 6 or 8 seconds | Short clips; check your provider's limits | 4–30 seconds |
| Resolution | 360p or 720p drafts; upscale to 1080p or 4K | 720p, 1080p or 4K; 1080p and 4K at 8 seconds | Up to 1080p | 480p, 720p or native 1080p |
| Inputs | Text, images, short motion clips, audio cues, first and last keyframes | Text, first and last frame, or up to 3 reference images | Text, image, reference set, video edit | Up to 30 images, 10 videos and 10 audio clips |
| Editing | Multi-turn conversational edits, scene extension, camera controls | Scene extension | Video edit endpoint | Region Edit and Video Extend |
| Audio | Native audio, multi-speaker dialogue, voice references by allowlist | Native dialogue, effects and ambience | Synchronized audio with multilingual lip-sync | Picture and sound in one pass |
| Best use | Product and scene variations through conversation | Photoreal B-roll and two-frame transitions | Dynamic ads, pets and stylized shorts | Long takes, ensemble scenes and video remakes |
| Where to run it | Gemini API, Vertex AI, Flow, Google Vids | Gemini API and Vertex AI | Alibaba and partner APIs | Plot Party Studio and Generate |

Google lists the limits it is still improving for Omni: fast sports action, rapid script changes and complex physics. Those are precisely the cases where Veo 3.1 or Seedance 2.5 are worth testing side by side.

## Gemini Omni 1.2 Flash: Direct by Conversation

Omni's distinguishing feature is the session. You generate a clip, then ask for a change in plain language and Omni edits that clip instead of starting over. Google's examples include swapping a background, a product, the lighting, the weather or the aspect ratio.

That makes Omni useful for advertising variations. Generate one approved hero shot, then ask for the same shot at dusk, in the rain, with a different bottle color and in vertical framing. Each edit keeps the parts you did not mention.

```text
Turn 1: A 12-second shot of @Reference1 lifting a ceramic mug
in a sunlit kitchen. Slow push-in. Morning birdsong.
Turn 2: Same shot, but it is raining outside the window
and the light is cool and gray.
Turn 3: Keep everything, change the mug to matte black.
Turn 4: Reframe to 9:16 and keep the mug centered.
```

Draft at 720p, choose the take you like, and upscale only that one. Google prices 720p at about $0.07 per second, so a 12-second draft costs well under a dollar before upscaling.

## Veo 3.1: Two Frames and Real Optics

Veo 3.1 remains the simpler tool when you know exactly how a shot starts and ends. Give it a first frame and a last frame and describe the motion between them. It is strong on reflections, refraction, smoke and lens behavior.

Plan around two constraints. Reference mode accepts up to three images and only produces 8-second clips. A first frame and reference images cannot be combined in one request, so choose between frame control and identity references for each shot.

## Happy Horse: Motion-First Commercial Shots

Happy Horse earned attention by following prompts precisely and pairing motion with sound in a single pass. Alibaba exposes text-to-video, image-to-video, reference-to-video and video editing through partners such as fal.

Use it for product reveals, pet action and stylized characters. For photorealistic recurring human leads, route the shot to a model that sits inside your production project and holds a larger cast reference set, such as Seedance 2.5 or MiniMax H3 on Plot Party. Keep stylized characters, pets and product motion on Happy Horse.

```text
9:16, 1080p. A corgi in a tiny delivery vest sprints through
a rainy alley, leaps a puddle in slow motion, and lands
beside a glowing parcel locker. Splash sound on landing,
upbeat synth sting as the locker opens.
```

The [Cat Room Swoop template](https://plotparty.ai/templates/cat-room-swoop) shows the same kind of pet camera move inside Plot Party.

<InlineStudioCallout href="/seedvr/2" title="Upscale approved clips to 4K with SeedVR 2" />

## A Routing Plan Across the Four Models

| Shot type | First choice | Why |
|---|---|---|
| Product shot in six variations | Gemini Omni 1.2 Flash | Conversational edits keep the base shot |
| Glass, water or smoke close-up | Veo 3.1 | Strong optical detail in a short take |
| Pet or stylized character action | Happy Horse | Energetic motion with synchronized sound |
| Recurring human cast, long take | Seedance 2.5 | Up to 50 references and 30 seconds |
| Two-person dialogue with cuts | MiniMax H3 | Scripted multi-shot dialogue and lip-sync |

Whatever the engine, start from the same approved cast and location files. Keep them in the [Consistent Character Video](https://plotparty.ai/tools/consistent-character-video) workflow and reuse them across every shot.

## Finishing a Mixed Episode

Omni drafts at 720p, Veo 3.1 and Happy Horse can deliver 1080p, and Seedance 2.5 renders native 1080p. Choose one delivery format before you start. Upscale approved clips through [SeedVR 2](https://plotparty.ai/seedvr/2), match frame rates in the edit, and apply one color treatment so cuts between engines do not jump.

For a longer look at Veo 3.1 against 30-second models, see [Kling 4.0 vs Seedance 2.5 vs Veo 3.1](./kling-4-0-vs-seedance-2-5-vs-veo-3-1-comparison.md). For dialogue-heavy scenes, see [MiniMax H3 vs Seedance 2.5](./minimax-h3-vs-seedance-2-5-comparison.md).

## FAQ

<BlogFaq />
