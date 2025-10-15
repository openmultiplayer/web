---
title: NPC_GetPathCount
sidebar_label: NPC_GetPathCount
description: Gets the total number of NPC paths on the server.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the total number of NPC paths currently existing on the server.

## Returns

Returns the number of paths that exist on the server.

## Examples

```c
public OnGameModeInit()
{
    printf("Initial path count: %d", NPC_GetPathCount()); // 0
    
    // Create some paths
    new path1 = NPC_CreatePath();
    new path2 = NPC_CreatePath();
    new path3 = NPC_CreatePath();
    
    printf("Path count after creating 3 paths: %d", NPC_GetPathCount()); // 3
    
    // Destroy one path
    NPC_DestroyPath(path2);
    
    printf("Path count after destroying 1 path: %d", NPC_GetPathCount()); // 2
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/pathstats", true))
    {
        new pathCount = NPC_GetPathCount();
        
        new msg[128];
        format(msg, sizeof(msg), "Server has %d NPC paths", pathCount);
        SendClientMessage(playerid, 0x00FF00FF, msg);
        
        return 1;
    }
    
    if (!strcmp(cmdtext, "/createtestpaths", true))
    {
        new oldCount = NPC_GetPathCount();
        
        // Create 5 test paths
        for (new i = 0; i < 5; i++)
        {
            new pathid = NPC_CreatePath();
            NPC_AddPointToPath(pathid, 1958.33 + i * 10, 1343.12, 15.36, 1.0);
        }
        
        new newCount = NPC_GetPathCount();
        
        new msg[128];
        format(msg, sizeof(msg), "Created paths. Count: %d -> %d", oldCount, newCount);
        SendClientMessage(playerid, 0x00FF00FF, msg);
        
        return 1;
    }
    return 0;
}
```

## Notes

- This counts all paths, whether they have points or not
- Empty paths (no waypoints) are still counted
- Use this for monitoring server resource usage
- Paths persist until explicitly destroyed

## Related Functions

- [NPC_CreatePath](NPC_CreatePath): Create a new path
- [NPC_DestroyPath](NPC_DestroyPath): Destroy a specific path
- [NPC_DestroyAllPath](NPC_DestroyAllPath): Destroy all paths
- [NPC_IsValidPath](NPC_IsValidPath): Check if a path is valid

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes a path
