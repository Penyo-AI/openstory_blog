---
title: "GPT Image 2.5 Flare vs Sunburst: 16-Ref Character Sheets & Alpha PNGs"
description: "Master OpenAI GPT Image 2.5 Flare and Sunburst modes on Plot Party. Combine up to 16 reference images, build 4-angle 4K character turnaround sheets, and export native transparent PNG props."
date: 2026-10-26
lastUpdated: 2026-11-04
author: "Sophia Xing"
readingTime: 8
tags: ["AI Video", "Creators", "Model Guides"]
layout: blog-post
titleTemplate: ":title | Plot Party"
outline: deep
faq:
  - question: "What is the difference between GPT Image 2.5 Flare and Sunburst?"
    answer: "Flare is the speed-optimized variant inside GPT Image 2.5, with roughly 50% lower latency than GPT Image 1.5 for rapid drafting and single-attribute edits. Sunburst is the precision-optimized variant for 16-reference ensemble scenes, four-angle 4K character turnaround sheets and complex multi-step non-destructive edits."
  - question: "Does GPT Image 2.5 really support 16 reference images at once?"
    answer: "Yes. On Plot Party, GPT Image 2.5 accepts up to 16 simultaneous reference images in a single generation or editing pass. Organize the packet by cast, wardrobe, props, setting and typography so each reference has a clear purpose."
  - question: "Can GPT Image 2.5 export real transparent background PNGs?"
    answer: "Yes. It natively outputs alpha-channel PNG and WebP files with clean transparency around hair, fur, smoke and glass. Use these assets as replaceable props for Seedance 2.5 and Resident Evil Pet Courier, then inspect the edges before compositing."
  - question: "How do I verify that an exported PNG has a true alpha channel?"
    answer: "Request a 100% transparent background (alpha PNG) in your prompt and place the file over a dark node in Plot Party Canvas to confirm there is no baked-in checkerboard or white halo. Also check it over a light background and confirm the file contains an alpha channel."
  - question: "How do I animate a GPT Image 2.5 character turnaround sheet into a video?"
    answer: "Send your four-angle sheet with one click into MiniMax H3 for 11-language lip-synced dialogue or Seedance 2.5 for 30-second 1080p continuous motion. Reuse the approved face, wardrobe and prop references throughout the episode."
---

## What Is GPT Image 2.5, and Why Do Flare and Sunburst Matter?

**Use Flare for fast drafts and transparent prop cutouts; use Sunburst for 16-reference compositions and four-angle 4K character sheets.** On [Plot Party](https://plotparty.ai/gpt-image/2.5), OpenAI GPT Image 2.5 combines reference-guided generation, surgical non-destructive editing and native transparent PNG/WebP output in two specialized execution variants.

For a microdrama, the useful deliverables are concrete: a clean four-view character sheet, an alternate outfit that preserves the actor's face, and a hero prop with a stable silhouette. Prepare those assets once and reuse them across scenes instead of redesigning the character with every video prompt.

Flare is the speed-optimized tier: roughly **50% lower latency than GPT Image 1.5**, at an approximately **$0.02-per-image equivalent compute tier**. Sunburst is the precision-optimized tier, at approximately **$0.07 per image in equivalent compute**, built for dense multi-reference scenes, stacked edits and detailed character turnarounds. Both accept **up to 16 simultaneous reference images** and support 1K, 2K and 4K output.

<InlineStudioCallout href="/gpt-image/2.5" title="Build a character sheet with GPT Image 2.5" />

## Flare vs Sunburst: Practical Comparison

Choose the variant according to the task you want to complete. Flare keeps concept exploration moving; Sunburst handles the reference density and spatial precision of a final production asset. The compute-tier equivalents describe the variants; use your project's Plot Points estimate for the generation you are about to run.

| Specification or workflow | Flare | Sunburst |
|---|---|---|
| Core optimization | High-speed iteration; about 50% lower latency than GPT Image 1.5 | Maximum spatial precision and dense multi-reference consistency |
| Simultaneous references | Up to 16; optimized for 1–4 references | Up to 16; full 16-reference ensemble lock |
| Resolutions and quality | 1K, 2K and 4K; Low to High quality tiers | 1K, 2K and 4K; High, Extra High and Max quality tiers |
| Aspect ratios | 16:9, 9:16, 1:1, 3:2, 2:3, 4:3 and 3:4 | 16:9, 9:16, 1:1, 3:2, 2:3, 4:3 and 3:4 |
| Native transparent PNG / WebP | Fast isolated prop, icon and character cutouts | Fine alpha detail around hair, fur, glass and smoke |
| Non-destructive region editing | Single-attribute swaps, such as shirt color or glasses | Stacked edits: relight a room, swap a coat and add rain while locking the face |
| Best production job | Storyboard drafts and transparent prop PNGs | Master four-angle character sheets and 16-reference ensemble scenes |

Choose the frame shape before rendering. A 16:9 sheet at 4K gives four full-body views room to remain distinct; a 1:1 image suits an isolated prop, and a portrait frame suits a character close-up or product hero image. Set the resolution and quality for the asset's final use after the composition is approved.

## Organize a 16-Reference Packet

Inside Plot Party Agentic Canvas, organize the 16 reference slots into four groups. Each group should answer a different question about the image, so the model can combine identity, costume, set design and typography without competing instructions.

| Reference slots | Asset group | What it should establish |
|---|---|---|
| 1–4 | Cast faces and expressions | Identity, facial proportions and the intended emotion |
| 5–10 | Wardrobe and hero props | Clothing construction, accessories, materials and prop geometry |
| 11–14 | Set geometry and lighting | Layout, perspective, palette and light direction |
| 15–16 | Brand logos and typography | Exact graphic marks, lettering and title treatment |

For a neutral character sheet, the setting reference may be unnecessary. Use a plain studio background and prioritize the face and clothing instead. Keep the lighting reference for a later scene-placement pass.

Use all 16 slots when the scene needs a dense ensemble of people, objects and visual instructions. For a simple wardrobe swap, a smaller packet of one to four references is easier to review and well suited to Flare. Keep alternate coats and unused expression studies in the project library until a shot needs them. Avoid collages with many tiny faces; separate references make each identity and detail easier to assign.

Resolve contradictions before generating. If a coat has six buttons in one reference and four in another, choose the approved design. If the satchel changes shoulders, specify the intended side in the prompt. Reference preparation is often the quickest way to improve continuity.

## Prompt 1: Build a Four-View Character Sheet

Choose Sunburst, a 16:9 frame and 4K output for the master turnaround. Establish the front view first if the character is still being designed; once it is approved, use it to guide all four angles at matching scale and under neutral light.

```text
Create a clean 16:9 4K studio turnaround sheet of the adult
character in Reference 1. Use Reference 5 for the approved outfit
and Reference 10 for the leather satchel.

Show four separate full-body views in one row:
front, three-quarter, side profile and back.
Keep the same facial structure, short dark hair,
silver-rimmed glasses, navy wool peacoat and satchel.

Use neutral studio lighting and a plain gray background.
Match body scale and ground line across all four views.
Leave space between figures and keep shoes fully visible.
Do not add new accessories or decorative text.
```

Review the face and silhouette at normal display size, then inspect the details. Count buttons, check the glasses shape and compare the bag strap's attachment points. The back view must plausibly belong to the same outfit even though the face is invisible.

Save the approved full sheet as a production reference. Also save individual views for video inputs; a multi-panel sheet can confuse a shot that is meant to contain just one person. The [character consistency guide](./best-ai-character-consistency-tools-2026.md) explains how to carry approved designs into multiple scenes.

## Prompt 2: Export a Native Transparent PNG Prop

Use Flare or Sunburst with a 1:1 frame for a native alpha PNG. An isolated prop should have a readable outline, consistent materials and clean transparency around straps and hardware. Begin with a simple three-quarter view before requesting dramatic lighting or a complicated arrangement.

```text
Generate an isolated studio product cutout on a 100%
transparent background (alpha PNG): a weathered
emerald-green tactical medical transport bag.
Use a simple original white cross-shaped emblem,
heavy black shoulder straps and metallic zipper hardware.
Show the entire bag in three-quarter view with no cropped straps.
Use soft neutral light with crisp alpha edges and zero
background halo, ready for video compositing.
No extra objects, typography or decorative frame.
```

Use Flare to explore the shape and color, then refine the chosen version when small details matter. Compare both sides of the handle and every visible strap connection. A prop that looks good in isolation may still be difficult to animate if its construction is inconsistent.

Export the native alpha PNG or WebP and place it over a dark node in Plot Party Canvas. Inspect it over white as well. Confirm that the new background shows through the empty areas, then examine hair-like fibers, loose straps, translucent materials and small openings for unwanted halos. A checkerboard painted into the image is different from a real alpha channel.

Use the approved prop in a character-and-prop workflow such as the [pet courier template](https://plotparty.ai/templates/resident-evil-pet-raccoon-city). Keep the same bag design in every reference assigned to that prop.

## Prompt 3: Make a Surgical Wardrobe and Lighting Edit

Sunburst can combine a wardrobe change and a new lighting setup while preserving the character's identity and the room's geometry. Name the changes precisely, then state which facial and spatial details must stay untouched.

```text
Edit Reference 1: change only the protagonist's white daytime
shirt into a rain-streaked black leather jacket.
Restage the room lighting from noon sunlight to moody midnight
cyan-and-amber neon through the blinds.
Keep her exact facial expression, eye-line, hairstyle
and desk layout 100% untouched.
Preserve the camera framing and the room's geometry.
```

Compare the result with the approved source, paying particular attention to the eyes, glasses, expression and position of the desk. Evaluate the wardrobe and lighting separately even when they are generated together. If one element needs refinement, return to the approved source and narrow the next edit to that element.

## Turn the References into a Video Workflow

In [Consistent Character Video](https://plotparty.ai/tools/consistent-character-video), plan the cast and choose the view that fits each shot. A speaking close-up needs a clear face; a walk-away shot needs the approved back view and costume. Match the input to the action.

Route scripted dialogue to [MiniMax H3](https://plotparty.ai/minimax/h3), which supports multiple cuts within a 1-to-15-second generation. Use [Seedance 2.5](https://plotparty.ai/seedance/2.5) for continuous takes up to 30 seconds and video-reference-driven movement. Give each reference a stable role in the prompt.

<InlineStudioCallout href="/seedance/2.5" title="Animate your approved character references" />

Before scaling production, generate one dialogue shot and one moving shot with the same cast packet. Check facial proportions, costume, prop position and screen direction. Fix a reference problem at this stage so it does not spread through an entire episode.

Keep the original images, approved edits, prompt text and output settings together. This lets a later episode reuse the same character design while changing only the scene, action or outfit that the story requires.

## FAQ

<BlogFaq />
