---
title: NPC_MoveByPath
sidebar_label: NPC_MoveByPath
description: Makes an NPC follow a predefined path.
tags: ["npc", "movement", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Makes an NPC follow a predefined path with various movement options.

| Name      | Description                                        |
| --------- | -------------------------------------------------- |
| npcid     | The ID of the NPC                                  |
| pathid    | The ID of the path to follow                       |
| moveType  | The movement type (default: NPC_MOVE_TYPE_JOG)     |
| moveSpeed | Movement speed (default: NPC_MOVE_SPEED_AUTO)      |
| reversed  | Whether to follow path in reverse (default: false) |

## Returns

Returns `true` if the NPC started following the path, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You have no NPC.");

        new count = NPC_GetPathPointCount(g_PatrolPath);

        if (NPC_IsValidPath(g_PatrolPath))
        {
            NPC_MoveByPath(npcid, g_PatrolPath, NPC_MOVE_TYPE_WALK);
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d started patrol route with %d points", npcid, count);
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Path must be created with NPC_CreatePath before use
- Use NPC_AddPointToPath to add waypoints to the path
- Path types include loop, once, and ping-pong modes
- Movement flags can be combined for different behaviors

## Related Functions

- [NPC_CreatePath](NPC_CreatePath): Create a new path
- [NPC_AddPointToPath](NPC_AddPointToPath): Add point to path
- [NPC_StopMove](NPC_StopMove): Stop path movement
- [NPC_GetCurrentPathPointIndex](NPC_GetCurrentPathPointIndex): Get current point

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes moving along a path
