---
title: NPC_IsPlaybackPaused
sidebar_label: NPC_IsPlaybackPaused
description: Checks if an NPC's playback is paused.
tags: ["npc", "recording", "playback"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Checks if an NPC's playback is currently paused.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the playback is paused, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkplaybackpaused", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isPlaybackPaused = NPC_IsPlaybackPaused(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d playback paused: %s", npcid, isPlaybackPaused ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- Only returns true if the NPC is playing a recording and it's paused
- NPCs not playing recordings will always return false

## Related Functions

- [NPC_PausePlayback](NPC_PausePlayback): Pause/unpause playback
- [NPC_IsPlayingPlayback](NPC_IsPlayingPlayback): Check if playing
- [NPC_StartPlayback](NPC_StartPlayback): Start playback
- [NPC_StopPlayback](NPC_StopPlayback): Stop playback

## Related Callbacks

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): Called when playback starts
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Called when playback ends
