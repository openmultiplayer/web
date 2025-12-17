---
title: OnNPCDeath
sidebar_label: OnNPCDeath
description: This callback is called when an NPC dies.
tags: ["npc"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

This callback is called when an NPC dies.

| Name     | Description                                                                 |
| -------- | --------------------------------------------------------------------------- |
| npcid    | The ID of the NPC that died                                                 |
| killerid | The ID of the player/NPC that killed the NPC (or INVALID_PLAYER_ID if none) |
| reason   | The reason for death (weapon ID or death cause)                             |

## Examples

```c
public OnNPCDeath(npcid, killerid, WEAPON:reason)
{
    printf("[NPC] NPC %d died (killer: %d, weapon: %d)", npcid, killerid, _:reason);

    // Notify players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            if (killerid == INVALID_PLAYER_ID)
            {
                SendClientMessage(playerid, 0xFF0000FF, "Your tracked NPC %d died (weapon: %d)", npcid, _:reason);
            }
            else
            {
                SendClientMessage(playerid, 0xFF0000FF, "Your tracked NPC %d was killed by player %d (weapon: %d)", npcid, killerid, _:reason);
            }
        }
    }
    return 1;
}
```

## Notes

- The `killerid` parameter will be `INVALID_PLAYER_ID` if the NPC death was not player inflicted
- The `reason` parameter contains the weapon ID that caused the death (255 for unknown/other causes)

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_Kill](../functions/NPC_Kill): Kill an NPC
- [NPC_Respawn](../functions/NPC_Respawn): Respawn a dead NPC
- [NPC_GetHealth](../functions/NPC_GetHealth): Get NPC's health
- [NPC_SetHealth](../functions/NPC_SetHealth): Set NPC's health

## Related Callbacks

- [OnNPCSpawn](OnNPCSpawn): Called when an NPC spawns
- [OnNPCRespawn](OnNPCRespawn): Called when an NPC respawns
- [OnNPCTakeDamage](OnNPCTakeDamage): Called when an NPC takes damage
- [OnPlayerDeath](OnPlayerDeath): Called when a player dies
