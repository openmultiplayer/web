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
public OnPlayerCommandText(playerid, cmdtext[])
{
    // The commands to create paths and to create points on paths

    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        new count = NPC_GetPathPointCount(g_PatrolPath);

        if (NPC_IsValidPath(g_PatrolPath))
        {
            NPC_MoveByPath(npcid, g_PatrolPath, NPC_MOVE_TYPE_WALK);
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d started patrol route with %d points", npcid, count);

            g_PatrolPlayer = playerid;
            SetTimer("CheckPathProgress", 2000, true);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to start patrol route");
        }
        return 1;
    }
    return 0;
}

forward CheckPathProgress();
public CheckPathProgress()
{
    if (g_PatrolPlayer == INVALID_PLAYER_ID || !IsPlayerConnected(g_PatrolPlayer))
        return 0;

    new npcid = PlayerNPC[g_PatrolPlayer];
    if (npcid == INVALID_NPC_ID)
        return 0;

    new currentPoint = NPC_GetCurrentPathPointIndex(npcid);
    new totalPoints = NPC_GetPathPointCount(g_PatrolPath);

    if (currentPoint != -1)
    {
        SendClientMessage(g_PatrolPlayer, 0xFFFF00FF, "NPC %d progress: Point %d of %d", npcid, currentPoint + 1, totalPoints);
    }
    return 1;
}
```

## Notes

- Returns -1 if the NPC is not following a path
- This indicates the point the NPC is currently moving towards

## Related Functions

- [NPC_MoveByPath](NPC_MoveByPath): Make NPC follow a path
- [NPC_CreatePath](NPC_CreatePath): Create a new path
- [NPC_AddPointToPath](NPC_AddPointToPath): Add point to path
- [NPC_GetPathPointCount](NPC_GetPathPointCount): Get total points in path

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes path
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes movement
