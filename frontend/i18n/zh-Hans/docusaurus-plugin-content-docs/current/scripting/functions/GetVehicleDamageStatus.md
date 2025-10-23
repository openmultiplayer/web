---
title: GetVehicleDamageStatus
sidebar_label: GetVehicleDamageStatus
description: 获取车辆的损坏状态信息
tags: ["车辆"]
---

:::tip

有关处理车辆损坏值的实用函数，请参阅[此处](../resources/damagestatus)。

:::

## 描述

获取车辆的损坏状态信息

| 参数名                      | 说明                                   |
| --------------------------- | -------------------------------------- |
| vehicleid                   | 要获取损坏状态的车辆 ID                |
| VEHICLE_PANEL_STATUS:panels | 存储面板损坏数据的变量（通过引用传递） |
| VEHICLE_DOOR_STATUS:doors   | 存储车门损坏数据的变量（通过引用传递） |
| VEHICLE_LIGHT_STATUS:lights | 存储车灯损坏数据的变量（通过引用传递） |
| VEHICLE_TYRE_STATUS:tyres   | 存储轮胎损坏数据的变量（通过引用传递） |

## 返回值

**1** - 函数执行成功

**0** - 函数执行失败（指定车辆不存在）

## 示例

```c
new
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TYRE_STATUS:tyres;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);
printf("车辆损坏状态: [面板]: %d - [车门]: %d - [车灯]: %d - [轮胎]: %d", panels, doors, lights, tyres);
```

## 相关函数

- [UpdateVehicleDamageStatus](UpdateVehicleDamageStatus): 更新车辆损坏状态
- [SetVehicleHealth](SetVehicleHealth): 设置车辆健康值
- [GetVehicleHealth](GetVehicleHealth): 获取车辆健康值
- [RepairVehicle](RepairVehicle): 完全修复车辆

## 相关回调

- [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate): 当车辆损坏状态变化时触发

## 相关资源

- [损坏状态处理](../resources/damagestatus)
- [车辆面板状态](../resources/vehicle-panel-status)
- [车辆车门状态](../resources/vehicle-door-status)
- [车辆灯光状态](../resources/vehicle-light-status)
- [车辆轮胎状态](../resources/vehicle-tire-status)
