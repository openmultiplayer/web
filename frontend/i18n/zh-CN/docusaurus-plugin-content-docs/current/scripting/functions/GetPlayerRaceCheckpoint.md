---
title: GetPlayerRaceCheckpoint
sidebar_label: GetPlayerRaceCheckpoint
description: 获取玩家当前竞速检查点的位置信息
tags: ["玩家", "检查点", "竞速检查点"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家当前竞速检查点的位置信息（包含中心点、下一个检查点位置及半径）

| 参数           | 说明                                                |
| -------------- | --------------------------------------------------- |
| playerid       | 需要获取检查点信息的玩家 ID                         |
| &Float:centreX | 存储中心点 X 坐标的浮点型变量（通过引用传递）       |
| &Float:centreY | 存储中心点 Y 坐标的浮点型变量（通过引用传递）       |
| &Float:centreZ | 存储中心点 Z 坐标的浮点型变量（通过引用传递）       |
| &Float:nextX   | 存储下一个检查点 X 坐标的浮点型变量（通过引用传递） |
| &Float:nextY   | 存储下一个检查点 Y 坐标的浮点型变量（通过引用传递） |
| &Float:nextZ   | 存储下一个检查点 Z 坐标的浮点型变量（通过引用传递） |
| &Float:radius  | 存储检查点半径的浮点型变量（通过引用传递）          |

## 返回值

此函数不返回具体值，数据通过参数传递

## 示例代码

```c
SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_NORMAL, 373.1631, 2502.4644, 16.4774, 269.8644, 2503.4963, 16.4774, 2.0);

new Float:centreX,
    Float:centreY,
    Float:centreZ,
    Float:nextX,
    Float:nextY,
    Float:nextZ,
    Float:radius;

GetPlayerRaceCheckpoint(playerid, centreX, centreY, centreZ, nextX, nextY, nextZ, radius);
```

## 相关函数

- [SetPlayerCheckpoint](SetPlayerCheckpoint): 为玩家设置普通检查点
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): 禁用玩家的普通检查点
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): 检测玩家是否处于普通检查点
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): 设置竞速检查点
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): 禁用竞速检查点
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): 检测玩家是否处于竞速检查点
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): 检测玩家是否有激活的竞速检查点

## 相关回调

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): 玩家进入普通检查点时触发
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): 玩家离开普通检查点时触发
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): 玩家进入竞速检查点时触发
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): 玩家离开竞速检查点时触发
