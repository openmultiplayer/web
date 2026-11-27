---
title: "NPC_IsPlayingNodePaused | open.mp"
description: "Checks if an NPC's node playing is currently paused."
canonical: https://open.mp/docs/scripting/functions/NPC_IsPlayingNodePaused
language: en
---

# NPC\_IsPlayingNodePaused

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC's node playing is currently paused.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC's node playing is paused, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodepaused", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isNodePaused = NPC_IsPlayingNodePaused(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d node paused: %s", npcid, isNodePaused ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns `false` if the NPC is not playing a node

## Related Functions

-   [NPC\_IsPlayingNode](https://open.mp/docs/scripting/functions/NPC_IsPlayingNode): Check if playing node
-   [NPC\_PausePlayingNode](https://open.mp/docs/scripting/functions/NPC_PausePlayingNode): Pause node playing
-   [NPC\_ResumePlayingNode](https://open.mp/docs/scripting/functions/NPC_ResumePlayingNode): Resume node playing
-   [NPC\_StopPlayingNode](https://open.mp/docs/scripting/functions/NPC_StopPlayingNode): Stop playing node

## Related Callbacks

-   [OnNPCFinishNode](https://open.mp/docs/scripting/callbacks/OnNPCFinishNode): Called when an NPC finishes a node
