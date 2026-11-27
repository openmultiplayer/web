---
title: "NPC_StopMove | open.mp"
description: "Stops an NPC from moving."
canonical: https://open.mp/docs/scripting/functions/NPC_StopMove
language: en
---

# NPC\_StopMove

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Stops an NPC from moving to their current destination.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC. |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcstopmove", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:success = NPC_StopMove(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d stop moving: %s", npcid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```

## Notes

-   This stops the NPC at their current position.
-   If the NPC is not moving, this function has no effect.
-   The NPC will remain at the stopped position until given a new movement command.
-   Use [NPC\_IsMoving](https://open.mp/docs/scripting/functions/NPC_IsMoving) to check if an NPC is currently moving.

## Related Functions

-   [NPC\_Move](https://open.mp/docs/scripting/functions/NPC_Move): Make NPC move to a position.
-   [NPC\_IsMoving](https://open.mp/docs/scripting/functions/NPC_IsMoving): Check if NPC is moving.
-   [NPC\_MoveByPath](https://open.mp/docs/scripting/functions/NPC_MoveByPath): Make NPC follow a path.
-   [NPC\_SetPos](https://open.mp/docs/scripting/functions/NPC_SetPos): Set NPC position instantly.

## Related Callbacks

-   [OnNPCFinishMove](https://open.mp/docs/scripting/callbacks/OnNPCFinishMove): Called when NPC finishes movement.
