---
title: GetPlayerCheckpoint
sidebar_label: GetPlayerCheckpoint
description: 获取玩家当前检查点的位置信息
tags: ["玩家", "检查点"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家当前激活的检查点位置及参数信息

| 参数名         | 说明                                            |
| -------------- | ----------------------------------------------- |
| playerid       | 需要获取检查点信息的玩家 ID                     |
| &Float:centreX | 存储检查点中心 X 坐标的浮点变量（通过引用传递） |
| &Float:centreY | 存储检查点中心 Y 坐标的浮点变量（通过引用传递） |
| &Float:centreZ | 存储检查点中心 Z 坐标的浮点变量（通过引用传递） |
| &Float:radius  | 存储检查点半径的浮点变量（通过引用传递）        |

## 返回值

本函数不直接返回值，数据将通过引用参数返回

## 示例代码

```c
SetPlayerCheckpoint(playerid, 408.9874, 2537.8059, 16.5455, 1.5);

new Float:centreX,
    Float:centreY,
    Float:centreZ,
    Float:radius;

GetPlayerCheckpoint(playerid, centreX, centreY, centreZ, radius);
```

## 相关函数

- [SetPlayerCheckpoint](SetPlayerCheckpoint): 为玩家创建普通检查点
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): 禁用玩家当前检查点
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): 检测玩家是否处于检查点内
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): 检测玩家是否激活检查点
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): 创建竞速检查点
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): 禁用竞速检查点
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): 检测玩家是否处于竞速检查点

## 相关回调

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): 当玩家进入检查点时触发
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): 当玩家离开检查点时触发
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): 当玩家进入竞速检查点时触发
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): 当玩家离开竞速检查点时触发
