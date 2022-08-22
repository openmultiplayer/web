---
title: OnPlayerLeaveCheckpoint
description: 当玩家离开SetPlayerCheckpoint函数为其设置的检查点时，会调用此回调。
tags: ["player", "checkpoint"]
---

## 描述

当玩家离开 SetPlayerCheckpoint 函数为其设置的检查点时，会调用此回调。

一次只能设置一个检查点。

| 参数名   | 描述                    |
| -------- | ----------------------- |
| playerid | 离开检查点的玩家的 ID。 |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerLeaveCheckpoint(playerid)
{
    printf("玩家 %i 离开了一个检查点!", playerid);
    return 1;
}
```

## 要点

<TipNPCCallbacksCN />

## 相关函数

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): 为玩家创建一个检查点。
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): 禁用玩家的当前检查点。
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): 检查玩家是否在检查站。
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): 为玩家创建一个比赛检查点。
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): 禁用玩家当前的比赛检查点。
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): 检查某位玩家是否在比赛检查点。
