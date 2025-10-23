---
title: NPC_PlayNode
sidebar_label: NPC_PlayNode
description: Makes an NPC navigate through predefined navigation nodes.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Makes an NPC navigate through predefined navigation nodes using the game's built-in navigation system.

| Name          | Description                                                            |
| ------------- | ---------------------------------------------------------------------- |
| npcid         | The ID of the NPC                                                      |
| nodeId        | The ID of the node to navigate                                         |
| moveType      | Movement type (default: NPC_MOVE_TYPE_JOG)                             |
| Float:speed   | Movement speed (default: NPC_MOVE_SPEED_AUTO)                          |
| Float:radius  | Radius around nodes to consider as reached (default: 0.0)              |
| bool:setangle | Whether to update NPC's facing angle during navigation (default: true) |

## Returns

Returns `true` if the NPC started playing the node, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("NodeWalker");
    NPC_Spawn(npcid);
    NPC_SetPos(npcid, 1958.33, 1343.12, 15.36);

    // First open node 25, then make NPC navigate through it
    if (NPC_OpenNode(25))
    {
        NPC_PlayNode(npcid, 25);
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcpatrol", true))
    {
        // Open and make NPC 0 patrol through node 15 at jogging speed with custom radius
        if (NPC_OpenNode(15))
        {
            NPC_PlayNode(0, 15, NPC_MOVE_TYPE_JOG, 1.5, 2.0, true);
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 is now patrolling node 15");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to open node 15");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/npcwalk", true))
    {
        // Open and make NPC walk through node 8 without changing angle
        if (NPC_OpenNode(8))
        {
            NPC_PlayNode(0, 8, NPC_MOVE_TYPE_WALK, NPC_MOVE_SPEED_AUTO, 0.0, false);
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 walking node 8");
        }
        return 1;
    }
    return 0;
}

public OnNPCFinishNode(npcid, nodeId)
{
    printf("NPC %d finished navigating node %d", npcid, nodeId);

    // Start navigating the next node
    new nextNode = nodeId + 1;
    if (nextNode <= 63) // Nodes are 0-63
    {
        if (NPC_OpenNode(nextNode))
        {
            NPC_PlayNode(npcid, nextNode, NPC_MOVE_TYPE_WALK);
        }
    }
    else
    {
        // Loop back to first node
        if (NPC_OpenNode(0))
        {
            NPC_PlayNode(npcid, 0, NPC_MOVE_TYPE_WALK);
        }
    }

    return 1;
}
```

## Notes

- Nodes are predefined navigation points from the game's node files (IDs 0-63)
- The node must be opened with `NPC_OpenNode` before it can be used
- The NPC will automatically navigate between points within the specified node
- Use `setAngle` parameter to control whether the NPC rotates to face movement direction
- The `radius` parameter determines how close the NPC needs to get to each point
- Node navigation can be paused, resumed, or stopped using related functions

## Related Functions

- [NPC_StopPlayingNode](NPC_StopPlayingNode): Stop NPC node navigation
- [NPC_PausePlayingNode](NPC_PausePlayingNode): Pause NPC node navigation
- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): Resume paused node navigation
- [NPC_IsPlayingNode](NPC_IsPlayingNode): Check if NPC is navigating a node
- [NPC_ChangeNode](NPC_ChangeNode): Change to a different node during navigation
- [NPC_OpenNode](NPC_OpenNode): Open a node for use

## Related Callbacks

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Called when NPC finishes navigating a node
- [OnNPCFinishNodePoint](../callbacks/OnNPCFinishNodePoint): Called when NPC reaches a point within a node
- [OnNPCChangeNode](../callbacks/OnNPCChangeNode): Called when NPC changes from one node to another
