---
title: "NPC_GetNodePointPosition | open.mp"
description: "Gets the position of the current point in an NPC node."
canonical: https://open.mp/docs/scripting/functions/NPC_GetNodePointPosition
language: en
---

# NPC\_GetNodePointPosition

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the position of the current point in an NPC node.

| Name | Description |
| --- | --- |
| nodeid | The ID of the node |
| &x | Variable to store the X coordinate |
| &y | Variable to store the Y coordinate |
| &z | Variable to store the Z coordinate |

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

-   The node must be opened with `NPC_OpenNode` first
-   A point must be set with `NPC_SetNodePoint` before getting its position
-   All coordinate parameters are passed by reference

## Related Functions

-   [NPC\_OpenNode](https://open.mp/docs/scripting/functions/NPC_OpenNode): Open a node for use
-   [NPC\_SetNodePoint](https://open.mp/docs/scripting/functions/NPC_SetNodePoint): Set current node point
-   [NPC\_GetNodePointCount](https://open.mp/docs/scripting/functions/NPC_GetNodePointCount): Get point count
-   [NPC\_PlayNode](https://open.mp/docs/scripting/functions/NPC_PlayNode): Make NPC play a node

## Related Callbacks

-   [OnNPCFinishNodePoint](https://open.mp/docs/scripting/callbacks/OnNPCFinishNodePoint): Called when NPC finishes a node point
