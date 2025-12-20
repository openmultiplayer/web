---
title: GetPlayerSurfingVehicleID
sidebar_label: GetPlayerSurfingVehicleID
description: 获取玩家正在“冲浪”（停留在车顶）的车辆ID。
tags: ["玩家", "车辆"]
---

## 描述

获取玩家当前正在“冲浪”（停留在车顶）的车辆 ID。

| 参数     | 说明                                   |
| -------- | -------------------------------------- |
| playerid | 需要查询“冲浪”车辆 ID 的目标玩家标识符 |

## 返回值

成功返回被“冲浪”的车辆 ID。若玩家未“冲浪”任何车辆或目标车辆无驾驶员，返回`INVALID_VEHICLE_ID`。

若指定玩家未连接服务器，同样返回`INVALID_VEHICLE_ID`。

## 示例

```c
new surfingVehicleId = GetPlayerSurfingVehicleID(playerid);
if (surfingVehicleId == INVALID_VEHICLE_ID)
{
	SendClientMessage(playerid, COLOR_RED, "你当前没有“冲浪”任何车辆。");
}
```

## 相关函数

- [GetPlayerVehicleID](GetPlayerVehicleID): 获取玩家当前乘坐的车辆 ID
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): 检测玩家在车辆内的座位位置
- [GetPlayerSurfingObjectID](GetPlayerSurfingObjectID): 获取玩家正在“冲浪”的物体 ID
- [GetPlayerSurfingOffsets](GetPlayerSurfingOffsets): 获取玩家“冲浪”时的坐标偏移量
