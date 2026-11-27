---
title: "OnNPCFinishMovePath | open.mp"
description: "This callback is called when an NPC finishes moving along a predefined path."
canonical: https://open.mp/docs/scripting/callbacks/OnNPCFinishMovePath
language: en
---

# OnNPCFinishMovePath

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

This callback is called when an NPC finishes moving along a predefined path.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC that finished the path |
| pathid | The ID of the path that was completed |

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

-   This callback is triggered when an NPC reaches the final point of a path
-   The NPC stops moving automatically when this callback is called

## Related Functions

-   [NPC\_MoveByPath](https://open.mp/docs/scripting/functions/NPC_MoveByPath): Make NPC follow a path
-   [NPC\_CreatePath](https://open.mp/docs/scripting/functions/NPC_CreatePath): Create a new movement path
-   [NPC\_IsValidPath](https://open.mp/docs/scripting/functions/NPC_IsValidPath): Check if path is valid

## Related Callbacks

-   [OnNPCFinishMove](https://open.mp/docs/scripting/callbacks/OnNPCFinishMove): Called when NPC finishes any movement
-   [OnNPCFinishNode](https://open.mp/docs/scripting/callbacks/OnNPCFinishNode): Called when NPC finishes node navigation
-   [OnNPCFinishNodePoint](https://open.mp/docs/scripting/callbacks/OnNPCFinishNodePoint): Called when NPC reaches a node point
