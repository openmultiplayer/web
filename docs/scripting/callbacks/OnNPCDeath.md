---
title: "OnNPCDeath | open.mp"
description: "This callback is called when an NPC dies."
canonical: https://open.mp/docs/scripting/callbacks/OnNPCDeath
language: en
---

# OnNPCDeath

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

This callback is called when an NPC dies.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC that died |
| killerid | The ID of the player/NPC that killed the NPC (or INVALID\_PLAYER\_ID if none) |
| WEAPON:reason | The reason for death (weapon ID or death cause) |

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

-   The `killerid` parameter will be `INVALID_PLAYER_ID` if the NPC death was not player inflicted
-   The `reason` parameter contains the weapon ID that caused the death (255 for unknown/other causes)

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [NPC\_Kill](https://open.mp/docs/scripting/functions/NPC_Kill): Kill an NPC
-   [NPC\_Respawn](https://open.mp/docs/scripting/functions/NPC_Respawn): Respawn a dead NPC
-   [NPC\_GetHealth](https://open.mp/docs/scripting/functions/NPC_GetHealth): Get NPC's health
-   [NPC\_SetHealth](https://open.mp/docs/scripting/functions/NPC_SetHealth): Set NPC's health

## Related Callbacks

-   [OnNPCSpawn](https://open.mp/docs/scripting/callbacks/OnNPCSpawn): Called when an NPC spawns
-   [OnNPCRespawn](https://open.mp/docs/scripting/callbacks/OnNPCRespawn): Called when an NPC respawns
-   [OnNPCTakeDamage](https://open.mp/docs/scripting/callbacks/OnNPCTakeDamage): Called when an NPC takes damage
-   [OnPlayerDeath](https://open.mp/docs/scripting/callbacks/OnPlayerDeath): Called when a player dies
