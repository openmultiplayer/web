---
title: NPC_GetNodePointCount
sidebar_label: NPC_GetNodePointCount
description: Gets the number of points in an NPC node.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the number of points in an NPC node.

| Name   | Description            |
| ------ | ---------------------- |
| nodeid | The ID of the node    |

## Returns

Returns the number of points in the node, or 0 if the node is invalid.

## Examples

```c
public OnGameModeInit()
{
    // Open a node first
    if (NPC_OpenNode(1))
    {
        new pointCount = NPC_GetNodePointCount(1);
        printf("Node 1 has %d points", pointCount);
        
        // Set to a specific point
        if (pointCount > 0)
        {
            NPC_SetNodePoint(1, 0); // Set to first point
        }
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/nodepointcounts", true))
    {
        for (new nodeid = 0; nodeid < 10; nodeid++)
        {
            if (NPC_IsNodeOpen(nodeid))
            {
                new pointCount = NPC_GetNodePointCount(nodeid);
                
                new msg[128];
                format(msg, sizeof(msg), "Node %d has %d points", nodeid, pointCount);
                SendClientMessage(playerid, 0xFFFFFFFF, msg);
            }
        }
        
        return 1;
    }
    return 0;
}

forward CheckNodeProgress(npcid, nodeid);
public CheckNodeProgress(npcid, nodeid)
{
    if (NPC_IsPlayingNode(npcid))
    {
        new totalPoints = NPC_GetNodePointCount(nodeid);
        printf("NPC %d is navigating node %d with %d total points", 
            npcid, nodeid, totalPoints);
    }
}
```

## Notes

- Returns 0 if the node is invalid or not opened
- The point count represents navigation waypoints within the node
- Use this to validate point indices before setting them
- Points are indexed from 0 to (count - 1)

## Related Functions

- [NPC_OpenNode](NPC_OpenNode): Open a node for use
- [NPC_SetNodePoint](NPC_SetNodePoint): Set current node point
- [NPC_GetNodePointPosition](NPC_GetNodePointPosition): Get point position
- [NPC_IsNodeOpen](NPC_IsNodeOpen): Check if node is open

## Related Callbacks

- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): Called when NPC finishes a node point
- [OnNPCFinishNode](OnNPCFinishNode): Called when NPC finishes a node
