---
title: DetachTrailerFromVehicle
sidebar_label: DetachTrailerFromVehicle
description: 断开车辆与其拖车之间的连接（如果存在）。
tags: ["车辆"]
---

## 描述

断开车辆与其拖车之间的连接（如果存在）。

| 参数      | 说明          |
| --------- | ------------- |
| vehicleid | 牵引车辆的 ID |

## 返回值

此函数不返回特定值。

## 示例

```c
DetachTrailerFromVehicle(vehicleid);
```

## 相关函数

- [AttachTrailerToVehicle](AttachTrailerToVehicle): 将拖车连接到车辆
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): 检查车辆是否连接拖车
- [GetVehicleTrailer](GetVehicleTrailer): 获取车辆牵引的拖车
