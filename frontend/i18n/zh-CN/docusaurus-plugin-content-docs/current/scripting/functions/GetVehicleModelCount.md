---
title: GetVehicleModelCount
sidebar_label: GetVehicleModelCount
description: 获取指定车辆模型的数量。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定车辆模型在服务器上的实例数量。

## 参数

| 参数名  | 说明                                        |
| ------- | ------------------------------------------- |
| modelid | 目标[车辆模型](../resources/vehicleid)的 ID |

## 示例代码

```c
public OnGameModeInit()
{
    CreateVehicle(560, 2112.7607, -1308.3751, 23.6797, 90.0000, -1, -1, 100);
	CreateVehicle(560, 2104.5730, -1308.3313, 23.6797, 90.0000, -1, -1, 100);
	CreateVehicle(560, 2120.3616, -1308.4973, 23.6797, 90.0000, -1, -1, 100);

    new modelid = 560;
    printf("车辆模型：%d - 数量：%d", modelid, GetVehicleModelCount(modelid)); // 车辆模型：560 - 数量：3
}
```

## 相关函数

- [CreateVehicle](CreateVehicle): 创建一辆车辆
- [GetVehicleModelsUsed](GetVehicleModelsUsed): 获取服务器上已使用的车辆模型数量
