---
title: OnNPCPlaybackStart
sidebar_label: OnNPCPlaybackStart
description: This callback is called when an NPC starts playback of a recorded file.
tags: ["npc", "playback", "recording"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when an NPC starts playback of a recorded file.

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| npcid    | The ID of the NPC that started playback       |
| recordid | The ID of the record that started playing     |

## Examples

```c
public OnNPCPlaybackStart(npcid, recordid)
{
    printf("NPC %d started playing record %d", npcid, recordid);
    
    // Set properties during playback
    NPC_SetHealth(npcid, 100.0);
    NPC_SetArmour(npcid, 50.0);
    
    return true;
}
```

## Notes

- This callback is called immediately when `NPC_StartPlayback` is successfully executed
- The `recordid` corresponds to the loaded record file
- The NPC will follow the recorded movements from the file

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_StartPlayback](NPC_StartPlayback): Start NPC playback of a recording
- [NPC_StopPlayback](NPC_StopPlayback): Stop NPC playback
- [NPC_PausePlayback](NPC_PausePlayback): Pause/unpause NPC playback
- [NPC_IsPlayingPlayback](NPC_IsPlayingPlayback): Check if NPC is playing a recording

## Related Callbacks

- [OnNPCPlaybackEnd](OnNPCPlaybackEnd): Called when NPC finishes playing a recording
