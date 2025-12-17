---
title: NPC_UpdateNodePoint
sidebar_label: NPC_UpdateNodePoint
description: Updates an NPC to a specific point in the currently playing node.
tags: ["npc", "node"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Updates an NPC to a specific point in the currently playing node.

| Name    | Description                           |
| ------- | ------------------------------------- |
| npcid   | The ID of the NPC                     |
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

- The NPC must be currently playing a node
- Point ID must exist in the current node
- Use this to skip to specific waypoints in navigation
- Useful for teleporting NPCs within their current path

## Related Functions

- [NPC_PlayNode](NPC_PlayNode): Start playing a node
- [NPC_SetNodePoint](NPC_SetNodePoint): Set node point coordinates
- [NPC_GetNodePointPosition](NPC_GetNodePointPosition): Get point position
- [NPC_IsPlayingNode](NPC_IsPlayingNode): Check if playing node

## Related Callbacks

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Called when NPC finishes a node
