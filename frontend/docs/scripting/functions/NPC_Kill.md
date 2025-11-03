---
title: NPC_Kill
sidebar_label: NPC_Kill
description: Kills an NPC with a specific weapon/reason.
tags: ["npc", "death", "kill"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Kills an NPC with a specific weapon/reason.

| Name     | Description                                                                  |
| -------- | ---------------------------------------------------------------------------- |
| npcid    | The ID of the NPC to kill                                                    |
| killerid | The ID of the player who killed the NPC (optional, use INVALID_PLAYER_ID for no killer) |
| reason   | The weapon ID or reason for death (default: 255 for suicide)                 |

## Returns

Returns `true` on success, `false` on failure.

## Examples

## Notes

- Setting the NPC's health to 0 will also kill it
- Use `INVALID_PLAYER_ID` for killerid if there is no killer
- The reason parameter uses weapon IDs (WEAPON enum)
- This triggers the [OnNPCDeath](../callbacks/OnNPCDeath) callback

## Related Functions

- [NPC_SetHealth](NPC_SetHealth): Set NPC health
- [NPC_GetHealth](NPC_GetHealth): Get NPC health
- [NPC_IsDead](NPC_IsDead): Check if NPC is dead
- [NPC_Respawn](NPC_Respawn): Respawn an NPC

## Related Callbacks

- [OnNPCDeath](../callbacks/OnNPCDeath): Called when NPC dies
- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Called when NPC takes damage
