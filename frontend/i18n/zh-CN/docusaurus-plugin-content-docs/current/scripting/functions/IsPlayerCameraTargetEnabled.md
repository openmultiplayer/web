---
title: IsPlayerCameraTargetEnabled
sidebar_label: IsPlayerCameraTargetEnabled
description: 检查玩家视角目标功能是否启用
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测玩家视角目标功能是否处于启用状态。

| 参数     | 说明    |
| -------- | ------- |
| playerid | 玩家 ID |

## 返回值

**true** - 功能已启用  
**false** - 功能已禁用

## 示例

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerCameraTargetEnabled(playerid))
    {
        // 执行相关操作
    }

    return 1;
}
```

## 相关函数

- [EnablePlayerCameraTarget](EnablePlayerCameraTarget): 切换玩家视角目标功能开关
