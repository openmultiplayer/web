---
title: NPC_ChangeNode
sidebar_label: NPC_ChangeNode
description: Changes the node an NPC is currently playing.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Changes the node an NPC is currently playing to a different node.

| Name   | Description                           |
| ------ | ------------------------------------- |
| npcid  | The ID of the NPC                     |
| nodeid | The ID of the new node to change to   |
| linkid | The link ID to use for the transition |

## Returns

Returns the new point ID in the node.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("NodeBot");
    NPC_Spawn(npcid);

    // Start playing node 1
    NPC_PlayNode(npcid, 1, NPC_MOVE_TYPE_WALK);

    // After some time, change to node 2 using link 0
    SetTimerEx("ChangeNPCNode", 10000, false, "i", npcid);

    return 1;
}

forward ChangeNPCNode(npcid);
public ChangeNPCNode(npcid)
{
    // Change from current node to node 2
    NPC_ChangeNode(npcid, 2, 0);
}
```

## Notes

- The NPC must be currently playing a node before changing
- The target node must be opened with `NPC_OpenNode` first
- Link ID determines the transition path between nodes
- Use this for creating complex navigation patterns

## Related Functions

- [NPC_PlayNode](NPC_PlayNode): Start playing a node
- [NPC_StopPlayingNode](NPC_StopPlayingNode): Stop playing current node
- [NPC_OpenNode](NPC_OpenNode): Open a node for use
- [NPC_IsPlayingNode](NPC_IsPlayingNode): Check if NPC is playing a node

## Related Callbacks

- [OnNPCChangeNode](../callbacks/OnNPCChangeNode): Called when NPC changes nodes
- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Called when NPC finishes a node
