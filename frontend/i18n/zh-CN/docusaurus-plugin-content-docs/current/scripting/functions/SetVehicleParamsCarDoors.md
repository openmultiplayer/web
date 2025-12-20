---
title: SetVehicleParamsCarDoors
sidebar_label: SetVehicleParamsCarDoors
description: 控制车辆车门的开关状态。
tags: ["车辆"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

控制车辆车门的开关状态。

| 参数            | 说明                                    |
| --------------- | --------------------------------------- |
| vehicleid       | 要设置车门状态的车辆 ID                 |
| bool:frontLeft  | 驾驶座车门状态（1 开启/0 关闭）         |
| bool:frontRight | 副驾驶车门状态（1 开启/0 关闭）         |
| bool:rearLeft   | 左后车门状态（若存在）（1 开启/0 关闭） |
| bool:rearRight  | 右后车门状态（若存在）（1 开启/0 关闭） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定的车辆不存在）

## 相关函数

- [GetVehicleParamsCarDoors](GetVehicleParamsCarDoors): 获取当前车辆车门状态
- [SetVehicleParamsCarWindows](SetVehicleParamsCarWindows): 控制车辆车窗开关状态
- [GetVehicleParamsCarWindows](GetVehicleParamsCarWindows): 获取当前车辆车窗状态
