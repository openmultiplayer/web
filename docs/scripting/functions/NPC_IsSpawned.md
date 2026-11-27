---
title: "NPC_IsSpawned | open.mp"
description: "Checks if an NPC is spawned in the game world."
canonical: https://open.mp/docs/scripting/functions/NPC_IsSpawned
language: en
---

# NPC\_IsSpawned

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC is spawned in the game world.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is spawned, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkspawned", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isSpawned = NPC_IsSpawned(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is spawned: %s", npcid, isSpawned ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

-   This is different from [NPC\_IsValid](https://open.mp/docs/scripting/functions/NPC_IsValid), which checks if the NPC exists

## Related Functions

-   [NPC\_Spawn](https://open.mp/docs/scripting/functions/NPC_Spawn): Spawn an NPC
-   [NPC\_Respawn](https://open.mp/docs/scripting/functions/NPC_Respawn): Respawn an NPC
-   [NPC\_IsValid](https://open.mp/docs/scripting/functions/NPC_IsValid): Check if NPC is valid
-   [NPC\_IsDead](https://open.mp/docs/scripting/functions/NPC_IsDead): Check if NPC is dead

## Related Callbacks

-   [OnNPCSpawn](https://open.mp/docs/scripting/callbacks/OnNPCSpawn): Called when NPC spawns
-   [OnNPCRespawn](https://open.mp/docs/scripting/callbacks/OnNPCRespawn): Called when NPC respawns
