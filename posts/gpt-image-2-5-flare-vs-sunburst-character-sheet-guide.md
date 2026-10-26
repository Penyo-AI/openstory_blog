---
title: "GPT Image 2.5 Flare vs Sunburst: 16-Ref Character Sheets & Alpha PNGs"
description: "A character-sheet workflow for comparing available GPT Image 2.5 modes, organizing reference images and checking transparent PNG exports."
date: 2026-10-26
author: "Plot Party Editorial"
readingTime: 5
tags: ["AI Video", "Creators", "Model Guides"]
layout: blog-post
titleTemplate: false
outline: deep
---

## Confirm the Mode Before Building a Reference Set

Start on the [GPT Image 2.5 page](https://plotparty.ai/gpt-image/2.5) and inspect the modes, reference limits and output formats currently available. This guide covers a workflow for comparing Flare and Sunburst where those options are offered. The title describes the requested use case; it is not a guarantee that every mode accepts 16 references or exports transparency.

<InlineStudioCallout href="/gpt-image/2.5" title="Explore GPT Image 2.5" />

## Organize References by Purpose

More reference images are useful only when they agree. Separate identity, outfit, pose and style references. For a 16-image packet, a planning arrangement is four identity views, four outfit details, four poses and four lighting examples. Reduce the packet to the selected mode's supported limit and remove contradictory images first.

## Copyable Character Turnaround Prompt

```text
Create a character turnaround sheet using the supplied identity references.
Show front, three-quarter, profile and back views of the same adult character.
Preserve facial proportions, hairstyle, outfit construction and color palette.
Use neutral lighting, matching scale and an uncluttered background.
Do not introduce new accessories. Keep each view separate and readable.
```

<InlineStudioCallout href="/nano-banana/2" title="Try Nano Banana 2" />

## Compare Flare and Sunburst Fairly

If both modes are available, reuse the same supported references and prompt. Record the actual selected version and settings instead of assuming the mode names imply a particular speed or quality advantage.

| Check | Accept when |
|---|---|
| Identity | Facial proportions agree across views |
| Outfit | Seams, jewelry and colors remain consistent |
| Layout | Views are separate and at matching scale |
| Edit behavior | A requested change preserves unrelated details |
| Export | Dimensions and file format match delivery needs |

## Verify an Alpha PNG

When transparent output is available, request it explicitly and export PNG. Open the file over both a dark and a light background. A drawn checkerboard is not transparency; verify that the file contains an alpha channel and that hair and clothing edges do not have solid halos. If the mode does not provide alpha, use an appropriate background-removal step and inspect the result.

Use the same references in [Nano Banana 2](https://plotparty.ai/nano-banana/2) for an alternative image workflow. Continue with the [character consistency guide](./best-ai-character-consistency-tools-2026.md) before animating the sheet.

## FAQ

### Should all references show different characters?

For identity consistency, use one approved character. Mixed identities can make the result ambiguous even if the tool accepts the full reference packet.
