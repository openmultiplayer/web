---
title: "NPC_GetNodeType | open.mp"
description: "Gets the type of an NPC node."
canonical: https://open.mp/docs/scripting/functions/NPC_GetNodeType
language: en
---

# NPC\_GetNodeType

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the type of an NPC node.

| Name | Description |
| --- | --- |
| nodeid | The ID of the node |

## Returns

Returns the node type ID, or -1 if the node is invalid.

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

-   Returns -1 if the node is invalid or not opened
-   Different node types are designed for different movement types
-   Pedestrian nodes are for walking NPCs
-   Vehicle nodes are for driving NPCs
-   Choose the appropriate node type for your NPC's movement style

## Related Functions

-   [NPC\_OpenNode](https://open.mp/docs/scripting/functions/NPC_OpenNode): Open a node for use
-   [NPC\_IsNodeOpen](https://open.mp/docs/scripting/functions/NPC_IsNodeOpen): Check if node is open
-   [NPC\_GetNodeInfo](https://open.mp/docs/scripting/functions/NPC_GetNodeInfo): Get detailed node information
-   [NPC\_PlayNode](https://open.mp/docs/scripting/functions/NPC_PlayNode): Make NPC play a node

## Related Callbacks

-   [OnNPCFinishNode](https://open.mp/docs/scripting/callbacks/OnNPCFinishNode): Called when NPC finishes a node
-   [OnNPCChangeNode](https://open.mp/docs/scripting/callbacks/OnNPCChangeNode): Called when NPC changes nodes
