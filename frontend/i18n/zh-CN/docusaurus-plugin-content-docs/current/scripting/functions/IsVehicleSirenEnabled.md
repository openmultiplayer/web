---
title: IsVehicleSirenEnabled
sidebar_label: IsVehicleSirenEnabled
description: 检测车辆警笛状态
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定车辆的警笛是否处于开启状态。

## 参数说明

| 参数名    | 说明            |
| --------- | --------------- |
| vehicleid | 要检测的车辆 ID |

## 返回值

**true** - 警笛开启

**false** - 警笛关闭

## 示例代码

```c
if (IsVehicleSirenEnabled(vehicleid))
{
    // 警笛已开启
}
else
{
    // 警笛已关闭
}
```

## 相关函数

- [`SetVehicleParamsSirenState`](SetVehicleParamsSirenState): 设置车辆警笛状态
- [`ToggleVehicleSirenEnabled`](ToggleVehicleSirenEnabled): 切换车辆警笛状态
