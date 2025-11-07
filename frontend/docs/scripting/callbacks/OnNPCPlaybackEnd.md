---
title: OnNPCPlaybackEnd
sidebar_label: OnNPCPlaybackEnd
description: This callback is called when an NPC finishes playback of a recorded file.
tags: ["npc", "playback", "recording"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when an NPC finishes playback of a recorded file.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| npcid    | The ID of the NPC that finished playback   |
| recordid | The ID of the record that finished playing |

## Examples

```c
public OnNPCPlaybackEnd(npcid, recordid)
{
    printf("[NPC] NPC %d finished playback (record: %d)", npcid, recordid);

    // Notify players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d finished playback (record ID: %d)", npcid, recordid);
        }
    }
    return 1;
}

```

## Notes

- This callback is called when the recording reaches its end naturally
- It's also called when playback is stopped manually using `NPC_StopPlayback`
- The `recordid` corresponds to the loaded record file

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_StartPlayback](../functions/NPC_StartPlayback): Start NPC playback of a recording
- [NPC_StopPlayback](../functions/NPC_StopPlayback): Stop NPC playback
- [NPC_PausePlayback](../functions/NPC_PausePlayback): Pause/unpause NPC playback
- [NPC_IsPlayingPlayback](../functions/NPC_IsPlayingPlayback): Check if NPC is playing a recording

## Related Callbacks

- [OnNPCPlaybackStart](OnNPCPlaybackStart): Called when NPC starts playing a recording
