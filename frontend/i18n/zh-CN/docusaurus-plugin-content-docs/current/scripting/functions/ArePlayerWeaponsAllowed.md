---
title: ArePlayerWeaponsAllowed
sidebar_label: ArePlayerWeaponsAllowed
description: 检测玩家是否具有武器使用权限
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定玩家是否被允许使用武器。

| 参数     | 说明              |
| -------- | ----------------- |
| playerid | 需要检测的玩家 ID |

## 返回值

**true** - 允许使用武器

**false** - 禁止使用武器

## 示例

```c
public OnPlayerSpawn(playerid)
{
    if (ArePlayerWeaponsAllowed(playerid))
    {
        // 执行武器相关操作
    }

    return 1;
}
```

## 相关函数

- [AllowPlayerWeapons](AllowPlayerWeapons): 控制玩家武器权限开关
