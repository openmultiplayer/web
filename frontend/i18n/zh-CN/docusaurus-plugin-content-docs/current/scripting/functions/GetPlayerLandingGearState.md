---
title: GetPlayerLandingGearState
sidebar_label: GetPlayerLandingGearState
description: 获取玩家当前驾驶飞机的起落架状态
tags: ["玩家", "车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家当前驾驶飞机的[起落架状态](../resources/landinggearstate)

## 参数

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要检测的玩家 ID |

## 示例代码

```c
new LANDING_GEAR_STATE:state = GetPlayerLandingGearState(playerid);
```

## 相关函数

- [GetVehicleLandingGearState](GetVehicleLandingGearState): 通过飞机 ID 直接获取起落架状态（需配合最新驾驶员数据）

## 相关资源

- [飞机起落架状态说明](../resources/landinggearstate)
