---
title: NPC_UpdateNodePoint
sidebar_label: NPC_UpdateNodePoint
description: Updates an NPC to a specific point in the currently playing node.
tags: ["npc", "node"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Updates an NPC to a specific point in the currently playing node.

| Name    | Description                                   |
| ------- | --------------------------------------------- |
| npcid   | The ID of the NPC                             |
| pointid | The point ID in the node to update to        |

## Returns

Returns `true` if the update was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("NodeNavigator");
    NPC_Spawn(npcid);
    
    // Open a node and start playing
    if (NPC_OpenNode(1))
    {
        NPC_PlayNode(npcid, 1, NPC_MOVE_TYPE_WALK);
        
        // Update to specific point after 10 seconds
        SetTimerEx("UpdateToPoint", 10000, false, "ii", npcid, 5);
    }
    
    return 1;
}

forward UpdateToPoint(npcid, pointid);
public UpdateToPoint(npcid, pointid)
{
    if (NPC_UpdateNodePoint(npcid, pointid))
    {
        printf("NPC %d updated to node point %d", npcid, pointid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/skiptopoint", true))
    {
        // Skip NPC 0 to point 3 in current node
        if (NPC_UpdateNodePoint(0, 3))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 skipped to point 3");
        }
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

- [OnNPCFinishPlayingNode](OnNPCFinishPlayingNode): Called when finished