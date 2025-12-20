---
title: NPC_DestroyPath
sidebar_label: NPC_DestroyPath
description: Destroys a specific NPC path.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Destroys a specific NPC path, making it invalid.

| Name   | Description                   |
| ------ | ----------------------------- |
| pathid | The ID of the path to destroy |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/deletepatrol", true))
    {
        // Check if path is valid first
        if (!NPC_IsValidPath(PlayerPatrolPath[playerid]))
        {
            SendClientMessage(playerid, 0xFF0000FF, "No valid patrol path to delete.");
            return 1;
        }

        // Get how many points were in it
        new count = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

        // Try to destroy it
        if (NPC_DestroyPath(PlayerPatrolPath[playerid]))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Destroyed path %d (%d points removed).", PlayerPatrolPath[playerid], count);

            // Reset player's path variable since it's now invalid
            PlayerPatrolPath[playerid] = INVALID_PATH_ID;
            StopPlayerPatrolTimer(playerid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to destroy patrol path.");
        }

        return 1;
    }
    return 0;
}
```

## Notes

- The path ID becomes invalid after destruction
- NPCs currently following this path will stop moving since all points in the path are removed

## Related Functions

- [NPC_CreatePath](NPC_CreatePath): Create a new path
- [NPC_IsValidPath](NPC_IsValidPath): Check if a path is valid
- [NPC_DestroyAllPath](NPC_DestroyAllPath): Destroy all paths
- [NPC_GetPathCount](NPC_GetPathCount): Get total number of paths

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes a path
