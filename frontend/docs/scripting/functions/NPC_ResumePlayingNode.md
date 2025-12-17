---
title: NPC_ResumePlayingNode
sidebar_label: NPC_ResumePlayingNode
description: Resumes paused node navigation for an NPC.
tags: ["npc", "node"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Resumes paused node navigation for an NPC.

| Name  | Description       |
| ----- | ----------------- |
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

- Only works if the NPC's node navigation was previously paused
- The NPC will continue from where it was paused

## Related Functions

- [NPC_PausePlayingNode](NPC_PausePlayingNode): Pause node navigation
- [NPC_PlayNode](NPC_PlayNode): Start playing a node
- [NPC_IsPlayingNodePaused](NPC_IsPlayingNodePaused): Check if paused
- [NPC_IsPlayingNode](NPC_IsPlayingNode): Check if playing node

## Related Callbacks

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Called when NPC finishes a node
