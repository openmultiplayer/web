---
title: IsPlayerControllable
sidebar_label: IsPlayerControllable
description: 检查玩家是否可被控制
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测玩家角色是否处于可控制状态。

| 参数     | 说明    |
| -------- | ------- |
| playerid | 玩家 ID |

## 返回值

**true** - 玩家可控制  
**false** - 玩家不可控制（如被冻结状态）

## 示例

```c
public OnPlayerSpawn(playerid)
{
    // 如果玩家被冻结则解除冻结
    if (!IsPlayerControllable(playerid))
    {
        TogglePlayerControllable(playerid, true);
    }

    return 1;
}
```

## 相关函数

- [TogglePlayerControllable](TogglePlayerControllable): 切换玩家控制状态（同时禁用视角移动）
