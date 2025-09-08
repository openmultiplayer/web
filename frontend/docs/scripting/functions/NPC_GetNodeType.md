---
title: NPC_GetNodeType
sidebar_label: NPC_GetNodeType
description: Gets the type of an NPC node.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the type of an NPC node.

| Name   | Description            |
| ------ | ---------------------- |
| nodeid | The ID of the node    |

## Returns

Returns the node type ID, or -1 if the node is invalid.

## Examples

```c
public OnGameModeInit()
{
    // Open a node first
    if (NPC_OpenNode(1))
    {
        new nodeType = NPC_GetNodeType(1);
        
        new typeString[32];
        switch(nodeType)
        {
            case 0: typeString = "Pedestrian";
            case 1: typeString = "Vehicle";
            case 2: typeString = "Boat";
            case 3: typeString = "Aircraft";
            default: typeString = "Unknown";
        }
        
        printf("Node 1 is type %d (%s)", nodeType, typeString);
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/nodetypes", true))
    {
        for (new nodeid = 0; nodeid < 10; nodeid++)
        {
            if (NPC_IsNodeOpen(nodeid))
            {
                new nodeType = NPC_GetNodeType(nodeid);
                
                new typeString[32];
                switch(nodeType)
                {
                    case 0: typeString = "Pedestrian";
                    case 1: typeString = "Vehicle";
                    case 2: typeString = "Boat";
                    case 3: typeString = "Aircraft";
                    default: format(typeString, sizeof(typeString), "Type %d", nodeType);
                }
                
                new msg[128];
                format(msg, sizeof(msg), "Node %d: %s", nodeid, typeString);
                SendClientMessage(playerid, 0xFFFFFFFF, msg);
            }
        }
        
        return 1;
    }
    return 0;
}
```

## Notes

- Returns -1 if the node is invalid or not opened
- Different node types are designed for different movement types
- Pedestrian nodes are for walking NPCs
- Vehicle nodes are for driving NPCs
- Choose the appropriate node type for your NPC's movement style

## Related Functions

- [NPC_OpenNode](NPC_OpenNode): Open a node for use
- [NPC_IsNodeOpen](NPC_IsNodeOpen): Check if node is open
- [NPC_GetNodeInfo](NPC_GetNodeInfo): Get detailed node information
- [NPC_PlayNode](NPC_PlayNode): Make NPC play a node

## Related Callbacks

- [OnNPCFinishNode](OnNPCFinishNode): Called when NPC finishes a node
- [OnNPCChangeNode](OnNPCChangeNode): Called when NPC changes nodes
