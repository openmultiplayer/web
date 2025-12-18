---
title: IsVehicleHidden
sidebar_label: IsVehicleHidden
description: 检测车辆是否隐藏
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

:::warning

此函数当前尚未实现

:::

## 描述

检测指定车辆是否处于隐藏状态。

## 参数说明

| 参数      | 说明            |
| --------- | --------------- |
| vehicleid | 要检测的车辆 ID |

## 返回值

**true** - 车辆已隐藏

**false** - 车辆可见

## 示例代码

```c
if (IsVehicleHidden(vehicleid))
{
    // 车辆已隐藏
}
else
{
    // 车辆可见
}
```

## 相关函数

- [HideVehicle](HideVehicle): 将车辆设为隐藏状态
- [ShowVehicle](ShowVehicle): 取消车辆隐藏状态
