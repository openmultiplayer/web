---
title: NPC_IsPlayingNode
sidebar_label: NPC_IsPlayingNode
description: Checks if an NPC is currently playing a node.
tags: ["npc", "node"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is currently playing a node.

| Name  | Description       |
| ----- | ----------------- |
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

- Returns `false` if the NPC is not valid

## Related Functions

- [NPC_PlayNode](NPC_PlayNode): Make NPC play a node
- [NPC_StopPlayingNode](NPC_StopPlayingNode): Stop playing node
- [NPC_IsPlayingNodePaused](NPC_IsPlayingNodePaused): Check if paused
- [NPC_PausePlayingNode](NPC_PausePlayingNode): Pause node playing

## Related Callbacks

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Called when an NPC finishes a node
