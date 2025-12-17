---
title: NPC_IsPlayingPlayback
sidebar_label: NPC_IsPlayingPlayback
description: Checks if an NPC is playing a recording playback.
tags: ["npc", "recording", "playback"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is currently playing a recording playback.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is playing a playback, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkplayingplayback", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isPlayingPlayback = NPC_IsPlayingPlayback(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is playing playback: %s", npcid, isPlayingPlayback ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- Returns true when the NPC is actively playing a recording

## Related Functions

- [NPC_StartPlayback](NPC_StartPlayback): Start playing recording
- [NPC_StopPlayback](NPC_StopPlayback): Stop playback
- [NPC_PausePlayback](NPC_PausePlayback): Pause/unpause playback
- [NPC_IsPlaybackPaused](NPC_IsPlaybackPaused): Check if paused

## Related Callbacks

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): Called when playback starts
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Called when playback ends
