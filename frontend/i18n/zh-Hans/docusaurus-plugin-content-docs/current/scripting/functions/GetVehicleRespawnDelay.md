---
title: GetVehicleRespawnDelay
sidebar_label: GetVehicleRespawnDelay
description: 获取车辆的重生延迟时间。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取车辆当前设置的重生延迟时间（单位：秒）。

## 参数

| 参数      | 说明               |
| --------- | ------------------ |
| vehicleid | 目标车辆的 ID 编号 |

## 示例

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    new respawnDelay = GetVehicleRespawnDelay(vehicleid);
    // 重生延迟时间 = 60 秒
    return 1;
}
```

## 相关函数

- [SetVehicleRespawnDelay](SetVehicleRespawnDelay): 设置车辆的重生延迟时间
