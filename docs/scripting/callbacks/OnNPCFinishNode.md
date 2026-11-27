---
title: "OnNPCFinishNode | open.mp"
description: "This callback is called when an NPC finishes navigating a complete node."
canonical: https://open.mp/docs/scripting/callbacks/OnNPCFinishNode
language: en
---

# OnNPCFinishNode

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

This callback is called when an NPC finishes navigating a complete node during node-based movement.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC that finished the node |
| nodeid | The ID of the node that was completed |

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

-   This callback is only called when NPCs are using node-based navigation via `NPC_PlayNode`
-   It's called when the NPC has completed navigation through all points in the node
-   The node navigation stops automatically when this callback is triggered

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [NPC\_PlayNode](https://open.mp/docs/scripting/functions/NPC_PlayNode): Start NPC node-based navigation
-   [NPC\_StopPlayingNode](https://open.mp/docs/scripting/functions/NPC_StopPlayingNode): Stop NPC node navigation
-   [NPC\_IsPlayingNode](https://open.mp/docs/scripting/functions/NPC_IsPlayingNode): Check if NPC is navigating a node
-   [NPC\_OpenNode](https://open.mp/docs/scripting/functions/NPC_OpenNode): Open a navigation node file

## Related Callbacks

-   [OnNPCFinishNodePoint](https://open.mp/docs/scripting/callbacks/OnNPCFinishNodePoint): Called when NPC reaches a specific point in a node
-   [OnNPCChangeNode](https://open.mp/docs/scripting/callbacks/OnNPCChangeNode): Called when NPC attempts to change nodes
-   [OnNPCFinishMove](https://open.mp/docs/scripting/callbacks/OnNPCFinishMove): Called when NPC finishes any type of movement
