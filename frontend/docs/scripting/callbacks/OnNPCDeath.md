---
title: OnNPCDeath
sidebar_label: OnNPCDeath
description: This callback is called when an NPC dies.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when an NPC dies.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| npcid    | The ID of the NPC that died                          |
| killerid | The ID of the player/NPC that killed the NPC (or INVALID_PLAYER_ID if none) |
| reason   | The reason for death (weapon ID or death cause)      |

## Examples

```c
public OnNPCDeath(npcid, killerid, reason)
{
    if (killerid != INVALID_PLAYER_ID)
    {
        printf("NPC %d was killed by %d with reason %d", npcid, killerid, reason);
    }
    else
    {
        printf("NPC %d died", npcid);
    }
    
    // Respawn after 5 seconds
    SetTimerEx("RespawnNPC", 5000, false, "i", npcid);
    
    return true;
}

forward RespawnNPC(npcid);
public RespawnNPC(npcid)
{
    NPC_Respawn(npcid);
}
```

## Notes

- The `killerid` parameter will be `INVALID_PLAYER_ID` if the NPC death was not player inflicted
- The `reason` parameter contains the weapon ID that caused the death (255 for unknown/other causes)

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_Kill](NPC_Kill): Kill an NPC
- [NPC_Respawn](NPC_Respawn): Respawn a dead NPC
- [NPC_GetHealth](NPC_GetHealth): Get NPC's health
- [NPC_SetHealth](NPC_SetHealth): Set NPC's health

## Related Callbacks

- [OnNPCSpawn](OnNPCSpawn): Called when an NPC spawns
- [OnNPCRespawn](OnNPCRespawn): Called when an NPC respawns
- [OnNPCTakeDamage](OnNPCTakeDamage): Called when an NPC takes damage
- [OnPlayerDeath](OnPlayerDeath): Called when a player dies
