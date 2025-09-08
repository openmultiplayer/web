---
title: NPC_DestroyPath
sidebar_label: NPC_DestroyPath
description: Destroys a specific NPC path.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Destroys a specific NPC path, making it invalid.

| Name   | Description                         |
| ------ | ----------------------------------- |
| pathid | The ID of the path to destroy      |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
new g_PatrolPath;

public OnGameModeInit()
{
    // Create a patrol path
    g_PatrolPath = NPC_CreatePath();
    NPC_AddPointToPath(g_PatrolPath, 1958.33, 1343.12, 15.36, 1.0);
    NPC_AddPointToPath(g_PatrolPath, 1968.33, 1353.12, 15.36, 1.0);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/destroypath", true))
    {
        if (NPC_IsValidPath(g_PatrolPath))
        {
            if (NPC_DestroyPath(g_PatrolPath))
            {
                SendClientMessage(playerid, 0x00FF00FF, "Patrol path destroyed.");
                g_PatrolPath = -1;
            }
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Path is not valid.");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- The path ID becomes invalid after destruction
- NPCs currently following this path will stop moving
- All waypoints in the path are removed
- Memory used by the path is freed

## Related Functions

- [NPC_CreatePath](NPC_CreatePath): Create a new path
- [NPC_IsValidPath](NPC_IsValidPath): Check if a path is valid
- [NPC_DestroyAllPath](NPC_DestroyAllPath): Destroy all paths
- [NPC_GetPathCount](NPC_GetPathCount): Get total number of paths

## Related Callbacks

- [OnNPCFinishMovePath](OnNPCFinishMovePath): Called when NPC finishes a path
