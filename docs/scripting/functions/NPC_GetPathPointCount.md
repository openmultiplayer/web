---
title: "NPC_GetPathPointCount | open.mp"
description: "Gets the number of points in an NPC path."
canonical: https://open.mp/docs/scripting/functions/NPC_GetPathPointCount
language: en
---

# NPC\_GetPathPointCount

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the number of points in an NPC path.

| Name | Description |
| --- | --- |
| pathid | The ID of the path |

## Returns

Returns the number of points in the path, or 0 if the path is invalid.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpathpointcount", true))
    {
        new pathid = PlayerPatrolPath[playerid];
        if (pathid == INVALID_PATH_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "No patrol path assigned.");

        new count = NPC_GetPathPointCount(pathid);

        SendClientMessage(playerid, 0x00FF00FF, "Path %d has %d points", pathid, count);
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns 0 if the path is invalid or empty

## Related Functions

-   [NPC\_AddPointToPath](https://open.mp/docs/scripting/functions/NPC_AddPointToPath): Add point to path
-   [NPC\_RemovePointFromPath](https://open.mp/docs/scripting/functions/NPC_RemovePointFromPath): Remove point from path
-   [NPC\_GetPathPoint](https://open.mp/docs/scripting/functions/NPC_GetPathPoint): Get specific point data
-   [NPC\_ClearPath](https://open.mp/docs/scripting/functions/NPC_ClearPath): Remove all points from path

## Related Callbacks

-   [OnNPCFinishMovePath](https://open.mp/docs/scripting/callbacks/OnNPCFinishMovePath): Called when NPC finishes path
