---
title: "NPC_IsNodeOpen | open.mp"
description: "Checks if an NPC node is open."
canonical: https://open.mp/docs/scripting/functions/NPC_IsNodeOpen
language: en
---

# NPC\_IsNodeOpen

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC node is open and available for use.

| Name | Description |
| --- | --- |
| nodeid | The ID of the node |

## Returns

Returns `true` if the node is open, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodeopen ", true, 15))
    {
        new nodeid = strval(cmdtext[15]);

        new bool:isNodeOpen = NPC_IsNodeOpen(nodeid);

        SendClientMessage(playerid, 0x00FF00FF, "Node %d is open: %s", nodeid, isNodeOpen ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

-   Nodes must be opened with NPC\_OpenNode before use
-   Only open nodes can be played by NPCs
-   Use this to check node availability before assigning to NPCs

## Related Functions

-   [NPC\_OpenNode](https://open.mp/docs/scripting/functions/NPC_OpenNode): Open a node for use
-   [NPC\_CloseNode](https://open.mp/docs/scripting/functions/NPC_CloseNode): Close a node
-   [NPC\_PlayNode](https://open.mp/docs/scripting/functions/NPC_PlayNode): Make NPC play a node
-   [NPC\_GetNodeType](https://open.mp/docs/scripting/functions/NPC_GetNodeType): Get node type

## Related Callbacks

_No specific callbacks are triggered by this function._
