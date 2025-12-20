---
title: GetVehicleTrailer
sidebar_label: GetVehicleTrailer
description: 获取车辆所连接拖车的ID编号。
tags: ["车辆"]
---

## 描述

获取与当前车辆连接的拖车单元 ID。

| 参数      | 说明                          |
| --------- | ----------------------------- |
| vehicleid | 需要查询拖车连接的目标车辆 ID |

## 返回值

成功返回拖车的车辆 ID 编号，若未连接拖车则返回**0**

## 示例

```c
new
	trailerId = GetVehicleTrailer(vehicleid);
DetachTrailerFromVehicle(trailerId);
```

## 注意事项

:::warning

此函数不适用于火车类轨道车辆

:::

## 相关函数

- [AttachTrailerToVehicle](AttachTrailerToVehicle): 将拖车连接到指定车辆
- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): 从车辆分离已连接的拖车
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): 检测拖车是否连接到车辆
