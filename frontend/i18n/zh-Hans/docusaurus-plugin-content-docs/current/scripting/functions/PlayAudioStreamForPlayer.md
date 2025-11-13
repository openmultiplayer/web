---
title: PlayAudioStreamForPlayer
sidebar_label: PlayAudioStreamForPlayer
description: 为玩家播放音频流
tags: ["玩家"]
---

## 描述

为指定玩家播放音频流，支持常规音频文件格式（如 MP3）

| 参数           | 说明                                                              |
| -------------- | ----------------------------------------------------------------- |
| playerid       | 目标玩家 ID                                                       |
| const url[]    | 音频流 URL，支持格式：mp3/ogg/vorbis，.pls 播放列表文件可自动解析 |
| Float:posX     | 音源 X 坐标（默认 0.0，需启用位置参数）                           |
| Float:posY     | 音源 Y 坐标（默认 0.0，需启用位置参数）                           |
| Float:posZ     | 音源 Z 坐标（默认 0.0，需启用位置参数）                           |
| Float:distance | 音频传播距离（需启用位置参数）                                    |
| bool:usepos    | 是否启用空间音效（默认关闭）                                      |

## 返回值

**true** - 操作成功执行

**false** - 执行失败（玩家不存在）

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/radio", cmdtext, true) == 0)
    {
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls");
        return 1;
    }
    if (strcmp("/radiopos", cmdtext, true) == 0)
    {
        new Float:x, Float:y, Float:z, Float:distance = 5.0;
        GetPlayerPos(playerid, x, y, z);
        // 在玩家当前位置创建空间化音频
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls", x, y, z, distance, true);
        return 1;
    }
    return 0;
}
```

## 相关函数

- [StopAudioStreamForPlayer](StopAudioStreamForPlayer): 停止音频流播放
- [PlayerPlaySound](PlayerPlaySound): 为玩家播放音效
