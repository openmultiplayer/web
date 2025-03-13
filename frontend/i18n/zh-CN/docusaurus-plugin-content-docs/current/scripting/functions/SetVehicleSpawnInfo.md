---
title: SetVehicleSpawnInfo
sidebar_label: SetVehicleSpawnInfo
description: 设置车辆重生参数（模型、坐标、颜色、重生延迟及所属室内空间）。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

配置车辆重生相关参数，包括模型、生成坐标、颜色配置、重生延迟时间及所属室内空间。

## 参数

| 参数名            | 描述                                          |
| ----------------- | --------------------------------------------- |
| vehicleid         | 要配置的车辆 ID                               |
| modelid           | 要设置的[车辆模型 ID](../resources/vehicleid) |
| Float:spawnX      | 重生 X 坐标                                   |
| Float:spawnY      | 重生 Y 坐标                                   |
| Float:spawnZ      | 重生 Z 坐标                                   |
| Float:angle       | 重生朝向角度                                  |
| colour1           | 主[车辆颜色](../resources/vehiclecolorid)     |
| colour2           | 副[车辆颜色](../resources/vehiclecolorid)     |
| respawnDelay = -2 | 重生延迟时间（秒），-2 表示保持原设置         |
| interior = -2     | 所属室内空间 ID，-2 表示保持原设置            |

## 示例

```c
public OnGameModeInit()
{
    // 创建初始车辆
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);

    // 重新配置重生参数
    SetVehicleSpawnInfo(vehicleid, 522, 2096.0417, -1314.1062, 24.0078, 0.0000, 1, 7);
    return 1;
}
```

## 相关函数

- [GetVehicleSpawnInfo](GetVehicleSpawnInfo): 获取车辆重生参数配置
