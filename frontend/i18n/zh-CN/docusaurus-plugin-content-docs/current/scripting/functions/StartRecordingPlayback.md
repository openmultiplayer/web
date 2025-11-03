---
title: StartRecordingPlayback
sidebar_label: StartRecordingPlayback
description: 加载并运行存储在npcmodes/recordings目录下的.rec文件。这些录制文件允许NPC执行特定动作，可通过手动录制生成。更多信息请参考相关函数。
tags: []
---

## 描述

加载并运行存储在 npcmodes/recordings 目录下的.rec 文件。这些录制文件允许 NPC 执行特定动作，可通过手动录制生成。更多信息请参考相关函数。

| 名称         | 说明                                         |
| ------------ | -------------------------------------------- |
| playbacktype | 要加载的录制[类型](../resources/recordtypes) |
| recordname[] | 要加载的文件名（无需包含.rec 扩展名）        |

## 示例

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "at400_lv_to_sf_x1");
}
```

## 相关函数

- [StopRecordingPlayback](StopRecordingPlayback): 停止回放.rec 文件
