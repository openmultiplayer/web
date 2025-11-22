---
title: StopRecordingPlayback
sidebar_label: StopRecordingPlayback
description: 停止NPC当前正在运行的.rec文件，使其保持空闲状态直到接收到其他指令。
tags: []
---

## 描述

停止 NPC 当前正在运行的.rec 文件，使其保持空闲状态直到接收到其他指令。

## 示例代码

```c
public OnNPCExitVehicle(vehicleid, seatid)
{
    StopRecordingPlayback();
}
```

## 相关函数

- [StartRecordingPlayback](StartRecordingPlayback): 开始播放.rec 文件
