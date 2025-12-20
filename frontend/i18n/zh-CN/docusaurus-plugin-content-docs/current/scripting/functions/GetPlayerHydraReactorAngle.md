---
title: GetPlayerHydraReactorAngle
sidebar_label: GetPlayerHydraReactorAngle
description: 获取玩家驾驶的九头蛇推进器角度
tags: ["玩家", "车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家当前驾驶的九头蛇战机（Hydra）推进器角度

## 参数

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要获取的玩家 ID |

## 返回值

九头蛇战机推进器角度值（整数类型）

## 示例代码

```c
new reactorAngle = GetPlayerHydraReactorAngle(playerid);
```

## 相关函数

- [GetVehicleHydraReactorAngle](GetVehicleHydraReactorAngle): 直接通过车辆 ID 获取九头蛇推进器角度
