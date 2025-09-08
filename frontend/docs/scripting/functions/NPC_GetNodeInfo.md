---
title: NPC_GetNodeInfo
sidebar_label: NPC_GetNodeInfo
description: Gets information about an NPC node.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets information about an NPC node including vehicle, pedestrian, and navigation data.

| Name       | Description                                     |
| ---------- | ----------------------------------------------- |
| nodeid     | The ID of the node                             |
| &vehnodes  | Variable to store vehicle node count          |
| &pednodes  | Variable to store pedestrian node count       |
| &navinode  | Variable to store navigation node information  |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnGameModeInit()
{
    // Open a node first
    if (NPC_OpenNode(1))
    {
        new vehnodes, pednodes, navinode;
        if (NPC_GetNodeInfo(1, vehnodes, pednodes, navinode))
        {
            printf("Node 1 Info:");
            printf("- Vehicle nodes: %d", vehnodes);
            printf("- Pedestrian nodes: %d", pednodes);
            printf("- Navigation node: %d", navinode);
        }
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/nodeinfo", true))
    {
        for (new nodeid = 0; nodeid < 10; nodeid++)
        {
            if (NPC_IsNodeOpen(nodeid))
            {
                new vehnodes, pednodes, navinode;
                if (NPC_GetNodeInfo(nodeid, vehnodes, pednodes, navinode))
                {
                    new msg[128];
                    format(msg, sizeof(msg), 
                        "Node %d: Veh=%d, Ped=%d, Nav=%d", 
                        nodeid, vehnodes, pednodes, navinode);
                    SendClientMessage(playerid, 0xFFFFFFFF, msg);
                }
            }
        }
        
        return 1;
    }
    return 0;
}
```

## Notes

- The node must be opened with `NPC_OpenNode` before getting info
- Vehicle nodes are for vehicle navigation paths
- Pedestrian nodes are for walking paths
- Navigation node provides routing information
- All count parameters are passed by reference

## Related Functions

- [NPC_OpenNode](NPC_OpenNode): Open a node for use
- [NPC_CloseNode](NPC_CloseNode): Close a node
- [NPC_IsNodeOpen](NPC_IsNodeOpen): Check if node is open
- [NPC_GetNodeType](NPC_GetNodeType): Get node type

## Related Callbacks

- [OnNPCFinishNode](OnNPCFinishNode): Called when NPC finishes node
- [OnNPCChangeNode](OnNPCChangeNode): Called when NPC changes nodes
