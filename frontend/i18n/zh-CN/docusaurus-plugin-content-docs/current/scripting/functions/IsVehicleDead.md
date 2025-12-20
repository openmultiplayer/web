---
title: IsVehicleDead
sidebar_label: IsVehicleDead
description: 检测车辆是否处于损毁状态
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定车辆是否处于损毁状态。

## 参数说明

| 参数      | 说明            |
| --------- | --------------- |
| vehicleid | 要检测的车辆 ID |

## 返回值

**true** - 车辆已损毁

**false** - 车辆正常运作

## 示例代码

```c
if (IsVehicleDead(vehicleid))
{
    // 车辆已损毁
}
else
{
    // 车辆正常运作
}
```

## 相关函数

- [`SetVehicleDead`](SetVehicleDead): 设置车辆损毁状态
