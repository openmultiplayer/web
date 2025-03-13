---
title: IsPlayerInRaceCheckpoint
sidebar_label: IsPlayerInRaceCheckpoint
description: 检测玩家是否处于当前设置的竞速检查点内
tags: ["玩家", "检查点", "竞速检查点"]
---

## 描述

检测玩家是否处于通过 SetPlayerRaceCheckpoint 设置的竞速检查点范围内

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要检测的玩家 ID |

## 返回值

**true** - 玩家处于竞速检查点内

**false** - 玩家未处于竞速检查点内

## 示例代码

```c
if (IsPlayerInRaceCheckpoint(playerid))
{
    SetPlayerHealth(playerid, 100.0);
}
```

## 相关函数

- [SetPlayerCheckpoint](SetPlayerCheckpoint): 为玩家创建常规检查点
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): 检测玩家是否显示竞速检查点
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): 禁用玩家当前常规检查点
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): 检测玩家是否处于常规检查点
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): 为玩家创建竞速检查点
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): 禁用玩家当前竞速检查点

## 相关回调

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): 当玩家进入常规检查点时触发
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): 当玩家离开常规检查点时触发
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): 当玩家进入竞速检查点时触发
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): 当玩家离开竞速检查点时触发
