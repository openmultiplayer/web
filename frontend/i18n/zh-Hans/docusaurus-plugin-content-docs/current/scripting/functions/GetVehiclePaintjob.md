---
title: GetVehiclePaintjob
sidebar_label: GetVehiclePaintjob
description: 获取车辆的涂装方案编号。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取车辆当前的涂装方案编号。

## 参数

| 参数      | 说明               |
| --------- | ------------------ |
| vehicleid | 目标车辆的 ID 编号 |

## 返回值

返回[涂装方案编号](../resources/paintjobs)。

## 示例

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);
    ChangeVehiclePaintjob(vehicleid, 2);

    new paintjob = GetVehiclePaintjob(vehicleid);
    // paintjob = 2
    return 1;
}
```

## 相关函数

- [ChangeVehiclePaintjob](ChangeVehiclePaintjob): 修改车辆涂装方案
