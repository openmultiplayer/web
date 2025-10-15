---
title: NPC_CloseNode
sidebar_label: NPC_CloseNode
description: Closes an NPC node, making it unavailable for use.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Closes an NPC node, making it unavailable for use by NPCs.

| Name   | Description                 |
| ------ | --------------------------- |
| nodeid | The ID of the node to close |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    // Open a node for use
    if (NPC_OpenNode(1))
    {
        printf("Node 1 opened successfully");

        // Use the node
        new npcid = NPC_Create("NodeBot");
        NPC_Spawn(npcid);
        NPC_PlayNode(npcid, 1, NPC_MOVE_TYPE_WALK);

        // Later, close the node
        SetTimer("CloseTheNode", 30000, false);
    }

    return 1;
}

forward CloseTheNode();
public CloseTheNode()
{
    NPC_CloseNode(1);
    printf("Node 1 closed successfully");
}
```

## Notes

- Closing a node prevents new NPCs from using it
- NPCs currently using the node will continue until they finish
- Closed nodes cannot be played until reopened with `NPC_OpenNode`
- Use this to manage node availability dynamically

## Related Functions

- [NPC_OpenNode](NPC_OpenNode): Open a node for use
- [NPC_IsNodeOpen](NPC_IsNodeOpen): Check if a node is open
- [NPC_PlayNode](NPC_PlayNode): Make NPC play a node
- [NPC_GetNodeType](NPC_GetNodeType): Get node type information

## Related Callbacks

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Called when NPC finishes a node
- [OnNPCChangeNode](../callbacks/OnNPCChangeNode): Called when NPC changes nodes
