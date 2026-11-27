---
title: "NPC_MoveByPath | open.mp"
description: "Makes an NPC follow a predefined path."
canonical: https://open.mp/docs/scripting/functions/NPC_MoveByPath
language: en
---

# NPC\_MoveByPath

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Makes an NPC follow a predefined path with various movement options.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| pathid | The ID of the path to follow |
| moveType | The movement type (default: NPC\_MOVE\_TYPE\_JOG) |
| moveSpeed | Movement speed (default: NPC\_MOVE\_SPEED\_AUTO) |
| reversed | Whether to follow path in reverse (default: false) |

## Returns

Returns `true` if the NPC started following the path, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        new count = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

        if (NPC_IsValidPath(PlayerPatrolPath[playerid]))
        {
            NPC_MoveByPath(npcid, PlayerPatrolPath[playerid], NPC_MOVE_TYPE_WALK);
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d started patrol route with %d points", npcid, count);

            StopPlayerPatrolTimer(playerid);
            PlayerPatrolTimer[playerid] = SetTimerEx("CheckPathProgress", 2000, true, "i", playerid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to start patrol route");
        }
        return 1;
    }
    return 0;
}
```

## Notes

-   Path must be created with `NPC_CreatePath` and contain at least one point before calling this function
-   Use `NPC_AddPointToPath` to build the route and `NPC_ClearPath` if you need to reset it
-   Set `reversed = true` to have the NPC traverse the path in the opposite order
-   Returns `false` if the NPC is invalid, already performing an incompatible action, or the path cannot be followed

## Related Functions

-   [NPC\_CreatePath](https://open.mp/docs/scripting/functions/NPC_CreatePath): Create a new path
-   [NPC\_AddPointToPath](https://open.mp/docs/scripting/functions/NPC_AddPointToPath): Add point to path
-   [NPC\_ClearPath](https://open.mp/docs/scripting/functions/NPC_ClearPath): Remove all points from a path
-   [NPC\_StopMove](https://open.mp/docs/scripting/functions/NPC_StopMove): Stop path movement
-   [NPC\_GetCurrentPathPointIndex](https://open.mp/docs/scripting/functions/NPC_GetCurrentPathPointIndex): Get current point

## Related Callbacks

-   [OnNPCFinishMovePath](https://open.mp/docs/scripting/callbacks/OnNPCFinishMovePath): Called when NPC finishes moving along a path
-   [OnNPCFinishMovePathPoint](https://open.mp/docs/scripting/callbacks/OnNPCFinishMovePathPoint): Called when NPC reaches each waypoint
-   [OnNPCFinishMove](https://open.mp/docs/scripting/callbacks/OnNPCFinishMove): Called when NPC finishes any movement
