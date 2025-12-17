---
title: NPC_GetNodePointCount
sidebar_label: NPC_GetNodePointCount
description: Gets the number of points in an NPC node.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the number of points in an NPC node.

| Name   | Description        |
| ------ | ------------------ |
| nodeid | The ID of the node |

## Returns

Returns the number of points in the node, or 0 if the node is invalid.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodepointcount ", true, 21))
    {
        new nodeid = strval(cmdtext[21]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new count = NPC_GetNodePointCount(nodeid);

        SendClientMessage(playerid, 0x00FF00FF, "Node %d has %d points", nodeid, count);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns 0 if the node is invalid or not opened
- The point count represents navigation waypoints within the node

## Related Functions

- [NPC_OpenNode](NPC_OpenNode): Open a node for use
- [NPC_SetNodePoint](NPC_SetNodePoint): Set current node point
- [NPC_GetNodePointPosition](NPC_GetNodePointPosition): Get point position
- [NPC_IsNodeOpen](NPC_IsNodeOpen): Check if node is open

## Related Callbacks

- [OnNPCFinishNodePoint](../callbacks/OnNPCFinishNodePoint): Called when NPC finishes a node point
- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Called when NPC finishes a node
