---
title: AllowPlayerWeapons
sidebar_label: AllowPlayerWeapons
description: 启用/禁用玩家的武器使用权限
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

控制玩家是否可以使用武器。

| 参数名     | 说明                                  |
| ---------- | ------------------------------------- |
| playerid   | 需要控制武器权限的玩家 ID             |
| bool:allow | true 允许使用武器，false 禁止使用武器 |

## 返回值

本函数始终返回 true。

## 示例

```c
public OnPlayerConnect(playerid)
{
    AllowPlayerWeapons(playerid, true); // 允许该玩家使用武器
    return 1;
}
```

## 相关函数

- [ArePlayerWeaponsAllowed](ArePlayerWeaponsAllowed): 检测玩家是否允许使用武器
