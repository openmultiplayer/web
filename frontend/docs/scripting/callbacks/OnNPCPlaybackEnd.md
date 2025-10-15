---
title: OnNPCPlaybackEnd
sidebar_label: OnNPCPlaybackEnd
description: This callback is called when an NPC finishes playback of a recorded file.
tags: ["npc", "playback", "recording"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when an NPC finishes playback of a recorded file.

| Name     | Description                                      |
| -------- | ------------------------------------------------ |
| npcid    | The ID of the NPC that finished playback        |
| recordid | The ID of the record that finished playing      |

## Examples

```c
public OnNPCPlaybackEnd(npcid, recordid)
{
    printf("NPC %d finished playing record %d", npcid, recordid);
    
    // Start another recording
    NPC_StartPlayback(npcid, "another_recording", true);
    
    return true;
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
