---
title: ToggleVehicleSirenEnabled
sidebar_label: ToggleVehicleSirenEnabled
description: 切换车辆警报器的启用状态。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

切换车辆警报器的启用状态。

## 参数

| 参数         | 说明                             |
| ------------ | -------------------------------- |
| vehicleid    | 目标车辆的 ID                    |
| bool:enabled | **true**: 启用 - **false**: 禁用 |

## 示例

```c
ToggleVehicleSirenEnabled(vehicleid, true);
```

## 相关函数

- [GetVehicleSirenState](GetVehicleSirenState): 获取车辆的警报器状态
- [GetPlayerSirenState](GetPlayerSirenState): 获取玩家所在车辆的警报器状态
