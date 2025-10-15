---
title: OnNPCRespawn
sidebar_label: OnNPCRespawn
description: This callback is called when an NPC respawns.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when an NPC respawns.

| Name  | Description                      |
| ----- | -------------------------------- |
| npcid | The ID of the NPC that respawned |

## Examples

```c
public OnNPCRespawn(npcid)
{
    printf("NPC %d has respawned", npcid);

    // Set respawn position
    NPC_SetPos(npcid, 1958.33, 1343.12, 15.36);
    NPC_SetFacingAngle(npcid, 0.0);

    return true;
}
```

## Notes

- This callback is called after the NPC has been respawned using `NPC_Respawn`
- The NPC's health and armor are automatically restored during respawn
- Any ongoing movement, playback, etc, are stopped when respawning

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_Respawn](../functions/NPC_Respawn): Respawn an NPC
- [NPC_Spawn](../functions/NPC_Spawn): Spawn an NPC for the first time
- [NPC_SetHealth](../functions/NPC_SetHealth): Set NPC's health
- [NPC_SetPosition](../functions/NPC_SetPosition): Set NPC's position

## Related Callbacks

- [OnNPCSpawn](OnNPCSpawn): Called when an NPC spawns for the first time
- [OnNPCDeath](OnNPCDeath): Called when an NPC dies
- [OnPlayerSpawn](OnPlayerSpawn): Called when a player spawns
