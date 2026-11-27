---
title: "NPC_GetPathPoint | open.mp"
description: "Gets the coordinates and stop range of a specific point in an NPC path."
canonical: https://open.mp/docs/scripting/functions/NPC_GetPathPoint
language: en
---

# NPC\_GetPathPoint

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the coordinates and stop range of a specific point in an NPC path.

| Name | Description |
| --- | --- |
| pathid | The ID of the path |
| point\_index | The index of the point (starting from 0) |
| &x | Variable to store the X coordinate |
| &y | Variable to store the Y coordinate |
| &z | Variable to store the Z coordinate |
| &stopRange | Variable to store the stop range |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpathpoint", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new pathid = PlayerPatrolPath[playerid];
        if (pathid == INVALID_PATH_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "No patrol path assigned.");

        new pointindex = NPC_GetCurrentPathPointIndex(npcid);
        new Float:x, Float:y, Float:z, Float:stopRange;

        if (!NPC_GetPathPoint(pathid, pointindex, x, y, z, stopRange))
            return SendClientMessage(playerid, 0xFFFF00FF, "Failed to get path point.");

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d path point %d: %.2f, %.2f, %.2f", npcid, pointindex, x, y, z);
        return 1;
    }
    return 0;
}
```

## Notes

-   All coordinate and stopRange parameters are passed by reference
-   Point indices start from 0
-   Returns false if the path or point index is invalid

## Related Functions

-   [NPC\_AddPointToPath](https://open.mp/docs/scripting/functions/NPC_AddPointToPath): Add point to path
-   [NPC\_RemovePointFromPath](https://open.mp/docs/scripting/functions/NPC_RemovePointFromPath): Remove point from path
-   [NPC\_GetPathPointCount](https://open.mp/docs/scripting/functions/NPC_GetPathPointCount): Get number of points
-   [NPC\_IsValidPath](https://open.mp/docs/scripting/functions/NPC_IsValidPath): Check if path is valid

## Related Callbacks

-   [OnNPCFinishMovePath](https://open.mp/docs/scripting/callbacks/OnNPCFinishMovePath): Called when NPC finishes path
