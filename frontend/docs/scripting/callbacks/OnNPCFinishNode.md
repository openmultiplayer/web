---
title: OnNPCFinishNode
sidebar_label: OnNPCFinishNode
description: This callback is called when a NPC finishes navigating a complete node.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when a NPC finishes navigating a complete node during node-based movement.

| Name   | Description                                    |
| ------ | ---------------------------------------------- |
| npcid  | The ID of the NPC that finished the node      |
| nodeid | The ID of the node that was completed         |

## Examples

```c
public OnNPCFinishNode(npcid, nodeid)
{
    printf("NPC %d finished navigating node %d", npcid, nodeid);
    
    // Start navigation on next node
    NPC_PlayNode(npcid, nodeid + 1, NPC_MOVE_TYPE_WALK, 1.0, 2.0, true);
    
    return true;
}
```

## Notes

- This callback is only called when NPCs are using node-based navigation via `NPC_PlayNode`
- It's called when the NPC has completed navigation through all points in the node
- The node navigation stops automatically when this callback is triggered

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_PlayNode](NPC_PlayNode): Start NPC node-based navigation
- [NPC_StopPlayingNode](NPC_StopPlayingNode): Stop NPC node navigation
- [NPC_IsPlayingNode](NPC_IsPlayingNode): Check if NPC is navigating a node
- [NPC_OpenNode](NPC_OpenNode): Open a navigation node file

## Related Callbacks

- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): Called when NPC reaches a specific point in a node
- [OnNPCChangeNode](OnNPCChangeNode): Called when NPC attempts to change nodes
- [OnNPCFinishMove](OnNPCFinishMove): Called when NPC finishes any type of movement
