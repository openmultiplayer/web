---
title: GetPlayerPoolSize
sidebar_label: GetPlayerPoolSize
description: 获取服务器当前使用的最大玩家ID
tags: ["玩家"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取服务器当前正在使用的最高玩家 ID。注意在 SA-MP 中该函数存在缺陷，即使没有玩家在线也会返回`0`。open.mp 已修正此问题，返回`-1`，但建议改用`MAX_PLAYERS`或`foreach`替代本函数。

## 示例代码

```c
FreezeAll()
{
    // 将返回值赋给变量j以避免每次循环都调用函数
    for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
    {
        TogglePlayerControllable(i, 0); // 冻结所有玩家操作
    }
}
```

## 相关函数

- [GetVehiclePoolSize](GetVehiclePoolSize): 获取服务器当前使用的最大车辆 ID
- [GetMaxPlayers](GetMaxPlayers): 获取服务器最大玩家容量
