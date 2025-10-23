---
title: IsTrailerAttachedToVehicle
sidebar_label: IsTrailerAttachedToVehicle
description: 检测车辆是否连接有拖车。
tags: ["车辆"]
---

## 描述

检测指定车辆是否连接有拖车。可通过[GetVehicleTrailer](GetVehicleTrailer)获取拖车 ID（若存在）。

| 参数名    | 说明            |
| --------- | --------------- |
| vehicleid | 要检测的车辆 ID |

## 返回值

**true** - 车辆当前连接拖车

**false** - 车辆未连接拖车

## 示例代码

```c
if (IsTrailerAttachedToVehicle(vehicleid))
{
    printf("车辆 %i 正在牵引拖车！", vehicleid);
}
```

## 相关函数

- [GetVehicleTrailer](GetVehicleTrailer): 获取车辆牵引的拖车 ID
- [AttachTrailerToVehicle](AttachTrailerToVehicle): 将拖车连接到车辆
- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): 解除车辆与拖车的连接
