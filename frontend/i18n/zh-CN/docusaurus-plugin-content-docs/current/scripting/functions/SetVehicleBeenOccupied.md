---
title: SetVehicleBeenOccupied
sidebar_label: SetVehicleBeenOccupied
description: 设置车辆的占用状态。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

:::warning

该功能在当前版本中尚未实现

:::

## 描述

设置车辆的占用状态标记。

## 参数说明

| 参数名        | 说明                                     |
| ------------- | ---------------------------------------- |
| vehicleid     | 目标车辆的 ID                            |
| bool:occupied | **true**标记为占用 **false**清除占用标记 |

## 示例代码

```c
// 将指定车辆标记为已被占用
SetVehicleBeenOccupied(vehicleid, true);
```

## 相关函数

- [HasVehicleBeenOccupied](HasVehicleBeenOccupied): 检测车辆是否被标记为占用状态
