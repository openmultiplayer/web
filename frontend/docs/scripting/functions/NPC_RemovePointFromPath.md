---
title: NPC_RemovePointFromPath
sidebar_label: NPC_RemovePointFromPath
description: Removes a waypoint from an NPC path.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Removes a waypoint from an NPC path.

| Name        | Description                      |
| ----------- | -------------------------------- |
| pathid      | The ID of the path               |
| point_index | The index of the point to remove |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strncmp(cmdtext, "/removepatrolpoint ", 19, true))
    {
        if (!NPC_IsValidPath(PlayerPatrolPath[playerid]))
        {
            SendClientMessage(playerid, 0xFF0000FF, "No valid patrol path. Use /createpatrol first.");
            return 1;
        }

        new pointIndex = strval(cmdtext[19]);
        new totalPoints = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

        if (pointIndex < 0 || pointIndex >= totalPoints)
        {
            SendClientMessage(playerid, 0xFF0000FF, "Invalid point index. Valid range: 0-%d", totalPoints - 1);
            return 1;
        }

        if (NPC_RemovePointFromPath(PlayerPatrolPath[playerid], pointIndex))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Removed point %d from path %d (now has %d points)", pointIndex, PlayerPatrolPath[playerid], totalPoints - 1);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to remove point %d from path", pointIndex);
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

## Related Functions

- [NPC_AddPointToPath](NPC_AddPointToPath): Add a point to a path
- [NPC_ClearPath](NPC_ClearPath): Clear all points from a path
- [NPC_GetPathPointCount](NPC_GetPathPointCount): Get number of points in a path
- [NPC_GetPathPoint](NPC_GetPathPoint): Get information about a path point

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes moving along a path
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes any movement
