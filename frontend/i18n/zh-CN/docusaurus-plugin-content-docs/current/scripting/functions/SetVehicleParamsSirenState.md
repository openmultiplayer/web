---
title: SetVehicleParamsSirenState
sidebar_label: SetVehicleParamsSirenState
description: 控制车辆警笛的开启与关闭状态。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

控制车辆警笛的开启与关闭状态。

## 参数

| 参数名       | 描述                                        |
| ------------ | ------------------------------------------- |
| vehicleid    | 要操作的车辆 ID                             |
| bool:enabled | **true**表示开启警笛，**false**表示关闭警笛 |

## 示例

```c
SetVehicleParamsSirenState(vehicleid, true);
```

## 相关函数

- [GetVehicleParamsSirenState](GetVehicleParamsSirenState): 获取车辆警笛状态
- [GetVehicleSirenState](GetVehicleSirenState): 获取车辆警笛激活状态
- [GetPlayerSirenState](GetPlayerSirenState): 获取玩家车辆警笛状态
