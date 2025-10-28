---
title: GetVehicleNumberPlate
sidebar_label: GetVehicleNumberPlate
description: 获取车辆的牌照号码。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取车辆的牌照号码。

## 参数

| 参数                 | 说明                                 |
| -------------------- | ------------------------------------ |
| vehicleid            | 车辆 ID                              |
| plate[]              | 用于存储车牌号的数组，通过引用传递。 |
| len = sizeof (plate) | 应当存储的车牌字符长度。             |

## 示例

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);
    SetVehicleNumberPlate(vehicleid, "ABCD 123");

    new numberPlate[16];
    GetVehicleNumberPlate(vehicleid, numberPlate);
    // numberPlate = "ABCD 123"
    return 1;
}
```

## 相关函数

- [SetVehicleNumberPlate](SetVehicleNumberPlate): 设置车辆牌照
