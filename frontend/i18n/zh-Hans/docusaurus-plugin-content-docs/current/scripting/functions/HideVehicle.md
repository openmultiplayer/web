---
title: HideVehicle
sidebar_label: HideVehicle
description: 将车辆从游戏中隐藏
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

:::warning

此功能尚未实现

:::

## 描述

将指定车辆从游戏中隐藏。

## 参数

| 参数      | 说明              |
| --------- | ----------------- |
| vehicleid | 需要隐藏的车辆 ID |

## 示例

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(536, 2496.5034, 5.6658, 27.2247, 180.0000, -1, -1, 60);
    HideVehicle(vehicleid);
    return 1;
}
```

## 相关函数

- [ShowVehicle](ShowVehicle): 显示隐藏的车辆
- [IsVehicleHidden](IsVehicleHidden): 检查车辆是否隐藏
