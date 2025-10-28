---
title: GetVehicleOccupiedTick
sidebar_label: GetVehicleOccupiedTick
description: 获取车辆的占用时间。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取车辆的占用时间。

## 参数

| 参数      | 说明               |
| --------- | ------------------ |
| vehicleid | 目标车辆的 ID 编号 |

## 返回值

返回以毫秒为单位的占用时长。

## 示例

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    new occupiedTick = GetVehicleOccupiedTick(vehicleid);
    printf("车辆ID %d 占用时长: %d 毫秒", vehicleid, occupiedTick);
    return 1;
}
```

## 相关函数

- [SetVehicleOccupiedTick](SetVehicleOccupiedTick): 设置车辆的占用时间
