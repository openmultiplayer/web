---
title: GetVehiclePoolSize
sidebar_label: GetVehiclePoolSize
description: 获取服务器当前使用的最大车辆ID。
tags: ["车辆"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取服务器当前已使用的最大车辆 ID 编号。注意在 SA-MP 中此函数存在缺陷，即使没有车辆时也会返回`0`。open.mp 已修正此问题，无车辆时返回`-1`，但建议改用`MAX_VEHICLES`或`foreach`替代方案。

## 示例

```c
RepairAllVehicles()
{
    // 车辆ID从1开始计数
    for(new i = 1, j = GetVehiclePoolSize(); i <= j; i++)
    {
        RepairVehicle(i);
    }
}
```

## 相关函数

- [GetPlayerPoolSize](GetPlayerPoolSize): 获取当前连接服务器的最大玩家 ID
