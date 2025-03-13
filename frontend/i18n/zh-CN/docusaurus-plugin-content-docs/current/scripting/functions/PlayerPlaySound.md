---
title: PlayerPlaySound
sidebar_label: PlayerPlaySound
description: 为指定玩家播放特定音效
tags: ["玩家"]
---

## 描述

用于为特定玩家播放指定音效

| 参数     | 说明                                      |
| -------- | ----------------------------------------- |
| playerid | 目标玩家 ID                               |
| soundid  | 要播放的[音效 ID](../resources/sound-ids) |
| Float:x  | 音源 X 坐标（0.0 表示无位置音效）         |
| Float:y  | 音源 Y 坐标（0.0 表示无位置音效）         |
| Float:z  | 音源 Z 坐标（0.0 表示无位置音效）         |

## 返回值

**true** - 操作成功执行

**false** - 执行失败（玩家未连接）

## 示例

```c
// 播放拳击音效（适用于/slap等命令），因音源位于玩家上方10米处，音量会较小
PlayerPlaySound(playerid, 1130, 0.0, 0.0, 10.0);
```

## 注意事项

:::tip

仅在需要空间音效时使用坐标参数，若只需普通音效请将坐标全部设为 0.0

:::

## 相关函数

- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): 为玩家播放犯罪报告
- [PlayAudioStreamForPlayer](PlayAudioStreamForPlayer): 为玩家播放音频流
- [StopAudioStreamForPlayer](StopAudioStreamForPlayer): 停止当前音频流

## 相关资源

- [音效 ID 对照表](../resources/sound-ids)
