---
title: GetVehicleColours
sidebar_label: GetVehicleColours
description: 获取车辆颜色
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取车辆的主色和副色信息

## 参数说明

| 参数      | 说明                             |
| --------- | -------------------------------- |
| vehicleid | 目标车辆 ID                      |
| &colour1  | 存储主色值的变量（通过引用传递） |
| &colour2  | 存储副色值的变量（通过引用传递） |

## 示例

```c
public OnGameModeInit()
{
    // 创建一辆Sultan车辆并设置颜色
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);

    new
        colour1,
        colour2;

    // 获取并存储车辆颜色值
    GetVehicleColours(vehicleid, colour1, colour2);
    // colour1 = 6 (主色)
    // colour2 = 0 (副色)
    return 1;
}
```

## 相关函数

- [ChangeVehicleColours](ChangeVehicleColours): 更改车辆的主色和副色

## 相关资源

- [车辆颜色 ID 对照表](../resources/vehiclecolorid)
