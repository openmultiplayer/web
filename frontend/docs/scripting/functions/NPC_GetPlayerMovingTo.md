---
title: NPC_GetPlayerMovingTo
sidebar_label: NPC_GetPlayerMovingTo
description: Gets the ID of the player that an NPC is currently moving toward.
tags: ["npc", "player", "movement"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the ID of the player that an NPC is currently moving toward.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the ID of the player being moved toward, or `INVALID_PLAYER_ID` if not moving toward anyone.

## Examples

## Notes

- Returns the player ID if the NPC is moving using [NPC_MoveToPlayer](NPC_MoveToPlayer)
- Returns `INVALID_PLAYER_ID` if the NPC is not moving toward any player
- This is different from moving to a fixed position with [NPC_Move](NPC_Move)

## Related Functions

- [NPC_MoveToPlayer](NPC_MoveToPlayer): Make NPC move toward a player
- [NPC_IsMovingToPlayer](NPC_IsMovingToPlayer): Check if NPC is moving toward specific player
- [NPC_IsMoving](NPC_IsMoving): Check if NPC is moving
- [NPC_GetPlayerAimingAt](NPC_GetPlayerAimingAt): Get player NPC is aiming at

## Related Callbacks

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes movement
