---
title: "NPC_GetPlayerMovingTo | open.mp"
description: "Gets the ID of the player that an NPC is currently moving toward."
canonical: https://open.mp/docs/scripting/functions/NPC_GetPlayerMovingTo
language: en
---

# NPC\_GetPlayerMovingTo

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the ID of the player that an NPC is currently moving toward.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the ID of the player being moved toward, or `INVALID_PLAYER_ID` if not moving toward anyone.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkwhonpcmoving", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new targetid = NPC_GetPlayerMovingTo(npcid);

        if (targetid == INVALID_PLAYER_ID)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is not moving toward any player", npcid);
        else
        {
            new targetName[MAX_PLAYER_NAME];
            GetPlayerName(targetid, targetName, sizeof(targetName));
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is moving toward player %s (ID %d)", npcid, targetName, targetid);
        }
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns the player ID if the NPC is moving using [NPC\_MoveToPlayer](https://open.mp/docs/scripting/functions/NPC_MoveToPlayer)
-   Returns `INVALID_PLAYER_ID` if the NPC is not moving toward any player
-   This is different from moving to a fixed position with [NPC\_Move](https://open.mp/docs/scripting/functions/NPC_Move)

## Related Functions

-   [NPC\_MoveToPlayer](https://open.mp/docs/scripting/functions/NPC_MoveToPlayer): Make NPC move toward a player
-   [NPC\_IsMovingToPlayer](https://open.mp/docs/scripting/functions/NPC_IsMovingToPlayer): Check if NPC is moving toward specific player
-   [NPC\_IsMoving](https://open.mp/docs/scripting/functions/NPC_IsMoving): Check if NPC is moving
-   [NPC\_GetPlayerAimingAt](https://open.mp/docs/scripting/functions/NPC_GetPlayerAimingAt): Get player NPC is aiming at

## Related Callbacks

-   [OnNPCFinishMove](https://open.mp/docs/scripting/callbacks/OnNPCFinishMove): Called when NPC finishes movement
