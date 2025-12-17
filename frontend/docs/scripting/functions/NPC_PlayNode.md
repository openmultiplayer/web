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
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcplaynode ", true, 13))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new nodeid = strval(cmdtext[13]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new bool:success = NPC_PlayNode(npcid, nodeid, NPC_MOVE_TYPE_JOG, NPC_MOVE_SPEED_AUTO, 0.0, true);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d play node %d: %s", npcid, nodeid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
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
