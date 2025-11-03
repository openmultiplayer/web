---
title: NPC_GetSkin
sidebar_label: NPC_GetSkin
description: Gets the skin/model ID of an NPC.
tags: ["npc", "skin", "model"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the skin/model ID of an NPC.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the skin/model ID of the NPC, or -1 if invalid.

## Examples

## Notes

- Returns the current skin/model the NPC is using
- Use [NPC_SetSkin](NPC_SetSkin) to change the NPC's skin

## Related Functions

- [NPC_SetSkin](NPC_SetSkin): Set NPC skin/model
- [NPC_IsValid](NPC_IsValid): Check if NPC is valid
- [NPC_IsSpawned](NPC_IsSpawned): Check if NPC is spawned

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns
