---
title: GetPlayerLastSyncedVehicleID
sidebar_label: GetPlayerLastSyncedVehicleID
description: 获取玩家最后同步的车辆ID
tags: ["玩家", "车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

:::warning

此函数尚未实现。

:::

## 描述

获取玩家最后同步的车辆 ID

## 参数

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要查询的玩家 ID |

## 返回值

返回最后同步的车辆 ID

## 示例代码

```c
new vehicleid = GetPlayerLastSyncedVehicleID(playerid);
```

## 相关函数

- [GetPlayerLastSyncedTrailerID](GetPlayerLastSyncedTrailerID): 获取玩家最后同步的拖车 ID
