---
title: OnNPCFinishNodePoint
sidebar_label: OnNPCFinishNodePoint
description: This callback is called when an NPC reaches a specific point during node-based navigation.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when an NPC reaches a specific point during node-based navigation.

| Name    | Description                                   |
| ------- | --------------------------------------------- |
| npcid   | The ID of the NPC that reached the node point |
| nodeid  | The ID of the node being navigated            |
| pointid | The ID of the specific point that was reached |

## Examples

```c
public OnNPCFinishNode(npcid, nodeid)
{
    printf("[NPC] NPC %d finished node %d", npcid, nodeid);

    // Notify players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d finished node %d", npcid, nodeid);
        }
    }
    return 1;
}
```

## Notes

- This callback is only called when NPCs are using node-based navigation via `NPC_PlayNode`
- It's called each time the NPC reaches a waypoint within the node
- The `pointid` corresponds to the specific waypoint index within the node file

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_PlayNode](../functions/NPC_PlayNode): Start NPC node-based navigation
- [NPC_PausePlayingNode](../functions/NPC_PausePlayingNode): Pause NPC node navigation
- [NPC_ResumePlayingNode](../functions/NPC_ResumePlayingNode): Resume paused node navigation
- [NPC_StopPlayingNode](../functions/NPC_StopPlayingNode): Stop NPC node navigation

## Related Callbacks

- [OnNPCFinishNode](OnNPCFinishNode): Called when NPC finishes navigating a complete node
- [OnNPCChangeNode](OnNPCChangeNode): Called when NPC attempts to change nodes
- [OnNPCFinishMove](OnNPCFinishMove): Called when NPC finishes any type of movement
