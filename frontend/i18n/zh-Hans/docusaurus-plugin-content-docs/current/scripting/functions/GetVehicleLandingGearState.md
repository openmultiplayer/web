---
title: GetVehicleLandingGearState
sidebar_label: GetVehicleLandingGearState
description: 获取最近驾驶员的飞机当前起落架状态。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取最近驾驶员操作的飞机当前[起落架状态](../resources/landinggearstate)。

## 参数

| 参数名    | 说明            |
| --------- | --------------- |
| vehicleid | 目标飞机的 ID。 |

## 示例代码

```c
new LANDING_GEAR_STATE:state = GetVehicleLandingGearState(vehicleid);
```

## 相关函数

- [GetPlayerLandingGearState](GetPlayerLandingGearState): 获取当前玩家所在飞机的起落架状态。

## 相关资源

- [飞机起落架状态说明](../resources/landinggearstate)
