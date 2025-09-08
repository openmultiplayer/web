---
title: NPC_GetNodePointPosition
sidebar_label: NPC_GetNodePointPosition
description: Gets the position of the current point in an NPC node.
tags: ["npc", "node", "navigation", "position"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the position of the current point in an NPC node.

| Name   | Description                             |
| ------ | --------------------------------------- |
| nodeid | The ID of the node                     |
| &x     | Variable to store the X coordinate     |
| &y     | Variable to store the Y coordinate     |
| &z     | Variable to store the Z coordinate     |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnGameModeInit()
{
    // Open a node first
    if (NPC_OpenNode(1))
    {
        // Set to a specific point
        if (NPC_SetNodePoint(1, 0))
        {
            new Float:x, Float:y, Float:z;
            if (NPC_GetNodePointPosition(1, x, y, z))
            {
                printf("Node 1, Point 0 position: %.2f, %.2f, %.2f", x, y, z);
            }
        }
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/gotonode", true))
    {
        new nodeid = 1; // Example node
        if (NPC_IsNodeOpen(nodeid))
        {
            new Float:x, Float:y, Float:z;
            if (NPC_GetNodePointPosition(nodeid, x, y, z))
            {
                SetPlayerPos(playerid, x, y, z + 1.0);
                
                new msg[128];
                format(msg, sizeof(msg), "Teleported to node %d position", nodeid);
                SendClientMessage(playerid, 0x00FF00FF, msg);
            }
        }
        return 1;
    }
    return 0;
}

forward ShowNodePath(nodeid);
public ShowNodePath(nodeid)
{
    if (NPC_IsNodeOpen(nodeid))
    {
        new pointCount = NPC_GetNodePointCount(nodeid);
        
        for (new i = 0; i < pointCount; i++)
        {
            if (NPC_SetNodePoint(nodeid, i))
            {
                new Float:x, Float:y, Float:z;
                if (NPC_GetNodePointPosition(nodeid, x, y, z))
                {
                    printf("Node %d Point %d: %.2f, %.2f, %.2f", nodeid, i, x, y, z);
                }
            }
        }
    }
}
```

## Notes

- The node must be opened with `NPC_OpenNode` first
- A point must be set with `NPC_SetNodePoint` before getting its position
- All coordinate parameters are passed by reference
- Use this to create visual markers or teleport to node locations

## Related Functions

- [NPC_OpenNode](NPC_OpenNode): Open a node for use
- [NPC_SetNodePoint](NPC_SetNodePoint): Set current node point
- [NPC_GetNodePointCount](NPC_GetNodePointCount): Get point count
- [NPC_PlayNode](NPC_PlayNode): Make NPC play a node

## Related Callbacks

- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): Called when NPC finishes a node point
