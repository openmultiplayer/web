---
title: "OnNPCFinishNodePoint | open.mp"
description: "This callback is called when an NPC reaches a specific point during node-based navigation."
canonical: https://open.mp/docs/scripting/callbacks/OnNPCFinishNodePoint
language: en
---

# OnNPCFinishNodePoint

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

This callback is called when an NPC reaches a specific point during node-based navigation.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC that reached the node point |
| nodeid | The ID of the node being navigated |
| pointid | The ID of the specific point that was reached |

## Examples

```c
public OnNPCFinishNodePoint(npcid, nodeid, pointid)
{
    // Notify players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d reached node %d point %d", npcid, nodeid, pointid);
        }
    }
    return 1;
}
```

## Notes

-   This callback is only called when NPCs are using node-based navigation via `NPC_PlayNode`
-   It's called each time the NPC reaches a waypoint within the node
-   The `pointid` corresponds to the specific waypoint index within the node file

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [NPC\_PlayNode](https://open.mp/docs/scripting/functions/NPC_PlayNode): Start NPC node-based navigation
-   [NPC\_PausePlayingNode](https://open.mp/docs/scripting/functions/NPC_PausePlayingNode): Pause NPC node navigation
-   [NPC\_ResumePlayingNode](https://open.mp/docs/scripting/functions/NPC_ResumePlayingNode): Resume paused node navigation
-   [NPC\_StopPlayingNode](https://open.mp/docs/scripting/functions/NPC_StopPlayingNode): Stop NPC node navigation

## Related Callbacks

-   [OnNPCFinishNode](https://open.mp/docs/scripting/callbacks/OnNPCFinishNode): Called when NPC finishes navigating a complete node
-   [OnNPCChangeNode](https://open.mp/docs/scripting/callbacks/OnNPCChangeNode): Called when NPC attempts to change nodes
-   [OnNPCFinishMove](https://open.mp/docs/scripting/callbacks/OnNPCFinishMove): Called when NPC finishes any type of movement
