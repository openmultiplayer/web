---
title: OnNPCPlaybackStart
sidebar_label: OnNPCPlaybackStart
description: This callback is called when an NPC starts playback of a recorded file.
tags: ["npc", "playback", "recording"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

This callback is called when an NPC starts playback of a recorded file.

| Name     | Description                               |
| -------- | ----------------------------------------- |
| npcid    | The ID of the NPC that started playback   |
| recordid | The ID of the record that started playing |

## Examples

```c
public OnNPCPlaybackStart(npcid, recordid)
{
    printf("[NPC] NPC %d started playback (record: %d)", npcid, recordid);

    // Notify players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d started playback (record ID: %d)", npcid, recordid);
        }
    }
    return 1;
}

```

## Notes

- This callback is called immediately when `NPC_StartPlayback` is successfully executed
- The `recordid` corresponds to the loaded record file
- The NPC will follow the recorded movements from the file

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_StartPlayback](../functions/NPC_StartPlayback): Start NPC playback of a recording
- [NPC_StopPlayback](../functions/NPC_StopPlayback): Stop NPC playback
- [NPC_PausePlayback](../functions/NPC_PausePlayback): Pause/unpause NPC playback
- [NPC_IsPlayingPlayback](../functions/NPC_IsPlayingPlayback): Check if NPC is playing a recording

## Related Callbacks

- [OnNPCPlaybackEnd](OnNPCPlaybackEnd): Called when NPC finishes playing a recording
