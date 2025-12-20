---
title: StartRecordingPlayerData
sidebar_label: StartRecordingPlayerData
description: 开始将玩家移动轨迹录制到文件，该文件后续可供NPC回放使用。
tags: ["玩家"]
---

## 描述

开始将玩家移动轨迹录制到文件，该文件后续可供 NPC 回放使用。

| 参数                             | 说明                                                                                                                                |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| playerid                         | 待录制的玩家 ID                                                                                                                     |
| PLAYER_RECORDING_TYPE:recordType | [录制类型](../resources/recordtypes)                                                                                                |
| const recordFile[]               | 存储录制数据的文件名。文件将保存至 scriptfiles 目录（自动添加.rec 扩展名），使用时需将文件移动至 npcmodes/recordings 目录进行回放。 |

## 返回值

此函数不返回特定值。

## 示例代码

```c
if (!strcmp("/recordme", cmdtext))
{
    if (GetPlayerState(playerid) == PLAYER_STATE_ONFOOT)
    {
        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_ONFOOT, "MyFile");
    }
    else if (GetPlayerState(playerid) == PLAYER_STATE_DRIVER)
    {
        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_DRIVER, "MyFile");
    }
    SendClientMessage(playerid, 0xFFFFFFFF, "你的所有移动轨迹正在被录制！");
    return 1;
}
```

## 相关函数

- [StopRecordingPlayerData](StopRecordingPlayerData): 停止录制玩家数据

## 相关资源

- [录制类型](../resources/recordtypes)
