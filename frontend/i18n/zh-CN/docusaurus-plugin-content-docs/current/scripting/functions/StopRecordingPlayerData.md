---
title: StopRecordingPlayerData
sidebar_label: StopRecordingPlayerData
description: 停止指定玩家通过StartRecordingPlayerData开始的所有数据录制。
tags: ["玩家"]
---

## 描述

停止指定玩家通过[StartRecordingPlayerData](StartRecordingPlayerData)开始的所有数据录制。

| 参数名称 | 说明                          |
| -------- | ----------------------------- |
| playerid | 需要停止数据录制的目标玩家 ID |

## 返回值

此函数不返回特定值。

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/stoprecording", cmdtext))
    {
        StopRecordingPlayerData(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "你的录制文件已保存至scriptfiles目录！");
        return 1;
    }
}
```

## 相关函数

- [StartRecordingPlayerData](StartRecordingPlayerData): 开始录制玩家数据
