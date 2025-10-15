---
title: NPC_GetCurrentPathPointIndex
sidebar_label: NPC_GetCurrentPathPointIndex
description: Gets the current path point index an NPC is moving towards.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the current path point index an NPC is moving towards.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the current path point index the NPC is moving towards.

## Examples

```c
public OnGameModeInit()
{
    new pathid = NPC_CreatePath();
    NPC_AddPointToPath(pathid, 1958.33, 1343.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1968.33, 1353.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1978.33, 1363.12, 15.36, 1.0);

    new npcid = NPC_Create("PathWalker");
    NPC_Spawn(npcid);
    NPC_MoveByPath(npcid, pathid, NPC_MOVE_TYPE_WALK);

    SetTimer("CheckPathProgress", 2000, true);

    return 1;
}

forward CheckPathProgress();
public CheckPathProgress()
{
    new pointIndex = NPC_GetCurrentPathPointIndex(0);
    if (pointIndex != -1)
    {
        printf("NPC 0 is moving to path point %d", pointIndex);
    }
}
```

## Notes

- Returns -1 if the NPC is not following a path
- The index starts from 0 for the first point
- This indicates the point the NPC is currently moving towards, not necessarily reached
- Useful for tracking NPC progress along a path

## Related Functions

- [NPC_MoveByPath](NPC_MoveByPath): Make NPC follow a path
- [NPC_CreatePath](NPC_CreatePath): Create a new path
- [NPC_AddPointToPath](NPC_AddPointToPath): Add point to path
- [NPC_GetPathPointCount](NPC_GetPathPointCount): Get total points in path

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes path
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes movement
