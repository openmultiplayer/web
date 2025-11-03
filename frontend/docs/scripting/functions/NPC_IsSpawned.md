---
title: NPC_IsSpawned
sidebar_label: NPC_IsSpawned
description: Checks if an NPC is spawned in the game world.
tags: ["npc", "spawn"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is spawned in the game world.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is spawned, `false` otherwise.

## Examples

## Notes

- An NPC must be created with [NPC_Create](NPC_Create) before it can be spawned
- Use [NPC_Spawn](NPC_Spawn) to spawn an NPC
- This is different from [NPC_IsValid](NPC_IsValid), which checks if the NPC exists

## Related Functions

- [NPC_Spawn](NPC_Spawn): Spawn an NPC
- [NPC_Respawn](NPC_Respawn): Respawn an NPC
- [NPC_IsValid](NPC_IsValid): Check if NPC is valid
- [NPC_IsDead](NPC_IsDead): Check if NPC is dead

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns
- [OnNPCRespawn](../callbacks/OnNPCRespawn): Called when NPC respawns
