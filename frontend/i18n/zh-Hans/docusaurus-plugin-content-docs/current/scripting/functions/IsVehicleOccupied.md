---
title: IsVehicleOccupied
sidebar_label: IsVehicleOccupied
description: 检测车辆是否被占用
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定车辆是否处于被占用状态。

## 参数说明

| 参数名    | 说明            |
| --------- | --------------- |
| vehicleid | 要检测的车辆 ID |

## 返回值

**true** - 车辆已被占用

**false** - 车辆未被占用

## 示例代码

```c
if (IsVehicleOccupied(vehicleid))
{
    // 车辆已被占用
}
else
{
    // 车辆未被占用
}
```

## 相关函数

- [SetVehicleBeenOccupied](SetVehicleBeenOccupied): 设置车辆占用状态
