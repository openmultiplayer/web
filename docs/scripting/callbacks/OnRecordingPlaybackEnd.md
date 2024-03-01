---
title: OnRecordingPlaybackEnd
description: This callback is called when a recorded file being reproduced with StartRecordingPlayback has reached to its end.
tags: []
---

## Description

This callback is called when a recorded file being reproduced with NPC:[StartRecordingPlayback](../functions/StartRecordingPlayback) has reached to its end.

## Examples

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); //This would start the recorded file again once it finishes reproducing.
}
```

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [StartRecordingPlayback](../functions/StartRecordingPlayback):  Starts reproducing an already recorded .rec file. 
- [StopRecordingPlayback](../functions/StopRecordingPlayback): Stops reproducing a .rec file.
