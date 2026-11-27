---
title: "OnNPCRespawn | open.mp"
description: "This callback is called when an NPC respawns."
canonical: https://open.mp/docs/scripting/callbacks/OnNPCRespawn
language: en
---

# OnNPCRespawn

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

This callback is called when an NPC respawns.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC that respawned |

## Examples

```c
public OnNPCRespawn(npcid)
{
    printf("[NPC] NPC %d has respawned", npcid);

    // Notify players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "Your tracked NPC %d has respawned", npcid);
        }
    }
    return 1;
}
```

## Notes

-   This callback is called after the NPC has been respawned using `NPC_Respawn`
-   The NPC's health and armor are automatically restored during respawn
-   Any ongoing movement, playback, etc, are stopped when respawning

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [NPC\_Respawn](https://open.mp/docs/scripting/functions/NPC_Respawn): Respawn an NPC
-   [NPC\_Spawn](https://open.mp/docs/scripting/functions/NPC_Spawn): Spawn an NPC for the first time
-   [NPC\_SetHealth](https://open.mp/docs/scripting/functions/NPC_SetHealth): Set NPC's health
-   [NPC\_SetPos](https://open.mp/docs/scripting/functions/NPC_SetPos): Set NPC's position

## Related Callbacks

-   [OnNPCSpawn](https://open.mp/docs/scripting/callbacks/OnNPCSpawn): Called when an NPC spawns for the first time
-   [OnNPCDeath](https://open.mp/docs/scripting/callbacks/OnNPCDeath): Called when an NPC dies
-   [OnPlayerSpawn](https://open.mp/docs/scripting/callbacks/OnPlayerSpawn): Called when a player spawns
