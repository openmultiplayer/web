---
title: NPC_OpenNode
sidebar_label: NPC_OpenNode
description: Opens an NPC node for use.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Opens an NPC node for use, making it available for NPCs to navigate through.

| Name   | Description            |
| ------ | ---------------------- |
| nodeid | The ID of the node    |

## Returns

Returns `true` if the node was opened successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    // Open a specific node for navigation
    if (NPC_OpenNode(1))
    {
        printf("Successfully opened node 1");
    }
    else
    {
        printf("Failed to open node 1");
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/opennode", true))
    {
        new nodeid = 5; // Example node ID
        
        if (NPC_OpenNode(nodeid))
        {
            new msg[64];
            format(msg, sizeof(msg), "Node %d opened successfully", nodeid);
            SendClientMessage(playerid, 0x00FF00FF, msg);
            
            // Create an NPC to use this node
            new npcid = NPC_Create("Navigator");
            NPC_Spawn(npcid);
            NPC_PlayNode(npcid, nodeid, NPC_MOVE_TYPE_WALK);
        }
        else
        {
            new msg[64];
            format(msg, sizeof(msg), "Failed to open node %d", nodeid);
            SendClientMessage(playerid, 0xFF0000FF, msg);
        }
        return 1;
    }
    
    if (!strcmp(cmdtext, "/opennodes", true))
    {
        new openedCount = 0;
        
        for (new nodeid = 0; nodeid < 64; nodeid++)
        {
            if (NPC_OpenNode(nodeid))
            {
                openedCount++;
            }
        }
        
        new msg[64];
        format(msg, sizeof(msg), "Opened %d nodes successfully", openedCount);
        SendClientMessage(playerid, 0x00FF00FF, msg);
        return 1;
    }
    return 0;
}
```

## Notes

- Node IDs range from 0 to 63
- Nodes must be opened before NPCs can use them for navigation
- Opening a node loads its data and makes it accessible
- Use NPC_IsNodeOpen to check if a node is already open
- Failed opens may indicate invalid node IDs or system limitations

## Related Functions

- [NPC_CloseNode](NPC_CloseNode): Close a node
- [NPC_IsNodeOpen](NPC_IsNodeOpen): Check if node is open
- [NPC_PlayNode](NPC_PlayNode): Make NPC play a node
- [NPC_GetNodeInfo](NPC_GetNodeInfo): Get node information

## Related Callbacks

*No specific callbacks are triggered by this function.*
