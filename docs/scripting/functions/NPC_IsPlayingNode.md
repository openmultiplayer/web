---
title: "NPC_IsPlayingNode | open.mp"
description: "Checks if an NPC is currently playing a node."
canonical: https://open.mp/docs/scripting/functions/NPC_IsPlayingNode
language: en
---

# NPC\_IsPlayingNode

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC is currently playing a node.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is playing a node, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkplayingnode", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isPlayingNode = NPC_IsPlayingNode(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is playing node: %s", npcid, isPlayingNode ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns `false` if the NPC is not valid

## Related Functions

-   [NPC\_PlayNode](https://open.mp/docs/scripting/functions/NPC_PlayNode): Make NPC play a node
-   [NPC\_StopPlayingNode](https://open.mp/docs/scripting/functions/NPC_StopPlayingNode): Stop playing node
-   [NPC\_IsPlayingNodePaused](https://open.mp/docs/scripting/functions/NPC_IsPlayingNodePaused): Check if paused
-   [NPC\_PausePlayingNode](https://open.mp/docs/scripting/functions/NPC_PausePlayingNode): Pause node playing

## Related Callbacks

-   [OnNPCFinishNode](https://open.mp/docs/scripting/callbacks/OnNPCFinishNode): Called when an NPC finishes a node
