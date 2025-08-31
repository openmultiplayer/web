---
title: OnNPCDeath
sidebar_label: OnNPCDeath
description: This callback is called when a NPC dies.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

**## Description**

This callback is called when a NPC dies.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| npcid    | The ID of the NPC that died                          |
| killerid | The ID of the player/NPC that killed the NPC (or INVALID_PLAYER_ID if none) |
| weapon   | The weapon ID that was used to kill the NPC          |

**## Examples**

```c
public OnNPCDeath(npcid, killerid, weapon)
{
    if (killerid != INVALID_PLAYER_ID)
    {
        printf("NPC %d was killed by %d with weapon %d", npcid, killerid, weapon);
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

**## Notes**

- The `killerid` parameter will be `INVALID_PLAYER_ID` if the NPC death was not player inflicted
- The `weapon` parameter contains the weapon ID that caused the death (255 for unknown/other causes)

**## Related Functions**

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_Kill](NPC_Kill): Kill a NPC
- [NPC_Respawn](NPC_Respawn): Respawn a dead NPC
- [NPC_GetHealth](NPC_GetHealth): Get NPC's health
- [NPC_SetHealth](NPC_SetHealth): Set NPC's health

**## Related Callbacks**

- [OnNPCSpawn](OnNPCSpawn): Called when a NPC spawns
- [OnNPCRespawn](OnNPCRespawn): Called when a NPC respawns
- [OnNPCTakeDamage](OnNPCTakeDamage): Called when a NPC takes damage
- [OnPlayerDeath](OnPlayerDeath): Called when a player dies
