---
title: NPC_GetPathPointCount
sidebar_label: NPC_GetPathPointCount
description: Gets the number of points in an NPC path.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the number of points in an NPC path.

| Name   | Description        |
| ------ | ------------------ |
| pathid | The ID of the path |

## Returns

Returns the number of points in the path, or 0 if the path is invalid.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpathpointcount", true))
    {
        new pathid = PlayerPatrolPath[playerid];
        if (pathid == INVALID_PATH_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "No patrol path assigned.");

        new count = NPC_GetPathPointCount(pathid);

        SendClientMessage(playerid, 0x00FF00FF, "Path %d has %d points", pathid, count);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns 0 if the path is invalid or empty

## Related Functions

- [NPC_AddPointToPath](NPC_AddPointToPath): Add point to path
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): Remove point from path
- [NPC_GetPathPoint](NPC_GetPathPoint): Get specific point data
- [NPC_ClearPath](NPC_ClearPath): Remove all points from path

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes path
