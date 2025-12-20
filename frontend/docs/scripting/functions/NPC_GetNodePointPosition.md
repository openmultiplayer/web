---
title: NPC_GetNodePointPosition
sidebar_label: NPC_GetNodePointPosition
description: Gets the position of the current point in an NPC node.
tags: ["npc", "node", "navigation", "position"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the position of the current point in an NPC node.

| Name   | Description                        |
| ------ | ---------------------------------- |
| nodeid | The ID of the node                 |
| &x     | Variable to store the X coordinate |
| &y     | Variable to store the Y coordinate |
| &z     | Variable to store the Z coordinate |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodepointpos ", true, 19))
    {
        new nodeid = strval(cmdtext[19]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new Float:x, Float:y, Float:z;
        new bool:success = NPC_GetNodePointPosition(nodeid, x, y, z);

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "Node %d point position: %.2f, %.2f, %.2f", nodeid, x, y, z);
        else
            SendClientMessage(playerid, 0xFF0000FF, "Failed to get node %d point position", nodeid);
        return 1;
    }
    return 0;
}
```

## Notes

- The node must be opened with `NPC_OpenNode` first
- A point must be set with `NPC_SetNodePoint` before getting its position
- All coordinate parameters are passed by reference

## Related Functions

- [NPC_OpenNode](NPC_OpenNode): Open a node for use
- [NPC_SetNodePoint](NPC_SetNodePoint): Set current node point
- [NPC_GetNodePointCount](NPC_GetNodePointCount): Get point count
- [NPC_PlayNode](NPC_PlayNode): Make NPC play a node

## Related Callbacks

- [OnNPCFinishNodePoint](../callbacks/OnNPCFinishNodePoint): Called when NPC finishes a node point
