---
title: "NPC_OpenNode | open.mp"
description: "Opens an NPC node for use."
canonical: https://open.mp/docs/scripting/functions/NPC_OpenNode
language: en
---

# NPC\_OpenNode

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Opens an NPC node for use, making it available for NPCs to navigate through.

| Name | Description |
| --- | --- |
| nodeid | The ID of the node |

## Returns

Returns `true` if the node was opened successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcopennode ", true, 13))
    {
        new nodeid = strval(cmdtext[13]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new bool:success = NPC_OpenNode(nodeid);

        SendClientMessage(playerid, 0x00FF00FF, "Open node %d: %s", nodeid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```

## Notes

-   Node IDs range from 0 to 63
-   Nodes must be opened before NPCs can use them for navigation
-   Opening a node loads its data and makes it accessible
-   Use NPC\_IsNodeOpen to check if a node is already open

## Related Functions

-   [NPC\_CloseNode](https://open.mp/docs/scripting/functions/NPC_CloseNode): Close a node
-   [NPC\_IsNodeOpen](https://open.mp/docs/scripting/functions/NPC_IsNodeOpen): Check if node is open
-   [NPC\_PlayNode](https://open.mp/docs/scripting/functions/NPC_PlayNode): Make NPC play a node
-   [NPC\_GetNodeInfo](https://open.mp/docs/scripting/functions/NPC_GetNodeInfo): Get node information

## Related Callbacks

_No specific callbacks are triggered by this function._
