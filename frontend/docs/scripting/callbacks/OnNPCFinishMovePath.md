---
title: OnNPCFinishMovePath
sidebar_label: OnNPCFinishMovePath
description: This callback is called when an NPC finishes moving along a predefined path.
tags: ["npc", "movement", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when an NPC finishes moving along a predefined path.

| Name   | Description                              |
| ------ | ---------------------------------------- |
| npcid  | The ID of the NPC that finished the path |
| pathid | The ID of the path that was completed    |

## Examples

```c
public OnNPCFinishMovePath(npcid, pathid)
{
    // Find all players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d finished moving along path %d", npcid, pathid);
        }
    }
    return 1;
}

```

## Notes

- This callback is triggered when an NPC reaches the final point of a path
- The NPC stops moving automatically when this callback is called

## Related Functions

- [NPC_MoveByPath](../functions/NPC_MoveByPath): Make NPC follow a path
- [NPC_CreatePath](../functions/NPC_CreatePath): Create a new movement path
- [NPC_IsValidPath](../functions/NPC_IsValidPath): Check if path is valid

## Related Callbacks

- [OnNPCFinishMove](OnNPCFinishMove): Called when NPC finishes any movement
- [OnNPCFinishNode](OnNPCFinishNode): Called when NPC finishes node navigation
- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): Called when NPC reaches a node point
