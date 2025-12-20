---
title: GetVehicleParamsCarDoors
sidebar_label: GetVehicleParamsCarDoors
description: 获取车辆车门的当前状态。
tags: ["车辆"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取车辆各个车门的当前开启状态

| 参数             | 说明                                               |
| ---------------- | -------------------------------------------------- |
| vehicleid        | 目标车辆 ID                                        |
| &bool:frontLeft  | 用于存储驾驶员侧车门状态的整型变量（按引用传递）   |
| &bool:frontRight | 用于存储副驾驶侧车门状态的整型变量（按引用传递）   |
| &bool:rearLeft   | 用于存储左后车门状态的整型变量（若车辆存在该车门） |
| &bool:rearRight  | 用于存储右后车门状态的整型变量（若车辆存在该车门） |

## 返回值

车辆的车门状态将被存储到指定的变量中。

## 注意事项

:::tip

各变量返回值对应状态：

**-1**: 未设置车门状态

**1**: 开启状态

**0**: 关闭状态

:::

## 相关函数

- [SetVehicleParamsCarDoors](SetVehicleParamsCarDoors): 控制车辆车门的开关状态
- [SetVehicleParamsCarWindows](SetVehicleParamsCarWindows): 控制车辆车窗的开关状态
- [GetVehicleParamsCarWindows](GetVehicleParamsCarWindows): 获取车辆车窗的当前状态
