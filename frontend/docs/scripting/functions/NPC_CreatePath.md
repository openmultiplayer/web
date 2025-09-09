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
public OnGameModeInit()
{
    new pathid = NPC_CreatePath();
    printf("Path created with ID: %d", pathid);
    
    // Add waypoints to the path
    NPC_AddPointToPath(pathid, 1958.33, 1343.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1968.33, 1353.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1978.33, 1363.12, 15.36, 1.0);
    
    // Make an NPC follow this path
    new npcid = NPC_Create("PathFollower");
    NPC_Spawn(npcid);
    NPC_MoveByPath(npcid, pathid, NPC_MOVE_TYPE_WALK);
    
    return 1;
}
```

## Notes

- The path is created empty - use `NPC_AddPointToPath` to add waypoints
- Multiple NPCs can use the same path simultaneously
- Paths remain valid until destroyed with `NPC_DestroyPath`
- A maximum number of paths can exist at once

## Related Functions

- [NPC_DestroyPath](NPC_DestroyPath): Destroy a path
- [NPC_AddPointToPath](NPC_AddPointToPath): Add waypoint to path
- [NPC_MoveByPath](NPC_MoveByPath): Make NPC follow a path
- [NPC_GetPathCount](NPC_GetPathCount): Get total number of paths

## Related Callbacks

- [OnNPCFinishMovePath](OnNPCFinishMovePath): Called when NPC finishes a path
