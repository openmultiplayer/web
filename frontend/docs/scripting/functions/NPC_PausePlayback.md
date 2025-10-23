---
title: NPC_PausePlayback
sidebar_label: NPC_PausePlayback
description: Pauses or unpauses an NPC's recording playback.
tags: ["npc", "recording", "playback"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Pauses or unpauses an NPC's recording playback.

| Name  | Description                                |
| ----- | ------------------------------------------ |
| npcid | The ID of the NPC                          |
| pause | Whether to pause (true) or unpause (false) |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("RecordedBot");
    NPC_Spawn(npcid);
    NPC_StartPlayback(npcid, "recording", true, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);

    // Pause after 5 seconds
    SetTimerEx("PauseBot", 5000, false, "i", npcid);

    return 1;
}

forward PauseBot(npcid);
public PauseBot(npcid)
{
    NPC_PausePlayback(npcid, true);
    printf("NPC %d playback paused", npcid);

    // Resume after 3 seconds
    SetTimerEx("ResumeBot", 3000, false, "i", npcid);
}

forward ResumeBot(npcid);
public ResumeBot(npcid)
{
    NPC_PausePlayback(npcid, false);
    printf("NPC %d playback resumed", npcid);
}
```

## Notes

- Only works when NPC is actively playing a recording
- Paused playback can be resumed by calling with pause = false
- Use NPC_IsPlaybackPaused to check current pause state

## Related Functions

- [NPC_IsPlaybackPaused](NPC_IsPlaybackPaused): Check if paused
- [NPC_StartPlayback](NPC_StartPlayback): Start playback
- [NPC_StopPlayback](NPC_StopPlayback): Stop playback
- [NPC_IsPlayingPlayback](NPC_IsPlayingPlayback): Check if playing

## Related Callbacks

_No specific callbacks are triggered by this function._
