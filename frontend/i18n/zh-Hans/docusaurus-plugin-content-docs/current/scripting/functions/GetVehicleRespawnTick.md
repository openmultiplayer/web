---
title: GetVehicleRespawnTick
sidebar_label: GetVehicleRespawnTick
description: 获取车辆的重生计时。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取车辆当前的重生计时（单位：毫秒）。

## 参数

| 参数名    | 说明               |
| --------- | ------------------ |
| vehicleid | 目标车辆的 ID 编号 |

## 返回值

返回以毫秒为单位的重生剩余时间。

## 示例

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    new respawnTick = GetVehicleRespawnTick(vehicleid);
    printf("车辆ID %d 重生倒计时: %d 毫秒", vehicleid, respawnTick);
    return 1;
}
```

## 相关函数

- [SetVehicleRespawnTick](SetVehicleRespawnTick): 设置车辆的重生计时
