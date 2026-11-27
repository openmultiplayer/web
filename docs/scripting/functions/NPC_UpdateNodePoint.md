---
title: "NPC_UpdateNodePoint | open.mp"
description: "Updates an NPC to a specific point in the currently playing node."
canonical: https://open.mp/docs/scripting/functions/NPC_UpdateNodePoint
language: en
---

# NPC\_UpdateNodePoint

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Updates an NPC to a specific point in the currently playing node.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| pointid | The point ID in the node to update to |

## Returns

Returns `true` if the update was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcupdatenodepoint ", true, 20))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new pointid = strval(cmdtext[20]);

        new bool:success = NPC_UpdateNodePoint(npcid, pointid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d update node point %d: %s", npcid, pointid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```

## Notes

-   The NPC must be currently playing a node
-   Point ID must exist in the current node
-   Use this to skip to specific waypoints in navigation
-   Useful for teleporting NPCs within their current path

## Related Functions

-   [NPC\_PlayNode](https://open.mp/docs/scripting/functions/NPC_PlayNode): Start playing a node
-   [NPC\_SetNodePoint](https://open.mp/docs/scripting/functions/NPC_SetNodePoint): Set node point coordinates
-   [NPC\_GetNodePointPosition](https://open.mp/docs/scripting/functions/NPC_GetNodePointPosition): Get point position
-   [NPC\_IsPlayingNode](https://open.mp/docs/scripting/functions/NPC_IsPlayingNode): Check if playing node

## Related Callbacks

-   [OnNPCFinishNode](https://open.mp/docs/scripting/callbacks/OnNPCFinishNode): Called when NPC finishes a node
