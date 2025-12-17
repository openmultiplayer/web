---
title: OnNPCSpawn
sidebar_label: OnNPCSpawn
description: This callback is called when an NPC spawns.
tags: ["npc"]
---

## Description

This callback is called when an NPC spawns.

| Name  | Description                    |
| ----- | ------------------------------ |
| npcid | The ID of the NPC that spawned |

## Examples

```c
public OnNPCSpawn(npcid)
{
    printf("[NPC] NPC %d has spawned", npcid);

    // Notify players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            new Float:x, Float:y, Float:z;
            NPC_GetPos(npcid, x, y, z);
            SendClientMessage(playerid, 0x00FF00FF, "Your tracked NPC %d spawned at (%.2f, %.2f, %.2f)", npcid, x, y, z);
        }
    }
    return 1;
}
```

## Notes

- This callback is called when `NPC_Spawn` is successfully executed
- The NPC becomes visible and interactive in the game world
- You can set initial NPC properties and behaviors in this callback
- The NPC's stats are automatically set to default values (100 health, 0 armor, fists weapon)

## Related Functions

- [NPC_Spawn](../functions/NPC_Spawn): Spawn an NPC in the game world
- [NPC_Respawn](../functions/NPC_Respawn): Respawn a dead NPC
- [NPC_SetHealth](../functions/NPC_SetHealth): Set NPC's health
- [NPC_SetWeapon](../functions/NPC_SetWeapon): Set NPC's weapon

## Related Callbacks

- [OnNPCCreate](OnNPCCreate): Called when an NPC is created
- [OnNPCRespawn](OnNPCRespawn): Called when an NPC respawns
- [OnNPCDeath](OnNPCDeath): Called when an NPC dies
- [OnPlayerSpawn](OnPlayerSpawn): Called when a player spawns
