---
title: "NPC_Respawn | open.mp"
description: "Respawns an NPC to their spawn position, resetting their state."
canonical: https://open.mp/docs/scripting/functions/NPC_Respawn
language: en
---

# NPC\_Respawn

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Respawns an NPC to their spawn position, resetting their state.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC. |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/respawnnpc", true))
    {
        new npcid = PlayerNPC[playerid];

        if (!NPC_IsValid(npcid))
        {
            SendClientMessage(playerid, 0xFF0000FF, "You don't have a valid NPC to respawn.");
            return 1;
        }

        if (NPC_Respawn(npcid))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Your NPC (ID %d) has been respawned.", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to respawn your NPC (ID %d).", npcid);
        }

        return 1;
    }
    return 0;
}
```

## Notes

note

-   Resets NPC health, position, and state.
-   NPC returns to their original spawn coordinates.
-   All current activities (movement, combat) are stopped.

## Related Functions

-   [NPC\_Spawn](https://open.mp/docs/scripting/functions/NPC_Spawn): Initial spawn of NPC.
-   [NPC\_SetPos](https://open.mp/docs/scripting/functions/NPC_SetPos): Set NPC position.
-   [NPC\_GetHealth](https://open.mp/docs/scripting/functions/NPC_GetHealth): Get NPC health.
-   [NPC\_IsDead](https://open.mp/docs/scripting/functions/NPC_IsDead): Check if NPC is dead.

## Related Callbacks

-   [OnNPCSpawn](https://open.mp/docs/scripting/callbacks/OnNPCSpawn): Called when NPC spawns.
-   [OnNPCRespawn](https://open.mp/docs/scripting/callbacks/OnNPCRespawn): Called when NPC respawns.
