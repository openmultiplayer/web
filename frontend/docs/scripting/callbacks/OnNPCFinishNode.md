---
title: OnNPCFinishNode
sidebar_label: OnNPCFinishNode
description: This callback is called when an NPC finishes navigating a complete node.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when an NPC finishes navigating a complete node during node-based movement.

| Name   | Description                              |
| ------ | ---------------------------------------- |
| npcid  | The ID of the NPC that finished the node |
| nodeid | The ID of the node that was completed    |

## Examples

```c
public OnNPCFinishNodePoint(npcid, nodeid, pointid)
{
    // Notify players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d reached node %d point %d", npcid, nodeid, pointid);
        }
    }
    return 1;
}
```

## Notes

- This callback is only called when NPCs are using node-based navigation via `NPC_PlayNode`
- It's called when the NPC has completed navigation through all points in the node
- The node navigation stops automatically when this callback is triggered

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_PlayNode](../functions/NPC_PlayNode): Start NPC node-based navigation
- [NPC_StopPlayingNode](../functions/NPC_StopPlayingNode): Stop NPC node navigation
- [NPC_IsPlayingNode](../functions/NPC_IsPlayingNode): Check if NPC is navigating a node
- [NPC_OpenNode](../functions/NPC_OpenNode): Open a navigation node file

## Related Callbacks

- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): Called when NPC reaches a specific point in a node
- [OnNPCChangeNode](OnNPCChangeNode): Called when NPC attempts to change nodes
- [OnNPCFinishMove](OnNPCFinishMove): Called when NPC finishes any type of movement
