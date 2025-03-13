---
title: UpdateVehicleDamageStatus
sidebar_label: UpdateVehicleDamageStatus
description: 设置车辆的各类视觉损坏状态，包括爆胎、车灯破损和车身面板损伤。
tags: ["车辆"]
---

:::tip

关于处理车辆损坏值的实用函数，请参阅[损坏状态](../resources/damagestatus)。

:::

## 描述

设置车辆的各类视觉损坏状态，包括爆胎、车灯破损和车身面板损伤。

| 名称                        | 描述                      |
| --------------------------- | ------------------------- |
| vehicleid                   | 需要设置损坏状态的车辆 ID |
| VEHICLE_PANEL_STATUS:panels | 包含面板损坏状态的位集合  |
| VEHICLE_DOOR_STATUS:doors   | 包含车门损坏状态的位集合  |
| VEHICLE_LIGHT_STATUS:lights | 包含车灯损坏状态的位集合  |
| VEHICLE_TIRE_STATUS:tires   | 包含轮胎损坏状态的位集合  |

## 返回值

此函数不返回特定值。

## 示例

```c
new
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TIRE_STATUS:tires;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

tires = VEHICLE_TIRE_STATUS:15; // 将轮胎状态设为15会使所有轮胎爆裂

// 或使用位运算方式：
tires = (VEHICLE_TIRE_STATUS_FRONT_LEFT_POPPED | VEHICLE_TIRE_STATUS_FRONT_RIGHT_POPPED | VEHICLE_TIRE_STATUS_REAR_LEFT_POPPED | VEHICLE_TIRE_STATUS_REAR_RIGHT_POPPED);

UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
```

## 相关函数

- [SetVehicleHealth](SetVehicleHealth): 设置车辆耐久值
- [GetVehicleHealth](GetVehicleHealth): 获取车辆耐久值
- [RepairVehicle](RepairVehicle): 完全修复车辆
- [GetVehicleDamageStatus](GetVehicleDamageStatus): 获取车辆各部件损坏状态

## 相关回调

- [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate): 车辆损坏状态变化时触发

## 相关资源

- [损坏状态](../resources/damagestatus)
- [车辆面板状态](../resources/vehicle-panel-status)
- [车辆车门状态](../resources/vehicle-door-status)
- [车辆车灯状态](../resources/vehicle-light-status)
- [车辆轮胎状态](../resources/vehicle-tire-status)
