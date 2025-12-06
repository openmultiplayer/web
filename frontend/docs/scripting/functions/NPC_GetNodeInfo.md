---
title: NPC_GetNodeInfo
sidebar_label: NPC_GetNodeInfo
description: Gets information about an NPC node.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets information about an NPC node including vehicle, pedestrian, and navigation data.

| Name      | Description                                   |
| --------- | --------------------------------------------- |
| nodeid    | The ID of the node                            |
| &vehnodes | Variable to store vehicle node count          |
| &pednodes | Variable to store pedestrian node count       |
| &navinode | Variable to store navigation node information |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodeinfo ", true, 15))
    {
        new nodeid = strval(cmdtext[15]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new vehnodes, pednodes, navinode;
        new bool:success = NPC_GetNodeInfo(nodeid, vehnodes, pednodes, navinode);

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "Node %d info - Vehicle nodes: %d, Ped nodes: %d, Navi node: %d", nodeid, vehnodes, pednodes, navinode);
        else
            SendClientMessage(playerid, 0xFF0000FF, "Failed to get node %d info", nodeid);
        return 1;
    }
    return 0;
}
```

## Notes

- The node must be opened with `NPC_OpenNode` before getting info
- Vehicle nodes are for vehicle navigation paths
- Pedestrian nodes are for walking paths
- All count parameters are passed by reference

## Related Functions

- [NPC_OpenNode](NPC_OpenNode): Open a node for use
- [NPC_CloseNode](NPC_CloseNode): Close a node
- [NPC_IsNodeOpen](NPC_IsNodeOpen): Check if node is open
- [NPC_GetNodeType](NPC_GetNodeType): Get node type

## Related Callbacks

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Called when NPC finishes node
- [OnNPCChangeNode](../callbacks/OnNPCChangeNode): Called when NPC changes nodes
