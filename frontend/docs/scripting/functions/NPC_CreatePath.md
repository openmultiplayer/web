---
title: NPC_CreatePath
sidebar_label: NPC_CreatePath
description: Creates a new NPC path.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Creates a new path that can be used for NPC navigation.

## Returns

Returns the ID of the created path.

## Examples

```c
new g_PatrolPath = -1;

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/createpatrol", true))
    {
        new pathid = NPC_CreatePath();
        g_PatrolPath = pathid;
        
        // If you wanted, you could already add points to the path here
        // NPC_AddPointToPath(g_PatrolPath, x, y, z, 1.5)
        // NPC_AddPointToPath(g_PatrolPath, x1, y1, z1, 1.5)
        // NPC_AddPointToPath(g_PatrolPath, x2, y2, z2, 1.5)

        SendClientMessage(playerid, 0x00FF00FF, "Created a patrol path %d", g_PatrolPath);

        return 1;
    }
    return 0;
}
```

## Notes

- The path is always created empty, use `NPC_AddPointToPath` to add waypoints
- Multiple NPCs can use the same path simultaneously
- Paths remain valid until destroyed with `NPC_DestroyPath`

## Related Functions

- [NPC_DestroyPath](NPC_DestroyPath): Destroy a path
- [NPC_AddPointToPath](NPC_AddPointToPath): Add waypoint to path
- [NPC_MoveByPath](NPC_MoveByPath): Make NPC follow a path
- [NPC_GetPathCount](NPC_GetPathCount): Get total number of paths

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes a path
