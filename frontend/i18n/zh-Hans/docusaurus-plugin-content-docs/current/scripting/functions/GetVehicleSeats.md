---
title: GetVehicleSeats
sidebar_label: GetVehicleSeats
description: 获取车辆的座位数量。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定车辆模型的座位数量。

| 参数名  | 说明              |
| ------- | ----------------- |
| modelid | 目标车辆的模型 ID |

## 返回值

成功返回座位数量，若模型 ID 无效则返回**255**。

## 示例

```c
new vehicleid = GetPlayerVehicleID(playerid);
new modelid = GetVehicleModel(vehicleid);
new seats = GetVehicleSeats(modelid);

new string[64];
format(string, sizeof(string), "当前车辆座位数: %d", seats);
SendClientMessage(playerid, -1, string);
```

## 相关函数

- [PutPlayerInVehicle](PutPlayerInVehicle): 将玩家放入车辆中
