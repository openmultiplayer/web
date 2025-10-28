---
title: SetPlayerRaceCheckpoint
sidebar_label: SetPlayerRaceCheckpoint
description: 创建竞速检查点。
tags: ["玩家", "检查点", "竞速检查点"]
---

## 描述

创建竞速检查点。当玩家进入时，将触发 OnPlayerEnterRaceCheckpoint 回调。

| 参数          | 说明                                                 |
| ------------- | ---------------------------------------------------- |
| playerid      | 要设置检查点的玩家 ID                                |
| CP_TYPE:type  | [竞速检查点类型](../resources/race-checkpoint-types) |
| Float:centreX | X 坐标                                               |
| Float:centreY | Y 坐标                                               |
| Float:centreZ | Z 坐标                                               |
| Float:nextX   | 箭头指向的下个点 X 坐标                              |
| Float:nextY   | 箭头指向的下个点 Y 坐标                              |
| Float:nextZ   | 箭头指向的下个点 Z 坐标                              |
| Float:radius  | 检查点的大小（直径）                                 |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。指定的玩家不存在。

## 示例

```c
SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_NORMAL, 644.3091, 1767.0223, 4.9970, 650.6734, 1812.0367, 4.9970, 3.0);
```

另一个示例：

```c
// 来自Yagu的竞速滤镜脚本，版权所有：Yagu
public SetRaceCheckpoint(playerid, Airrace, target, next)
{
    if (next == -1 && Airrace == 0)
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_FINISH, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], 0.0, 0.0, 0.0, CPsize);
    }
    else if (next == -1 && Airrace == 1)
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_AIR_FINISH, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], 0.0, 0.0, 0.0, CPsize);
    }
    else if (Airrace == 1)
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_AIR_NORMAL, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], RaceCheckpoints[next][0], RaceCheckpoints[next][1], RaceCheckpoints[next][2], CPsize);
    }
    else
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_NORMAL, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], RaceCheckpoints[next][0], RaceCheckpoints[next][1], RaceCheckpoints[next][2], CPsize);
    }
}
```

## 注意

:::warning

竞速检查点是异步的，同一时间只能显示一个。要实现"流加载"效果（仅在玩家接近时显示），请使用竞速检查点流加载器。

:::

## 相关函数

- [SetPlayerCheckpoint](SetPlayerCheckpoint): 为玩家创建普通检查点
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): 禁用玩家的当前检查点
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): 检测玩家是否处于检查点内
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): 禁用玩家的当前竞速检查点
- [GetPlayerRaceCheckpoint](GetPlayerRaceCheckpoint): 获取当前竞速检查点位置
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): 检测玩家是否处于竞速检查点内
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): 检测玩家当前是否有可见的竞速检查点

## 相关回调

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): 玩家进入检查点时触发
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): 玩家离开检查点时触发
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): 玩家进入竞速检查点时触发
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): 玩家离开竞速检查点时触发

## 相关资源

- [竞速检查点类型](../resources/race-checkpoint-types)
