---
title: GetVehicles
sidebar_label: GetVehicles
description: 获取服务器上已创建车辆的ID数组。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取服务器上所有已生成车辆的 ID 数组变量。

| 参数名     | 说明                                   |
| ---------- | -------------------------------------- |
| vehicles[] | 用于存储车辆 ID 的数组（通过引用传递） |
| size       | 目标数组的容量大小                     |

## 返回值

返回数组中实际存储的车辆数量。

## 示例

```c
new vehicles[MAX_VEHICLES];

GetVehicles(vehicles, sizeof(vehicles));
// `vehicles` 数组现在包含已创建的车辆ID。{ 0, 1, 2, 3, 4, ... }
```

## 相关函数

- [GetPlayers](GetPlayers): 获取当前在线玩家的 ID 数组
- [GetActors](GetActors): 获取服务器上已创建角色的 ID 数组
