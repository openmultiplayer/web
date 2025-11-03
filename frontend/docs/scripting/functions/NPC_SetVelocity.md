---
title: NPC_SetVelocity
sidebar_label: NPC_SetVelocity
description: Sets the velocity of an NPC.
tags: ["npc", "velocity", "movement"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the velocity of an NPC.

| Name    | Description                |
| ------- | -------------------------- |
| npcid   | The ID of the NPC          |
| Float:x | The X velocity component   |
| Float:y | The Y velocity component   |
| Float:z | The Z velocity component   |

## Returns

Returns `true` on success, `false` on failure.

## Examples

## Notes

- Velocity values determine the speed and direction of movement
- Positive Z values move the NPC upward, negative values move downward
- This can be used to create custom movement behaviors

## Related Functions

- [NPC_GetVelocity](NPC_GetVelocity): Get NPC velocity
- [NPC_SetPos](NPC_SetPos): Set NPC position
- [NPC_Move](NPC_Move): Make NPC move to position

## Related Callbacks

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes movement
