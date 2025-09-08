---
title: NPC_IsNodeOpen
sidebar_label: NPC_IsNodeOpen
description: Checks if an NPC node is open.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC node is open and available for use.

| Name   | Description            |
| ------ | ---------------------- |
| nodeid | The ID of the node    |

## Returns

Returns `true` if the node is open, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    if (NPC_IsNodeOpen(1))
    {
        printf("Node 1 is already open");
    }
    else
    {
        if (NPC_OpenNode(1))
        {
            printf("Successfully opened node 1");
        }
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknode", true))
    {
        if (NPC_IsNodeOpen(1))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Node 1 is open");
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "Node 1 is closed");
        }
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

- [OnNPCFinishNode](OnNPCFinishNode): Called when NPC finishes node
