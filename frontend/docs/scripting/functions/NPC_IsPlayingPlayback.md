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
public OnGameModeInit()
{
    new npcid = NPC_Create("AutoBot");
    NPC_Spawn(npcid);

    // Load multiple recordings
    NPC_LoadRecord("patrol_route");
    NPC_LoadRecord("combat_moves");

    // Start patrol recording
    NPC_StartPlayback(npcid, "patrol_route", true, 1958.33, 1343.12, 15.36, 0.0, 0.0, 0.0);

    // Monitor playback status
    SetTimer("MonitorPlayback", 2000, true);

    return 1;
}

forward MonitorPlayback();
public MonitorPlayback()
{
    if (NPC_IsPlayingPlayback(0))
    {
        new status[32];
        if (NPC_IsPlaybackPaused(0))
            status = "Playing (Paused)";
        else
            status = "Playing (Active)";

        printf("NPC 0 status: %s", status);
    }
    else
    {
        printf("NPC 0: No active playback");
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/playbackinfo", true))
    {
        if (NPC_IsPlayingPlayback(0))
        {
            new bool:paused = NPC_IsPlaybackPaused(0);
            new status[64];
            format(status, sizeof(status), "NPC 0: Playing recording (%s)",
                paused ? "PAUSED" : "ACTIVE");
            SendClientMessage(playerid, 0x00FF00FF, status);
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0: No recording playback active");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        if (!NPC_IsPlayingPlayback(0))
        {
            if (NPC_IsValidRecord("patrol_route"))
            {
                NPC_StartPlayback(0, "patrol_route", true, 1958.33, 1343.12, 15.36, 0.0, 0.0, 0.0);
                SendClientMessage(playerid, 0x00FF00FF, "NPC 0 started patrol recording");
            }
            else
            {
                SendClientMessage(playerid, 0xFF0000FF, "Patrol route recording not loaded");
            }
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0 is already playing a recording");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/stopplayback", true))
    {
        if (NPC_IsPlayingPlayback(0))
        {
            NPC_StopPlayback(0);
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 playback stopped");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 is not playing any recording");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Returns true when the NPC is actively playing a recording
- This includes both active and paused playbacks
- Use this to check if an NPC is under recording control
- NPCs can only play one recording at a time

## Related Functions

- [NPC_StartPlayback](NPC_StartPlayback): Start playing recording
- [NPC_StopPlayback](NPC_StopPlayback): Stop playback
- [NPC_PausePlayback](NPC_PausePlayback): Pause/unpause playback
- [NPC_IsPlaybackPaused](NPC_IsPlaybackPaused): Check if paused

## Related Callbacks

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): Called when playback starts
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Called when playback ends
