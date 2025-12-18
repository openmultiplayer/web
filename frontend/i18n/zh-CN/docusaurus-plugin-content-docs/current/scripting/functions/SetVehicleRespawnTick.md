---
title: SetVehicleRespawnTick
sidebar_label: SetVehicleRespawnTick
description: 设置车辆的重生滴答数。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

:::warning

此函数暂未实现。

:::

## 描述

设置车辆的重生滴答数。

## 参数

| 参数      | 说明           |
| --------- | -------------- |
| vehicleid | 目标车辆 ID    |
| ticks     | 要设置的滴答数 |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。

## 示例

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60); // 创建Sultan车辆

    SetVehicleRespawnTick(vehicleid, 300); // 设置300滴答后重生
    return 1;
}
```

## 相关函数

- [GetVehicleRespawnTick](GetVehicleRespawnTick): 获取车辆的重生滴答数
