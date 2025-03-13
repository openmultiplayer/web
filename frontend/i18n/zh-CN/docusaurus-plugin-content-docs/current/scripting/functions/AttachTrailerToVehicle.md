---
title: AttachTrailerToVehicle
sidebar_label: AttachTrailerToVehicle
description: 将一个车辆作为拖车附加到另一个车辆上。
tags: ["车辆"]
---

## 描述

将一个车辆作为拖车附加到另一个车辆上。

| 名称      | 说明              |
| --------- | ----------------- |
| trailerid | 被牵引的车辆 ID   |
| vehicleid | 牵引拖车的车辆 ID |

## 返回值

本函数始终返回 **true**，即使传入的车辆 ID 无效。

## 示例

```c
new vehicleId = CreateVehicle(403, 657.8788, 1721.9125, 7.7199, 41.0000, -1, -1, 100);
new trailerId = CreateVehicle(435, 651.8154, 1716.3301, 7.7700, 41.0000, -1, -1, 100);

AttachTrailerToVehicle(trailerId, vehicleId);
```

## 注意事项

:::warning

该功能仅在两个车辆均被玩家流加载时生效（参见[IsVehicleStreamedIn](IsVehicleStreamedIn)）。

:::

## 相关函数

- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): 将拖车从车辆分离
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): 检测拖车是否已连接
- [GetVehicleTrailer](GetVehicleTrailer): 获取车辆牵引的拖车 ID
