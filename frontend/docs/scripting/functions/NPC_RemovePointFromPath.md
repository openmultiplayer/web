---
title: NPC_RemovePointFromPath
sidebar_label: NPC_RemovePointFromPath
description: Removes a waypoint from an NPC path.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Removes a waypoint from an NPC path.

| Name        | Description                               |
| ----------- | ----------------------------------------- |
| pathid      | The ID of the path                       |
| point_index | The index of the point to remove         |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
new g_PatrolPath = -1;

public OnGameModeInit()
{
    // Create patrol path
    g_PatrolPath = NPC_CreatePath();
    
    if (NPC_IsValidPath(g_PatrolPath))
    {
        // Add patrol points
        NPC_AddPointToPath(g_PatrolPath, 1958.33, 1343.12, 15.36, 1.0);
        NPC_AddPointToPath(g_PatrolPath, 1968.33, 1353.12, 15.36, 2.0);
        NPC_AddPointToPath(g_PatrolPath, 1978.33, 1363.12, 15.36, 1.5);
        NPC_AddPointToPath(g_PatrolPath, 1988.33, 1373.12, 15.36, 2.0);
        
        printf("Patrol path created with %d points", NPC_GetPathPointCount(g_PatrolPath));
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/removepoint", true))
    {
        if (NPC_IsValidPath(g_PatrolPath))
        {
            new pointCount = NPC_GetPathPointCount(g_PatrolPath);
            
            if (pointCount > 2 && NPC_RemovePointFromPath(g_PatrolPath, 1))
            {
                new msg[64];
                format(msg, sizeof(msg), "Removed point 1. Path now has %d points", 
                    NPC_GetPathPointCount(g_PatrolPath));
                SendClientMessage(playerid, 0x00FF00FF, msg);
            }
            else
            {
                SendClientMessage(playerid, 0xFF0000FF, "Cannot remove point");
            }
        }
        return 1;
    }
    
    if (!strcmp(cmdtext, "/editpath", true))
    {
        // Replace last point with player position
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        
        new pointCount = NPC_GetPathPointCount(g_PatrolPath);
        if (pointCount > 1)
        {
            NPC_RemovePointFromPath(g_PatrolPath, pointCount - 1);
            NPC_AddPointToPath(g_PatrolPath, x, y, z, 1.5);
            
            SendClientMessage(playerid, 0x00FF00FF, "Updated path endpoint to your location");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Point indices start at 0
- Removing a point will shift all subsequent points down by one index
- If the specified index is out of bounds, the function will return `false`
- You cannot remove points from an invalid path
- Useful for dynamic path editing and optimization

## Related Functions

- [NPC_AddPointToPath](NPC_AddPointToPath): Add a point to a path
- [NPC_ClearPath](NPC_ClearPath): Clear all points from a path
- [NPC_GetPathPointCount](NPC_GetPathPointCount): Get number of points in a path
- [NPC_GetPathPoint](NPC_GetPathPoint): Get information about a path point

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes moving along a path
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes any movement