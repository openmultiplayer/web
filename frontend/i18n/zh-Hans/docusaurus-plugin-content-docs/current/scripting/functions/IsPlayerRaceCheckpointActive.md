---
title: IsPlayerRaceCheckpointActive
sidebar_label: IsPlayerRaceCheckpointActive
description: 检测玩家当前是否显示竞速检查点。
tags: ["玩家", "检查点", "竞速检查点"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定玩家的竞速检查点是否处于激活可见状态。

| 参数名   | 说明            |
| -------- | --------------- |
| playerid | 要检测的玩家 ID |

## 返回值

当未显示竞速检查点时返回 **false**，否则返回 **true**

## 示例代码

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerRaceCheckpointActive(playerid))
    {
        // 执行相关逻辑
    }
}
```

## 相关函数

- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): 创建玩家专属竞速检查点
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): 检测玩家是否处于竞速检查点范围内
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): 检测玩家是否激活普通检查点
