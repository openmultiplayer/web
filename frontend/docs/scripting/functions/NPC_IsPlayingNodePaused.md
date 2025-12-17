---
title: NPC_IsPlayingNodePaused
sidebar_label: NPC_IsPlayingNodePaused
description: Checks if an NPC's node playing is currently paused.
tags: ["npc", "node"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC's node playing is currently paused.

| Name  | Description       |
| ----- | ----------------- |
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

- Returns `false` if the NPC is not playing a node

## Related Functions

- [NPC_IsPlayingNode](NPC_IsPlayingNode): Check if playing node
- [NPC_PausePlayingNode](NPC_PausePlayingNode): Pause node playing
- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): Resume node playing
- [NPC_StopPlayingNode](NPC_StopPlayingNode): Stop playing node

## Related Callbacks

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Called when an NPC finishes a node
