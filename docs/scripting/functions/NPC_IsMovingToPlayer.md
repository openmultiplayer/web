---
title: "NPC_IsMovingToPlayer | open.mp"
description: "Checks if an NPC is moving toward a specific player."
canonical: https://open.mp/docs/scripting/functions/NPC_IsMovingToPlayer
language: en
---

# NPC\_IsMovingToPlayer

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC is moving toward a specific player.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| playerid | The ID of the player to check |

## Returns

Returns `true` if the NPC is moving toward the specified player, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkmovingtowardme", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isMovingToPlayer = NPC_IsMovingToPlayer(npcid, playerid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is moving toward you: %s", npcid, isMovingToPlayer ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

-   This function checks if the NPC was commanded to move toward a specific player using [NPC\_MoveToPlayer](https://open.mp/docs/scripting/functions/NPC_MoveToPlayer)
-   Returns false if the NPC is not moving or is moving toward a different target

## Related Functions

-   [NPC\_MoveToPlayer](https://open.mp/docs/scripting/functions/NPC_MoveToPlayer): Make NPC move toward a player
-   [NPC\_IsMoving](https://open.mp/docs/scripting/functions/NPC_IsMoving): Check if NPC is moving
-   [NPC\_StopMove](https://open.mp/docs/scripting/functions/NPC_StopMove): Stop NPC movement
-   [NPC\_GetPlayerMovingTo](https://open.mp/docs/scripting/functions/NPC_GetPlayerMovingTo): Get the player ID the NPC is moving toward

## Related Callbacks

-   [OnNPCFinishMove](https://open.mp/docs/scripting/callbacks/OnNPCFinishMove): Called when NPC finishes movement
