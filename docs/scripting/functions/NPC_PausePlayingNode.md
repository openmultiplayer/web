---
title: "NPC_PausePlayingNode | open.mp"
description: "Pauses an NPC's node navigation."
canonical: https://open.mp/docs/scripting/functions/NPC_PausePlayingNode
language: en
---

# NPC\_PausePlayingNode

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Pauses an NPC's node navigation, temporarily stopping their movement through the node.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcpausenode", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:success = NPC_PausePlayingNode(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d pause node: %s", npcid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```

## Notes

-   Only works when NPC is actively playing a node
-   Paused node navigation can be resumed with NPC\_ResumePlayingNode
-   Use NPC\_IsPlayingNodePaused to check pause state

## Related Functions

-   [NPC\_ResumePlayingNode](https://open.mp/docs/scripting/functions/NPC_ResumePlayingNode): Resume node playing
-   [NPC\_IsPlayingNodePaused](https://open.mp/docs/scripting/functions/NPC_IsPlayingNodePaused): Check if paused
-   [NPC\_PlayNode](https://open.mp/docs/scripting/functions/NPC_PlayNode): Start playing node
-   [NPC\_StopPlayingNode](https://open.mp/docs/scripting/functions/NPC_StopPlayingNode): Stop playing node

## Related Callbacks

_No specific callbacks are triggered by this function._
