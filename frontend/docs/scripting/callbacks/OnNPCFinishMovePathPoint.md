---
title: OnNPCFinishMovePathPoint
sidebar_label: OnNPCFinishMovePathPoint
description: Called when an NPC finishes moving to a specific point in a path.
tags: ["npc", "path", "movement"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

This callback is called when an NPC finishes moving to a specific point in a path.

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| npcid   | The ID of the NPC that finished the path point   |
| pathid  | The ID of the path being followed                |
| pointid | The index of the point that was reached          |

## Examples

```c
public OnNPCFinishMovePathPoint(npcid, pathid, pointid)
{
    // Find all players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d reached point %d on path %d", npcid, pointid, pathid);
        }
    }
    return 1;
}

```

## Notes

- This callback is triggered for each point in the path
- Use [OnNPCFinishMovePath](OnNPCFinishMovePath) to detect when the entire path is completed
- The NPC must be moving along a path using [NPC_MoveByPath](../functions/NPC_MoveByPath)

## Related Functions

- [NPC_MoveByPath](../functions/NPC_MoveByPath): Make NPC follow a path
- [NPC_CreatePath](../functions/NPC_CreatePath): Create a new path
- [NPC_AddPointToPath](../functions/NPC_AddPointToPath): Add a point to a path
- [NPC_GetCurrentPathPointIndex](../functions/NPC_GetCurrentPathPointIndex): Get current path point

## Related Callbacks

- [OnNPCFinishMovePath](OnNPCFinishMovePath): Called when NPC finishes entire path
- [OnNPCFinishMove](OnNPCFinishMove): Called when NPC finishes any movement
