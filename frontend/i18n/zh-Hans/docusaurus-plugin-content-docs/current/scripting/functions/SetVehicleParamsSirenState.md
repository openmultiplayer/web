---
title: SetVehicleParamsSirenState
sidebar_label: SetVehicleParamsSirenState
description: 控制车辆警报器的开启与关闭状态。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

控制车辆警报器的开启与关闭状态。

## 参数

| 参数         | 说明                                            |
| ------------ | ----------------------------------------------- |
| vehicleid    | 要操作的车辆 ID                                 |
| bool:enabled | **true**表示开启警报器，**false**表示关闭警报器 |

## 示例

```c
SetVehicleParamsSirenState(vehicleid, true);
```

## 相关函数

- [GetVehicleParamsSirenState](GetVehicleParamsSirenState): 获取车辆警报器状态
- [GetVehicleSirenState](GetVehicleSirenState): 获取车辆警报器激活状态
- [GetPlayerSirenState](GetPlayerSirenState): 获取玩家车辆警报器状态
