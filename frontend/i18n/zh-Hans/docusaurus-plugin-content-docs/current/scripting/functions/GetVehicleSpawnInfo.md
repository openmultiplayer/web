---
title: GetVehicleSpawnInfo
sidebar_label: GetVehicleSpawnInfo
description: 获取车辆的生成位置与颜色参数。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取车辆的重生坐标位置与涂装颜色配置。

## 参数

| 参数名        | 说明                                      |
| ------------- | ----------------------------------------- |
| vehicleid     | 目标车辆 ID                               |
| &Float:spawnX | 存储重生点 X 坐标的浮点变量（按引用传递） |
| &Float:spawnY | 存储重生点 Y 坐标的浮点变量（按引用传递） |
| &Float:spawnZ | 存储重生点 Z 坐标的浮点变量（按引用传递） |
| &Float:angle  | 存储重生角度的浮点变量（按引用传递）      |
| &colour1      | 存储主色调编号的整型变量（按引用传递）    |
| &colour2      | 存储副色调编号的整型变量（按引用传递）    |

## 示例

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);

    new
        Float:spawnX,
        Float:spawnY,
        Float:spawnZ,
        Float:angle,
        colour1,
        colour2;

    GetVehicleSpawnInfo(vehicleid, spawnX, spawnY, spawnZ, angle, colour1, colour2);
    // 获取生成信息
    return 1;
}
```

## 相关函数

- [SetVehicleSpawnInfo](SetVehicleSpawnInfo): 设置车辆型号、重生坐标、涂装颜色、重生延迟与所属场景
