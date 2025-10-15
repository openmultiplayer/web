---
title: NPC_ClearPath
sidebar_label: NPC_ClearPath
description: Clears all points from an NPC path.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Clears all points from an NPC path, making it empty.

| Name   | Description                        |
| ------ | ---------------------------------- |
| pathid | The ID of the path to clear       |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnGameModeInit()
{
    new pathid = NPC_CreatePath();
    
    // Add some points to the path
    NPC_AddPointToPath(pathid, 1958.33, 1343.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1968.33, 1353.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1978.33, 1363.12, 15.36, 1.0);
    
    printf("Points in path: %d", NPC_GetPathPointCount(pathid)); // 3
    
    // Clear all points
    if (NPC_ClearPath(pathid))
    {
        printf("Path cleared successfully");
        printf("Points in path: %d", NPC_GetPathPointCount(pathid)); // 0
    }
    
    return 1;
}
```

## Notes

- This function removes all waypoints from the specified path
- The path itself remains valid and can be reused
- Any NPCs currently following this path will stop moving
- Use this to reset a path before adding new points

## Related Functions

- [NPC_CreatePath](NPC_CreatePath): Create a new path
- [NPC_AddPointToPath](NPC_AddPointToPath): Add a point to a path
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): Remove specific point
- [NPC_GetPathPointCount](NPC_GetPathPointCount): Get number of points in path

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes path
