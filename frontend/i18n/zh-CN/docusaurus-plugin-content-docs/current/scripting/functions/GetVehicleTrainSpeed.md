---
title: GetVehicleTrainSpeed
sidebar_label: GetVehicleTrainSpeed
description: 获取列车的当前行驶速度。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取列车类车辆的实时运行速度。

## 参数

| 参数名    | 说明                   |
| --------- | ---------------------- |
| vehicleid | 目标列车车辆的 ID 编号 |

## 示例

```c
new vehicleid = GetPlayerVehicleID(playerid);

new Float:speed = GetVehicleTrainSpeed(vehicleid);
```

## 相关函数

- [GetPlayerTrainSpeed](GetPlayerTrainSpeed): 获取玩家当前驾驶的列车速度
- [SetVehicleTrainSpeed](SetVehicleTrainSpeed): 设置轨道列车的运行速度
