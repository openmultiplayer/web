---
title: "NPC_ResumePlayingNode | open.mp"
description: "Resumes paused node navigation for an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_ResumePlayingNode
language: en
---

# NPC\_ResumePlayingNode

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Resumes paused node navigation for an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcresumenode", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:success = NPC_ResumePlayingNode(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d resume node: %s", npcid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```

## Notes

-   Only works if the NPC's node navigation was previously paused
-   The NPC will continue from where it was paused

## Related Functions

-   [NPC\_PausePlayingNode](https://open.mp/docs/scripting/functions/NPC_PausePlayingNode): Pause node navigation
-   [NPC\_PlayNode](https://open.mp/docs/scripting/functions/NPC_PlayNode): Start playing a node
-   [NPC\_IsPlayingNodePaused](https://open.mp/docs/scripting/functions/NPC_IsPlayingNodePaused): Check if paused
-   [NPC\_IsPlayingNode](https://open.mp/docs/scripting/functions/NPC_IsPlayingNode): Check if playing node

## Related Callbacks

-   [OnNPCFinishNode](https://open.mp/docs/scripting/callbacks/OnNPCFinishNode): Called when NPC finishes a node
