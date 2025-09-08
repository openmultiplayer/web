---
title: NPC_HasPathPointInRange
sidebar_label: NPC_HasPathPointInRange
description: Checks if a path has any point within the specified range from given coordinates.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if a path has any point within the specified range from given coordinates.

| Name      | Description                                          |
| --------- | ---------------------------------------------------- |
| pathId    | The ID of the path to check                          |
| x         | The X coordinate of the center position             |
| y         | The Y coordinate of the center position             |
| z         | The Z coordinate of the center position             |
| radius    | The radius to check for path points within          |

## Returns

Returns `true` if the path has at least one point within the specified range, `false` otherwise.

## Examples

```c
new g_PatrolPath;

public OnGameModeInit()
{
    // Create patrol route for NPCs
    g_PatrolPath = NPC_CreatePath();
    NPC_AddPointToPath(g_PatrolPath, 1958.33, 1343.12, 15.36, 1.0);
    NPC_AddPointToPath(g_PatrolPath, 1968.33, 1353.12, 15.36, 1.0);
    NPC_AddPointToPath(g_PatrolPath, 1978.33, 1363.12, 15.36, 1.0);
    NPC_AddPointToPath(g_PatrolPath, 1988.33, 1373.12, 15.36, 1.0);
    
    printf("Patrol path created with %d points", NPC_GetPathPointCount(g_PatrolPath));
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkarea", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        
        // Check if patrol path goes near player's location
        if (NPC_HasPathPointInRange(g_PatrolPath, x, y, z, 50.0))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC patrol route passes near your location!");
            
            // Spawn NPC to follow the path
            new npcid = NPC_Create("Patrol");
            NPC_Spawn(npcid);
            NPC_MoveByPath(npcid, g_PatrolPath, NPC_MOVE_TYPE_WALK);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "No patrol routes in this area");
        }
        return 1;
    }
    
    if (!strcmp(cmdtext, "/safezone", true))
    {
        // Check if path intersects with a safe zone
        if (!NPC_HasPathPointInRange(g_PatrolPath, 1500.0, 1500.0, 10.0, 100.0))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Safe zone is clear of patrol routes");
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "Warning: Patrol route goes through safe zone");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- This function is useful for checking if an NPC path intersects with a specific area or location before starting path movement
- The function checks the 3D distance between the given position and each path point
- Only valid paths with at least one point can return `true`
- Useful for area control, safe zones, and dynamic path validation

## Related Functions

- [NPC_CreatePath](NPC_CreatePath): Creates a new path for NPC movement
- [NPC_AddPointToPath](NPC_AddPointToPath): Adds a point to a path
- [NPC_GetPathPoint](NPC_GetPathPoint): Gets information about a specific point in a path
- [NPC_MoveByPath](NPC_MoveByPath): Makes an NPC follow a predefined path