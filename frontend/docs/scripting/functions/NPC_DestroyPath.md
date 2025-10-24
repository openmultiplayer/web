---
title: NPC_DestroyPath
sidebar_label: NPC_DestroyPath
description: Destroys a specific NPC path.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

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
        if (!NPC_IsValidPath(g_PatrolPath))
        {
            SendClientMessage(playerid, 0xFF0000FF, "No valid patrol path to delete.");
            return 1;
        }

        // Get how many points were in it
        new count = NPC_GetPathPointCount(g_PatrolPath);

        // Try to destroy it
        if (NPC_DestroyPath(g_PatrolPath))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Destroyed path %d (%d points removed).", g_PatrolPath, count);
            
            // Reset global variable since it's now invalid
            g_PatrolPath = -1;
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
