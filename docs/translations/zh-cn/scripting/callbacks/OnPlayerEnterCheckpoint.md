---
title: OnPlayerEnterCheckpoint
description: 当玩家进入为该玩家设置的检查点时，该回调被调用。
tags: ["player", "checkpoint"]
---

## 描述

当玩家进入为该玩家设置的检查点时，此回调将被调用。

| 参数名   | 描述               |
| -------- | ------------------ |
| playerid | 进入检查点的玩家。 |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
// 在这个案例中，玩家出生时为玩家创建了一个检查点
public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    return 1;
}

// 当该玩家进入该检查点时，创建一个车辆并禁用该检查点
public OnPlayerEnterCheckpoint(playerid)
{
    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## 要点

<TipNPCCallbacksCN />

## 相关函数

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): 为玩家创造一个检查点,。
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): 禁用玩家当前的检查点。
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): 检查玩家是否处于检查点。
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): 为玩家创造一个比赛检查点。
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): 禁用玩家当前的比赛检查点。
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): 检查玩家是否处于比赛检查点。
