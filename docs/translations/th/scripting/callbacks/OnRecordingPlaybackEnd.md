---
title: OnRecordingPlaybackEnd
description: This callback is called when a recorded file being reproduced with StartRecordingPlayback has reached to its end.
tags: []
---

:::warning

This NPC callback was added in SA-MP 0.3a and will not work in earlier versions!

:::

## คำอธิบาย

This callback is called when a recorded file being reproduced with StartRecordingPlayback has reached to its end.

| Name | Description |
| ---- | ----------- |


## ตัวอย่าง

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); //This would start the recorded file again once it finishes reproducing.
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- StartRecordingPlayback: Starts reproducing an already recorded .rec file.
- StopRecordingPlayback: Stops reproducing a .rec file.
