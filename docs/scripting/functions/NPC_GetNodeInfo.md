---
title: "NPC_GetNodeInfo | open.mp"
description: "Gets information about an NPC node."
canonical: https://open.mp/docs/scripting/functions/NPC_GetNodeInfo
language: en
---

# NPC\_GetNodeInfo

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets information about an NPC node including vehicle, pedestrian, and navigation data.

| Name | Description |
| --- | --- |
| nodeid | The ID of the node |
| &vehnodes | Variable to store vehicle node count |
| &pednodes | Variable to store pedestrian node count |
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

-   The node must be opened with `NPC_OpenNode` before getting info
-   Vehicle nodes are for vehicle navigation paths
-   Pedestrian nodes are for walking paths
-   All count parameters are passed by reference

## Related Functions

-   [NPC\_OpenNode](https://open.mp/docs/scripting/functions/NPC_OpenNode): Open a node for use
-   [NPC\_CloseNode](https://open.mp/docs/scripting/functions/NPC_CloseNode): Close a node
-   [NPC\_IsNodeOpen](https://open.mp/docs/scripting/functions/NPC_IsNodeOpen): Check if node is open
-   [NPC\_GetNodeType](https://open.mp/docs/scripting/functions/NPC_GetNodeType): Get node type

## Related Callbacks

-   [OnNPCFinishNode](https://open.mp/docs/scripting/callbacks/OnNPCFinishNode): Called when NPC finishes node
-   [OnNPCChangeNode](https://open.mp/docs/scripting/callbacks/OnNPCChangeNode): Called when NPC changes nodes
