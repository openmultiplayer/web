---
title: "OnNPCChangeNode | open.mp"
description: "This callback is called when an NPC attempts to change from one navigation node to another during node-based movement."
canonical: https://open.mp/docs/scripting/callbacks/OnNPCChangeNode
language: en
---

# OnNPCChangeNode

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

This callback is called when an NPC attempts to change from one navigation node to another during node-based movement. This allows you to control whether the node change should be allowed or denied.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC attempting to change nodes |
| newnodeid | The ID of the new node the NPC wants to move to |
| oldnodeid | The ID of the current node the NPC is on |

## Returns

Return `true` to allow the node change, or `false` to deny it.

## Examples

```c
public OnNPCChangeNode(npcid, newnodeid, oldnodeid)
{
    printf("[NPC] NPC %d changed from node %d to node %d", npcid, oldnodeid, newnodeid);

    // Notify players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d changed from node %d to node %d", npcid, oldnodeid, newnodeid);
        }
    }
    return 1;
}
```

## Notes

-   This callback is only called when NPCs are using node-based navigation via `NPC_PlayNode`
-   Returning `false` will prevent the NPC from changing nodes and may cause it to stop navigation
-   Node files must be loaded using `NPC_OpenNode` before NPCs can navigate between them

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [NPC\_PlayNode](https://open.mp/docs/scripting/functions/NPC_PlayNode): Start NPC node-based navigation
-   [NPC\_OpenNode](https://open.mp/docs/scripting/functions/NPC_OpenNode): Open a navigation node file
-   [NPC\_CloseNode](https://open.mp/docs/scripting/functions/NPC_CloseNode): Close a navigation node file
-   [NPC\_StopPlayingNode](https://open.mp/docs/scripting/functions/NPC_StopPlayingNode): Stop NPC node navigation

## Related Callbacks

-   [OnNPCFinishNode](https://open.mp/docs/scripting/callbacks/OnNPCFinishNode): Called when NPC finishes navigating a complete node
-   [OnNPCFinishNodePoint](https://open.mp/docs/scripting/callbacks/OnNPCFinishNodePoint): Called when NPC reaches a specific point in a node
