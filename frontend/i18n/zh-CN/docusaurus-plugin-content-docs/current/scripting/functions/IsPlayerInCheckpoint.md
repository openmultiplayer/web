---
title: IsPlayerInCheckpoint
sidebar_label: IsPlayerInCheckpoint
description: 检测玩家是否处于检查点内，可用于房产或传送点等场景
tags: ["玩家", "检查点"]
---

## 描述

检测玩家当前是否处于检查点范围内，该功能常用于房产系统或传送点等交互场景

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要检测的玩家 ID |

## 返回值

**false** - 玩家未处于检查点内

**true** - 玩家正处于检查点内

## 示例代码

```c
if (IsPlayerInCheckpoint(playerid))
{
    SetPlayerHealth(playerid, 100.0);
}
```

## 相关函数

- [SetPlayerCheckpoint](SetPlayerCheckpoint): 为玩家创建检查点
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): 检测玩家当前是否显示检查点
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): 禁用玩家当前检查点
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): 为玩家创建竞速检查点
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): 禁用玩家当前竞速检查点
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): 检测玩家是否处于竞速检查点

## 相关回调

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): 当玩家进入检查点时触发
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): 当玩家离开检查点时触发
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): 当玩家进入竞速检查点时触发
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): 当玩家离开竞速检查点时触发
