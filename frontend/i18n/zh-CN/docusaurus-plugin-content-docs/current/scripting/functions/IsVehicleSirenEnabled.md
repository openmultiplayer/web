---
title: IsVehicleSirenEnabled
sidebar_label: IsVehicleSirenEnabled
description: 检测车辆警报器状态
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定车辆的警报器是否处于开启状态。

## 参数说明

| 参数      | 说明            |
| --------- | --------------- |
| vehicleid | 要检测的车辆 ID |

## 返回值

**true** - 警报器开启

**false** - 警报器关闭

## 示例代码

```c
if (IsVehicleSirenEnabled(vehicleid))
{
    // 警报器已开启
}
else
{
    // 警报器已关闭
}
```

## 相关函数

- [`SetVehicleParamsSirenState`](SetVehicleParamsSirenState): 设置车辆警报器状态
- [`ToggleVehicleSirenEnabled`](ToggleVehicleSirenEnabled): 切换车辆警报器状态
