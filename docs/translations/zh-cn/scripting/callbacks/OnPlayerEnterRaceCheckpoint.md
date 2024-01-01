---
title: OnPlayerEnterRaceCheckpoint
description: 当玩家进入一个比赛检查点时，这个回调函数被调用。
tags: ["player", "checkpoint", "racecheckpoint"]
---

## 描述

当玩家进入一个比赛检查点时，这个回调函数被调用。

| 参数名   | 描述                        |
| -------- | --------------------------- |
| playerid | 进入比赛检查点的玩家的 ID。 |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("玩家 %d 进入了一个比赛检查点!", playerid);
    return 1;
}
```

## 要点

<TipNPCCallbacksCN />

## 相关函数

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): 为玩家创造一个检查点。
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): 禁用玩家当前的检查点。
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): 检查玩家是否处于检查点。
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): 为玩家创造一个比赛检查点。
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): 禁用玩家当前的比赛检查点。
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): 检查玩家是否处于比赛检查点。
