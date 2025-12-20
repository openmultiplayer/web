---
title: GetPlayerSurfingOffsets
sidebar_label: GetPlayerSurfingOffsets
description: 获取玩家“冲浪”时的坐标偏移量。
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家“冲浪”时的坐标偏移量参数。

| 参数           | 说明                                      |
| -------------- | ----------------------------------------- |
| playerid       | 目标玩家标识符                            |
| &Float:offsetX | 用于存储 X 轴偏移量的浮点变量（引用传递） |
| &Float:offsetY | 用于存储 Y 轴偏移量的浮点变量（引用传递） |
| &Float:offsetZ | 用于存储 Z 轴偏移量的浮点变量（引用传递） |

## 返回值

此函数不返回特定值。

## 示例

```c
new surfingVehicleId = GetPlayerSurfingVehicleID(playerid);
if (surfingVehicleId != INVALID_VEHICLE_ID)
{
    new
        Float:offsetX,
        Float:offsetY,
        Float:offsetZ;

    GetPlayerSurfingOffsets(playerid, offsetX, offsetY, offsetZ);

    SendClientMessage(playerid, -1, "X轴偏移量 = %.2f Y轴偏移量 = %.2f Z轴偏移量 = %.2f", offsetX, offsetY, offsetZ);
}
```

## 相关函数

- [GetPlayerSurfingObjectID](GetPlayerSurfingObjectID): 获取玩家正在“冲浪”的物体 ID
- [GetPlayerSurfingVehicleID](GetPlayerSurfingVehicleID): 获取玩家正在“冲浪”（停留在车顶）的车辆 ID
