---
title: DisablePlayerRaceCheckpoint
sidebar_label: DisablePlayerRaceCheckpoint
description: 禁用指定玩家已初始化的所有竞速检查点（同一时间只能存在一个）。
tags: ["玩家", "检查点", "竞速检查点"]
---

## 描述

禁用指定玩家已初始化的所有竞速检查点，因为同一时间只能存在一个。

| 参数     | 说明                      |
| -------- | ------------------------- |
| playerid | 要禁用竞速检查点的玩家 ID |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    DisablePlayerRaceCheckpoint(playerid); // 当玩家离开竞速检查点时禁用
    return 1;
}
```

## 相关函数

- [SetPlayerCheckpoint](SetPlayerCheckpoint): 为玩家创建检查点
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): 禁用玩家的常规检查点
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): 检查玩家是否处于检查点范围内
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): 为玩家创建竞速检查点
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): 检查玩家是否处于竞速检查点范围内
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): 检查玩家当前是否有可见竞速检查点

## 相关回调

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): 当玩家进入检查点时触发
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): 当玩家离开检查点时触发
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): 当玩家进入竞速检查点时触发
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): 当玩家离开竞速检查点时触发
