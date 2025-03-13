---
title: SetVehicleDead
sidebar_label: SetVehicleDead
description: 设置车辆为损毁状态。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

:::warning

该函数暂未实现。

:::

## 描述

设置车辆为损毁状态。

## 参数

| 参数名    | 描述                                        |
| --------- | ------------------------------------------- |
| vehicleid | 要设置的车辆 ID                             |
| bool:dead | **true**表示损毁状态，**false**表示正常状态 |

## 示例

```c
SetVehicleDead(vehicleid, true);
```

## 相关函数

- [IsVehicleDead](IsVehicleDead): 检查车辆是否处于损毁状态
