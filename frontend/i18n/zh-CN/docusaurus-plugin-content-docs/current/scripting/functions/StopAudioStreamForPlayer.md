---
title: 停止玩家音频流
sidebar_label: StopAudioStreamForPlayer
description: 停止玩家当前正在播放的音频流。
tags: ["玩家"]
---

## 描述

停止玩家当前正在播放的音频流。

## 参数

| 参数     | 说明                    |
| -------- | ----------------------- |
| playerid | 要停止音频流的玩家 ID。 |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    // 当玩家离开车辆时
    if (oldstate == PLAYER_STATE_DRIVER || oldstate == PLAYER_STATE_PASSENGER)
    {
        StopAudioStreamForPlayer(playerid); // 停止音频流
    }
    return 1;
}
```

## 相关函数

- [PlayAudioStreamForPlayer](PlayAudioStreamForPlayer): 为玩家播放音频流
- [PlayerPlaySound](PlayerPlaySound): 为玩家播放音效
