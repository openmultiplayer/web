---
title: NPC_IsNodeOpen
sidebar_label: NPC_IsNodeOpen
description: Checks if an NPC node is open.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC node is open and available for use.

| Name   | Description        |
| ------ | ------------------ |
| nodeid | The ID of the node |

## Returns

Returns `true` if the node is open, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodeopen", true, 14))
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

- Nodes must be opened with NPC_OpenNode before use
- Only open nodes can be played by NPCs
- Use this to check node availability before assigning to NPCs

## Related Functions

- [NPC_OpenNode](NPC_OpenNode): Open a node for use
- [NPC_CloseNode](NPC_CloseNode): Close a node
- [NPC_PlayNode](NPC_PlayNode): Make NPC play a node
- [NPC_GetNodeType](NPC_GetNodeType): Get node type

## Related Callbacks

_No specific callbacks are triggered by this function._
