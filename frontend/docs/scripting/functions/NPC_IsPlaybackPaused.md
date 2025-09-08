---
title: NPC_IsPlaybackPaused
sidebar_label: NPC_IsPlaybackPaused
description: Checks if an NPC's playback is paused.
tags: ["npc", "recording", "playback"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC's playback is currently paused.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the playback is paused, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("RecordedDriver");
    NPC_Spawn(npcid);
    
    // Load and start playback
    NPC_LoadRecord("driver_route");
    NPC_StartPlayback(npcid, "driver_route", true, 1958.33, 1343.12, 15.36, 0.0, 0.0, 0.0);
    
    // Auto-pause after 10 seconds
    SetTimerEx("AutoPausePlayback", 10000, false, "i", npcid);
    
    return 1;
}

forward AutoPausePlayback(npcid);
public AutoPausePlayback(npcid)
{
    if (NPC_IsPlayingPlayback(npcid))
    {
        NPC_PausePlayback(npcid, true);
        printf("NPC %d playback auto-paused", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/pausestatus", true))
    {
        if (NPC_IsPlayingPlayback(0))
        {
            if (NPC_IsPlaybackPaused(0))
            {
                SendClientMessage(playerid, 0xFFFF00FF, "NPC 0 playback is PAUSED");
            }
            else
            {
                SendClientMessage(playerid, 0x00FF00FF, "NPC 0 playback is RUNNING");
            }
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 is not playing any recording");
        }
        return 1;
    }
    
    if (!strcmp(cmdtext, "/togglepause", true))
    {
        if (NPC_IsPlayingPlayback(0))
        {
            new bool:currentPaused = NPC_IsPlaybackPaused(0);
            NPC_PausePlayback(0, !currentPaused);
            
            new action[16];
            action = currentPaused ? "Resumed" : "Paused";
            
            new msg[64];
            format(msg, sizeof(msg), "NPC 0 playback %s", action);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 has no active playback to pause");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Only returns true if the NPC is playing a recording and it's paused
- Use this to check playback state before toggling pause
- Paused playbacks can be resumed with NPC_PausePlayback(npcid, false)
- NPCs not playing recordings will always return false

## Related Functions

- [NPC_PausePlayback](NPC_PausePlayback): Pause/unpause playback
- [NPC_IsPlayingPlayback](NPC_IsPlayingPlayback): Check if playing
- [NPC_StartPlayback](NPC_StartPlayback): Start playback
- [NPC_StopPlayback](NPC_StopPlayback): Stop playback

## Related Callbacks

- [OnNPCPlaybackStart](OnNPCPlaybackStart): Called when playback starts
- [OnNPCPlaybackEnd](OnNPCPlaybackEnd): Called when playback ends