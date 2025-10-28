---
title: GetVehicleInterior
sidebar_label: GetVehicleInterior
description: 获取车辆的室内空间ID。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定车辆的室内空间 ID。

## 参数

| 参数      | 说明            |
| --------- | --------------- |
| vehicleid | 目标车辆的 ID。 |

## 返回值

返回车辆的室内空间 ID。

## 示例代码

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);
    LinkVehicleToInterior(vehicleid, 15);

    new interiorid = GetVehicleInterior(vehicleid);
    // interiorid = 15
    return 1;
}
```

## 相关函数

- [LinkVehicleToInterior](LinkVehicleToInterior): 将车辆链接到指定室内空间。
