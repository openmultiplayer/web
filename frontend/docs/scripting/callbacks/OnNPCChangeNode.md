---
title: OnNPCChangeNode
sidebar_label: OnNPCChangeNode
description: This callback is called when an NPC attempts to change from one navigation node to another during node-based movement.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when an NPC attempts to change from one navigation node to another during node-based movement. This allows you to control whether the node change should be allowed or denied.

| Name       | Description                                    |
| ---------- | ---------------------------------------------- |
| npcid      | The ID of the NPC attempting to change nodes  |
| newnodeid  | The ID of the new node the NPC wants to move to |
| oldnodeid  | The ID of the current node the NPC is on      |

## Returns

Return `true` to allow the node change, or `false` to deny it.

## Examples

```c
public OnNPCChangeNode(npcid, newnodeid, oldnodeid)
{
    printf("NPC %d is changing from node %d to node %d", npcid, oldnodeid, newnodeid);
    
    // Check if the new node is open
    if (!NPC_IsNodeOpen(newnodeid))
    {
        return false; // Deny change to closed node
    }
    
    // Prevent NPCs from going to node 5
    if (newnodeid == 5)
    {
        return false; // Block access to node 5
    }
    
    return true; // Allow the change
}
```

## Notes

- This callback is only called when NPCs are using node-based navigation via `NPC_PlayNode`
- Returning `false` will prevent the NPC from changing nodes and may cause it to stop navigation
- Node files must be loaded using `NPC_OpenNode` before NPCs can navigate between them

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_PlayNode](NPC_PlayNode): Start NPC node-based navigation
- [NPC_OpenNode](NPC_OpenNode): Open a navigation node file
- [NPC_CloseNode](NPC_CloseNode): Close a navigation node file
- [NPC_StopPlayingNode](NPC_StopPlayingNode): Stop NPC node navigation

## Related Callbacks

- [OnNPCFinishNode](OnNPCFinishNode): Called when NPC finishes navigating a complete node
- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): Called when NPC reaches a specific point in a node
