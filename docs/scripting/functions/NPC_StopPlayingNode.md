---
title: "NPC_StopPlayingNode | open.mp"
description: "Stops an NPC from playing a node."
canonical: https://open.mp/docs/scripting/functions/NPC_StopPlayingNode
language: en
---

# NPC\_StopPlayingNode

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Stops an NPC from playing their current node.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC was stopped successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcstopnode", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:success = NPC_StopPlayingNode(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d stop node: %s", npcid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```

## Notes

-   The NPC will stop at their current position in the node
-   If the NPC is not playing a node, this function returns `false`
-   The node remains open and can be used by other NPCs
-   Use `NPC_IsPlayingNode` to check if an NPC is playing a node

## Related Functions

-   [NPC\_PlayNode](https://open.mp/docs/scripting/functions/NPC_PlayNode): Make NPC play a node
-   [NPC\_IsPlayingNode](https://open.mp/docs/scripting/functions/NPC_IsPlayingNode): Check if NPC is playing node
-   [NPC\_PausePlayingNode](https://open.mp/docs/scripting/functions/NPC_PausePlayingNode): Pause node playing
-   [NPC\_ResumePlayingNode](https://open.mp/docs/scripting/functions/NPC_ResumePlayingNode): Resume node playing

## Related Callbacks

-   [OnNPCFinishNode](https://open.mp/docs/scripting/callbacks/OnNPCFinishNode): Called when NPC finishes a node
