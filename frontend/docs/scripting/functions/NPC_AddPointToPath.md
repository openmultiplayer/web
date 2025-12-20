---
title: NPC_AddPointToPath
sidebar_label: NPC_AddPointToPath
description: Adds a waypoint to an NPC path.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.5.8.3079' />

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
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/addpatrolpos", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        // Try to add patrol point
        if (NPC_AddPointToPath(PlayerPatrolPath[playerid], x, y, z, 1.5))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Added point to path %d at your current location", PlayerPatrolPath[playerid]);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed add point to path");
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
- [NPC_GetPathPoint](NPC_GetPathPoint): Get details about a specific point
- [NPC_MoveByPath](NPC_MoveByPath): Make NPC follow a path
- [NPC_GetPathPointCount](NPC_GetPathPointCount): Get number of points in a path

## Related Callbacks

- [OnNPCFinishMovePathPoint](../callbacks/OnNPCFinishMovePathPoint): Called when NPC reaches each path point
- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes moving along a path
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes any movement
