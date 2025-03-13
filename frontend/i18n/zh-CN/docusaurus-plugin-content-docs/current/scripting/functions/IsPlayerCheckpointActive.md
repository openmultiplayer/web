---
title: IsPlayerCheckpointActive
sidebar_label: IsPlayerCheckpointActive
description: 检查玩家当前是否显示检查点
tags: ["玩家", "检查点"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测玩家当前是否显示常规检查点。

| 参数     | 说明              |
| -------- | ----------------- |
| playerid | 需要检查的玩家 ID |

## 返回值

**false** - 未显示任何检查点  
**true** - 存在活动的检查点

## 示例

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerCheckpointActive(playerid))
    {
        // 执行检查点相关操作
    }
}
```

## 相关函数

- [SetPlayerCheckpoint](SetPlayerCheckpoint): 为玩家创建常规检查点
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): 检查玩家是否处于检查点范围内
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): 检查玩家当前是否显示竞速检查点
