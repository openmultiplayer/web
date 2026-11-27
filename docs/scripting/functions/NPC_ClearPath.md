---
title: "NPC_ClearPath | open.mp"
description: "Clears all points from an NPC path."
canonical: https://open.mp/docs/scripting/functions/NPC_ClearPath
language: en
---

# NPC\_ClearPath

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Clears all points from an NPC path, making it empty.

| Name | Description |
| --- | --- |
| pathid | The ID of the path to clear |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/clearpatrol", true))
    {
        // Get the number of points before clearing
        new count = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

        // Try to clear the path
        if (NPC_ClearPath(PlayerPatrolPath[playerid]))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Cleared path %d (%d points removed)", PlayerPatrolPath[playerid], count);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to clear path");
        }

        return 1;
    }
    return 0;
}
```

## Notes

-   This function removes all waypoints from the specified path
-   The path itself remains valid and can be reused
-   Any NPCs currently following this path will stop moving

## Related Functions

-   [NPC\_CreatePath](https://open.mp/docs/scripting/functions/NPC_CreatePath): Create a new path
-   [NPC\_AddPointToPath](https://open.mp/docs/scripting/functions/NPC_AddPointToPath): Add a point to a path
-   [NPC\_RemovePointFromPath](https://open.mp/docs/scripting/functions/NPC_RemovePointFromPath): Remove specific point
-   [NPC\_GetPathPointCount](https://open.mp/docs/scripting/functions/NPC_GetPathPointCount): Get number of points in path

## Related Callbacks

-   [OnNPCFinishMovePath](https://open.mp/docs/scripting/callbacks/OnNPCFinishMovePath): Called when NPC finishes path
