---
title: DisablePlayerCheckpoint
sidebar_label: DisablePlayerCheckpoint
description: 禁用（隐藏/销毁）玩家设置的检查点。
tags: ["玩家", "检查点"]
---

## 描述

禁用（隐藏/销毁）玩家设置的检查点。每个玩家同时只能拥有一个检查点，设置新检查点时会自动覆盖旧检查点。

| 名称     | 描述                  |
| -------- | --------------------- |
| playerid | 要禁用检查点的玩家 ID |

## 返回值

**true** - 函数执行成功（当玩家未设置检查点时也会返回成功）

**false** - 函数执行失败（玩家未连接）

## 示例

```c
public OnPlayerEnterCheckpoint(playerid)
{
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## 相关函数

- [SetPlayerCheckpoint](SetPlayerCheckpoint): 为玩家创建检查点
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): 检查玩家是否处于检查点范围内
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): 检查玩家当前是否有可见检查点
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): 为玩家创建竞速检查点
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): 禁用玩家的竞速检查点
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): 检查玩家是否处于竞速检查点范围内

## 相关回调

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): 当玩家进入检查点时调用
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): 当玩家离开检查点时调用
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): 当玩家离开竞速检查点时调用
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): 当玩家进入竞速检查点时调用
