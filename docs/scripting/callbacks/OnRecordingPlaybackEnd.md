---
id: OnRecordingPlaybackEnd
title: OnRecordingPlaybackEnd
description: This callback is called when a recorded file being reproduced with NPCStartRecordingPlayback has reached to its end.
tags: []
---

:::warning

This NPC callback was added in SA-MP 0.3a and will not work in earlier versions!

:::

## Description

This callback is called when a recorded file being reproduced with NPC:StartRecordingPlayback has reached to its end.

## Examples

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); //This would start the recorded file again once it finishes reproducing.
}
```

## Related Functions

- NPC:StartRecordingPlayback: Starts reproducing an already recorded .rec file.
- NPC:StopRecordingPlayback: Stops reproducing a .rec file.
