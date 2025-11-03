---
title: NPC_GetVelocity
sidebar_label: NPC_GetVelocity
description: Gets the velocity of an NPC.
tags: ["npc", "velocity", "movement"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the velocity of an NPC.

| Name     | Description                                              |
| -------- | -------------------------------------------------------- |
| npcid    | The ID of the NPC                                        |
| &Float:x | Variable to store the X velocity component, passed by reference |
| &Float:y | Variable to store the Y velocity component, passed by reference |
| &Float:z | Variable to store the Z velocity component, passed by reference |

## Returns

Returns `true` on success, `false` on failure.

## Examples

## Notes

:::warning

- All velocity parameters are passed by reference and will be modified

:::

## Related Functions

- [NPC_SetVelocity](NPC_SetVelocity): Set NPC velocity
- [NPC_GetPos](NPC_GetPos): Get NPC position
- [NPC_Move](NPC_Move): Make NPC move to position

## Related Callbacks

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes movement
