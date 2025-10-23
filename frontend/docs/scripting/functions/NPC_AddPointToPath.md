---
title: NPC_AddPointToPath
sidebar_label: NPC_AddPointToPath
description: Adds a waypoint to an NPC path.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Adds a waypoint to an NPC path.

| Name      | Description                                             |
| --------- | ------------------------------------------------------- |
| pathid    | The ID of the path to add the point to                  |
| x         | The X coordinate of the waypoint                        |
| y         | The Y coordinate of the waypoint                        |
| z         | The Z coordinate of the waypoint                        |
| stopRange | The distance from point at which to consider it reached |

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
        // Build patrol route
        NPC_AddPointToPath(g_PatrolPath, 1958.33, 1343.12, 15.36, 2.0);
        NPC_AddPointToPath(g_PatrolPath, 1968.33, 1353.12, 15.36, 1.5);
        NPC_AddPointToPath(g_PatrolPath, 1978.33, 1363.12, 15.36, 2.0);

        printf("Patrol path created with %d waypoints", NPC_GetPathPointCount(g_PatrolPath));
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        if (NPC_IsValidPath(g_PatrolPath))
        {
            NPC_MoveByPath(0, g_PatrolPath, NPC_MOVE_TYPE_WALK);
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 started patrol route");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/addwaypoint", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        if (NPC_AddPointToPath(g_PatrolPath, x, y, z, 1.5))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Added waypoint at your location");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Points are added sequentially to form the path route
- The `stopRange` parameter defines how close the NPC needs to get before moving to the next point
- A smaller `stopRange` makes the NPC follow the path more precisely
- The path must be created with `NPC_CreatePath` before adding points

## Related Functions

- [NPC_CreatePath](NPC_CreatePath): Create a new path
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): Remove a point from a path
- [NPC_MoveByPath](NPC_MoveByPath): Make NPC follow a path
- [NPC_GetPathPointCount](NPC_GetPathPointCount): Get number of points in a path

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes moving along a path
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes any movement
