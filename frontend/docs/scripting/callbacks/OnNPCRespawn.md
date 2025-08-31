---
title: OnNPCRespawn
sidebar_label: OnNPCRespawn
description: This callback is called when a NPC respawns.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when a NPC respawns.

| Name  | Description                      |
| ----- | -------------------------------- |
| npcid | The ID of the NPC that respawned |

## Examples

```c
public OnNPCRespawn(npcid)
{
    printf("NPC %d has respawned", npcid);
    
    // Set respawn position
    SetPlayerPos(npcid, 1958.33, 1343.12, 15.36);
    SetPlayerFacingAngle(npcid, 0.0);
    
    return true;
}
```

## Notes

- This callback is called after the NPC has been respawned using `NPC_Respawn`
- The NPC's health and armor are automatically restored during respawn
- Any ongoing movement, playback, etc, are stopped when respawning

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_Respawn](NPC_Respawn): Respawn a NPC
- [NPC_Spawn](NPC_Spawn): Spawn a NPC for the first time
- [NPC_SetHealth](NPC_SetHealth): Set NPC's health
- [NPC_SetPosition](NPC_SetPosition): Set NPC's position

## Related Callbacks

- [OnNPCSpawn](OnNPCSpawn): Called when a NPC spawns for the first time
- [OnNPCDeath](OnNPCDeath): Called when a NPC dies
- [OnPlayerSpawn](OnPlayerSpawn): Called when a player spawns
