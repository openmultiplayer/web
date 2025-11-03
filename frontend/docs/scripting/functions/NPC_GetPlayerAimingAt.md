---
title: NPC_GetPlayerAimingAt
sidebar_label: NPC_GetPlayerAimingAt
description: Gets the ID of the player that an NPC is currently aiming at.
tags: ["npc", "player", "aiming", "weapon"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the ID of the player that an NPC is currently aiming at.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the ID of the player being aimed at, or `INVALID_PLAYER_ID` if not aiming at anyone.

## Examples

## Notes

- Returns the player ID if the NPC is aiming using [NPC_AimAtPlayer](NPC_AimAtPlayer)
- Returns `INVALID_PLAYER_ID` if the NPC is not aiming at any player
- This is different from aiming at a fixed position with [NPC_AimAt](NPC_AimAt)

## Related Functions

- [NPC_AimAtPlayer](NPC_AimAtPlayer): Make NPC aim at a player
- [NPC_IsAimingAtPlayer](NPC_IsAimingAtPlayer): Check if NPC is aiming at specific player
- [NPC_IsAiming](NPC_IsAiming): Check if NPC is aiming
- [NPC_GetPlayerMovingTo](NPC_GetPlayerMovingTo): Get player NPC is moving toward

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Called when NPC damages a player
