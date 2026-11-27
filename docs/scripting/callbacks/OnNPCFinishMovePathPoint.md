---
title: "OnNPCFinishMovePathPoint | open.mp"
description: "Called when an NPC finishes moving to a specific point in a path."
canonical: https://open.mp/docs/scripting/callbacks/OnNPCFinishMovePathPoint
language: en
---

# OnNPCFinishMovePathPoint

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

This callback is called when an NPC finishes moving to a specific point in a path.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC that finished the path point |
| pathid | The ID of the path being followed |
| pointid | The index of the point that was reached |

## Examples

```c
public OnNPCFinishMovePathPoint(npcid, pathid, pointid)
{
    // Find all players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d reached point %d on path %d", npcid, pointid, pathid);
        }
    }
    return 1;
}

```

## Notes

-   This callback is triggered for each point in the path
-   Use [OnNPCFinishMovePath](https://open.mp/docs/scripting/callbacks/OnNPCFinishMovePath) to detect when the entire path is completed
-   The NPC must be moving along a path using [NPC\_MoveByPath](https://open.mp/docs/scripting/functions/NPC_MoveByPath)

## Related Functions

-   [NPC\_MoveByPath](https://open.mp/docs/scripting/functions/NPC_MoveByPath): Make NPC follow a path
-   [NPC\_CreatePath](https://open.mp/docs/scripting/functions/NPC_CreatePath): Create a new path
-   [NPC\_AddPointToPath](https://open.mp/docs/scripting/functions/NPC_AddPointToPath): Add a point to a path
-   [NPC\_GetCurrentPathPointIndex](https://open.mp/docs/scripting/functions/NPC_GetCurrentPathPointIndex): Get current path point

## Related Callbacks

-   [OnNPCFinishMovePath](https://open.mp/docs/scripting/callbacks/OnNPCFinishMovePath): Called when NPC finishes entire path
-   [OnNPCFinishMove](https://open.mp/docs/scripting/callbacks/OnNPCFinishMove): Called when NPC finishes any movement
