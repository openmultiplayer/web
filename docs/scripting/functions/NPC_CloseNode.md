---
title: "NPC_CloseNode | open.mp"
description: "Closes an NPC node, making it unavailable for use."
canonical: https://open.mp/docs/scripting/functions/NPC_CloseNode
language: en
---

# NPC\_CloseNode

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Closes an NPC node, making it unavailable for use by NPCs.

| Name | Description |
| --- | --- |
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

-   Closing a node prevents new NPCs from using it
-   NPCs currently using the node will continue until they finish
-   Closed nodes cannot be played until reopened with `NPC_OpenNode`

## Related Functions

-   [NPC\_OpenNode](https://open.mp/docs/scripting/functions/NPC_OpenNode): Open a node for use
-   [NPC\_IsNodeOpen](https://open.mp/docs/scripting/functions/NPC_IsNodeOpen): Check if a node is open
-   [NPC\_PlayNode](https://open.mp/docs/scripting/functions/NPC_PlayNode): Make NPC play a node
-   [NPC\_GetNodeType](https://open.mp/docs/scripting/functions/NPC_GetNodeType): Get node type information

## Related Callbacks

-   [OnNPCFinishNode](https://open.mp/docs/scripting/callbacks/OnNPCFinishNode): Called when NPC finishes a node
-   [OnNPCChangeNode](https://open.mp/docs/scripting/callbacks/OnNPCChangeNode): Called when NPC changes nodes
