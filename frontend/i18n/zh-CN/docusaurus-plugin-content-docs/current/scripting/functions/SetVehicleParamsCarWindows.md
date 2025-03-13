---
title: SetVehicleParamsCarWindows
sidebar_label: SetVehicleParamsCarWindows
description: 允许开关车辆的车窗。
tags: ["车辆"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

控制车辆车窗的开关状态。

| 名称            | 说明                                   |
| --------------- | -------------------------------------- |
| vehicleid       | 要设置车窗的车辆 ID                    |
| bool:frontLeft  | 驾驶座车窗状态（0=开启，1=关闭）       |
| bool:frontRight | 副驾驶座车窗状态（0=开启，1=关闭）     |
| bool:rearLeft   | 左后车窗状态（若存在，0=开启，1=关闭） |
| bool:rearRight  | 右后车窗状态（若存在，0=开启，1=关闭） |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。车辆不存在。

## 相关函数

- [SetVehicleParamsCarDoors](SetVehicleParamsCarDoors): 控制车辆车门开关
- [GetVehicleParamsCarDoors](GetVehicleParamsCarDoors): 获取车辆车门状态
- [GetVehicleParamsCarWindows](GetVehicleParamsCarWindows): 获取车辆车窗状态
