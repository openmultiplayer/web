---
title: SetVehicleRespawnDelay
sidebar_label: SetVehicleRespawnDelay
description: 设置车辆的重生延迟时间。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置车辆被销毁后的重生延迟时间。

## 参数说明

| 参数         | 说明                             |
| ------------ | -------------------------------- |
| vehicleid    | 目标车辆的 ID                    |
| respawnDelay | 要设置的重生延迟时间（单位：秒） |

## 示例代码

```c
public OnGameModeInit()
{
    // 创建车辆并设置其重生延迟
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    // 设置120秒（2分钟）后自动重生
    SetVehicleRespawnDelay(vehicleid, 120);
    return 1;
}
```

## 相关函数

- [GetVehicleRespawnDelay](GetVehicleRespawnDelay): 获取车辆当前的重生延迟时间
