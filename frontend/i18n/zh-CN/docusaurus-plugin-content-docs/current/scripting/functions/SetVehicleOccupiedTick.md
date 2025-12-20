---
title: SetVehicleOccupiedTick
sidebar_label: SetVehicleOccupiedTick
description: 设置车辆的占用时间戳。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

:::warning

此函数暂未实现。

:::

## 描述

设置车辆的占用时间戳。

## 参数

| 参数      | 说明               |
| --------- | ------------------ |
| vehicleid | 要设置的车辆 ID    |
| ticks     | 要设置的时间戳数值 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败

## 示例

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    SetVehicleOccupiedTick(vehicleid, 300);
    return 1;
}
```

## 相关函数

- [GetVehicleOccupiedTick](GetVehicleOccupiedTick): 获取车辆的占用时间戳
