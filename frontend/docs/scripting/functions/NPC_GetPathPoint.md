---
title: NPC_GetPathPoint
sidebar_label: NPC_GetPathPoint
description: Gets the coordinates and stop range of a specific point in an NPC path.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the coordinates and stop range of a specific point in an NPC path.

| Name        | Description                              |
| ----------- | ---------------------------------------- |
| pathid      | The ID of the path                       |
| point_index | The index of the point (starting from 0) |
| &x          | Variable to store the X coordinate       |
| &y          | Variable to store the Y coordinate       |
| &z          | Variable to store the Z coordinate       |
| &stopRange  | Variable to store the stop range         |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnGameModeInit()
{
    new pathid = NPC_CreatePath();

    // Add some points
    NPC_AddPointToPath(pathid, 1958.33, 1343.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1968.33, 1353.12, 15.36, 2.0);
    NPC_AddPointToPath(pathid, 1978.33, 1363.12, 15.36, 1.5);

    // Get information about point 0
    new Float:x, Float:y, Float:z, Float:stopRange;
    if (NPC_GetPathPoint(pathid, 0, x, y, z, stopRange))
    {
        printf("Point 0: %.2f, %.2f, %.2f (Stop Range: %.2f)", x, y, z, stopRange);
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/showpathpoints", true))
    {
        new pathid = 0; // Assume first path
        if (NPC_IsValidPath(pathid))
        {
            new pointCount = NPC_GetPathPointCount(pathid);

            new msg[128];
            format(msg, sizeof(msg), "Path %d has %d points:", pathid, pointCount);
            SendClientMessage(playerid, 0x00FF00FF, msg);

            for (new i = 0; i < pointCount; i++)
            {
                new Float:x, Float:y, Float:z, Float:stopRange;
                if (NPC_GetPathPoint(pathid, i, x, y, z, stopRange))
                {
                    format(msg, sizeof(msg), "Point %d: %.1f, %.1f, %.1f (Range: %.1f)",
                        i, x, y, z, stopRange);
                    SendClientMessage(playerid, 0xFFFFFFFF, msg);
                }
            }
        }
        return 1;
    }
    return 0;
}
```

## Notes

- All coordinate and stopRange parameters are passed by reference
- Point indices start from 0
- Returns false if the path or point index is invalid
- Use this to inspect or modify path configurations

## Related Functions

- [NPC_AddPointToPath](NPC_AddPointToPath): Add point to path
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): Remove point from path
- [NPC_GetPathPointCount](NPC_GetPathPointCount): Get number of points
- [NPC_IsValidPath](NPC_IsValidPath): Check if path is valid

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes path
