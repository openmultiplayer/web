---
title: NPC_CloseNode
sidebar_label: NPC_CloseNode
description: Closes an NPC node, making it unavailable for use.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Closes an NPC node, making it unavailable for use by NPCs.

| Name   | Description                 |
| ------ | --------------------------- |
| nodeid | The ID of the node to close |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodetype ", true, 15))
    {
        new nodeid = strval(cmdtext[15]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new nodetype = NPC_GetNodeType(nodeid);

        SendClientMessage(playerid, 0x00FF00FF, "Node %d type: %d", nodeid, nodetype);
        return 1;
    }
    return 0;
}
```

## Notes

- Closing a node prevents new NPCs from using it
- NPCs currently using the node will continue until they finish
- Closed nodes cannot be played until reopened with `NPC_OpenNode`

## Related Functions

- [NPC_OpenNode](NPC_OpenNode): Open a node for use
- [NPC_IsNodeOpen](NPC_IsNodeOpen): Check if a node is open
- [NPC_PlayNode](NPC_PlayNode): Make NPC play a node
- [NPC_GetNodeType](NPC_GetNodeType): Get node type information

## Related Callbacks

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Called when NPC finishes a node
- [OnNPCChangeNode](../callbacks/OnNPCChangeNode): Called when NPC changes nodes
