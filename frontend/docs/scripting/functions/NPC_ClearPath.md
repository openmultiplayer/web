---
title: NPC_ClearPath
sidebar_label: NPC_ClearPath
description: Clears all points from an NPC path.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Clears all points from an NPC path, making it empty.

| Name   | Description                 |
| ------ | --------------------------- |
| pathid | The ID of the path to clear |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/clearpatrol", true))
    {
        // Get the number of points before clearing
        new count = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

        // Try to clear the path
        if (NPC_ClearPath(PlayerPatrolPath[playerid]))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Cleared path %d (%d points removed)", PlayerPatrolPath[playerid], count);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to clear path");
        }

        return 1;
    }
    return 0;
}
```

## Notes

- This function removes all waypoints from the specified path
- The path itself remains valid and can be reused
- Any NPCs currently following this path will stop moving

## Related Functions

- [NPC_CreatePath](NPC_CreatePath): Create a new path
- [NPC_AddPointToPath](NPC_AddPointToPath): Add a point to a path
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): Remove specific point
- [NPC_GetPathPointCount](NPC_GetPathPointCount): Get number of points in path

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes path
