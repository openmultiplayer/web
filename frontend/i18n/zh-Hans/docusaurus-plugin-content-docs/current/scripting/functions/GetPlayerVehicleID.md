---
title: GetPlayerVehicleID
sidebar_label: GetPlayerVehicleID
description: 获取玩家当前所在的车辆ID
tags: ["玩家", "车辆"]
---

## 描述

获取玩家当前乘坐的车辆 ID

**注意：** 并非车辆的模型 ID，获取模型 ID 请参考[GetVehicleModel](GetVehicleModel)

| 名称     | 说明                      |
| -------- | ------------------------- |
| playerid | 需要获取车辆信息的玩家 ID |

## 返回值

车辆 ID，若不在车辆中则返回**0**

## 示例代码

```c
// 当玩家在车辆中时添加10倍氮气加速（可通过指令触发）
new vehicleId = GetPlayerVehicleID(playerid);
if (vehicleId != 0)
{
    AddVehicleComponent(vehicleId, 1010);
}
```

## 相关函数

- [IsPlayerInVehicle](IsPlayerInVehicle): 检测玩家是否处于特定车辆
- [IsPlayerInAnyVehicle](IsPlayerInAnyVehicle): 检测玩家是否处于任何车辆
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): 获取玩家所在车辆座位号
- [GetVehicleModel](GetVehicleModel): 获取车辆的模型 ID
