---
title: NPC_GetPathPointCount
sidebar_label: NPC_GetPathPointCount
description: Gets the number of points in an NPC path.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the number of points in an NPC path.

| Name   | Description                        |
| ------ | ---------------------------------- |
| pathid | The ID of the path                |

## Returns

Returns the number of points in the path, or 0 if the path is invalid.

## Examples

```c
public OnGameModeInit()
{
    new pathid = NPC_CreatePath();
    printf("Initial point count: %d", NPC_GetPathPointCount(pathid)); // 0
    
    // Add some points
    NPC_AddPointToPath(pathid, 1958.33, 1343.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1968.33, 1353.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1978.33, 1363.12, 15.36, 1.0);
    
    printf("Point count after adding: %d", NPC_GetPathPointCount(pathid)); // 3
    
    // Remove one point
    NPC_RemovePointFromPath(pathid, 1);
    printf("Point count after removing: %d", NPC_GetPathPointCount(pathid)); // 2
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/pathinfo", true))
    {
        new totalPaths = NPC_GetPathCount();
        
        new msg[128];
        format(msg, sizeof(msg), "Server has %d paths total", totalPaths);
        SendClientMessage(playerid, 0x00FF00FF, msg);
        
        return 1;
    }
    
    if (!strcmp(cmdtext, "/checkpath", true))
    {
        new pathid = 0; // Check path 0
        new points = NPC_GetPathPointCount(pathid);
        
        new msg[64];
        format(msg, sizeof(msg), "Path 0 has %d points", points);
        SendClientMessage(playerid, 0x00FF00FF, msg);
        return 1;
    }
    return 0;
}

forward ValidatePathBeforeUse(pathid);
public ValidatePathBeforeUse(pathid)
{
    new pointCount = NPC_GetPathPointCount(pathid);
    
    if (pointCount < 2)
    {
        printf("Warning: Path %d has only %d points, need at least 2 for movement", 
            pathid, pointCount);
        return 0;
    }
    
    printf("Path %d is valid with %d points", pathid, pointCount);
    return 1;
}
```

## Notes

- Returns 0 if the path is invalid or empty
- A path needs at least 2 points to be useful for NPC movement
- Use this to validate paths before assigning them to NPCs
- Points are indexed from 0 to (count - 1)

## Related Functions

- [NPC_AddPointToPath](NPC_AddPointToPath): Add point to path
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): Remove point from path
- [NPC_GetPathPoint](NPC_GetPathPoint): Get specific point data
- [NPC_ClearPath](NPC_ClearPath): Remove all points from path

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes path
