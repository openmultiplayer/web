---
title: OnRecordingPlaybackEnd
sidebar_label: OnRecordingPlaybackEnd
description: 当使用StartRecordingPlayback播放的录制文件结束时触发该回调函数。
tags: []
---

## 描述

当使用 [StartRecordingPlayback](../functions/StartRecordingPlayback) 播放的.rec文件到达结尾时触发该回调函数。

## 示例

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); // 当回放结束时将重新开始播放录制
}
```

## 相关函数

以下函数可能与该回调存在关联：

- [StartRecordingPlayback](../functions/StartRecordingPlayback): 开始回放录制文件
- [StopRecordingPlayback](../functions/StopRecordingPlayback): 停止回放录制文件
