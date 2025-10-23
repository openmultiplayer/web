---
title: GetVehicleDriver
sidebar_label: GetVehicleDriver
description: 获取驾驶指定车辆的玩家ID
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取驾驶指定车辆的玩家 ID

## 参数说明

| 参数名    | 说明                  |
| --------- | --------------------- |
| vehicleid | 要获取驾驶员的车辆 ID |

## 返回值

返回驾驶员 ID（玩家 ID）

`INVALID_PLAYER_ID` - 表示车辆当前无驾驶员

## 示例

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new driverid = GetVehicleDriver(vehicleid);
    if (driverid != INVALID_PLAYER_ID)
    {
        SendClientMessage(driverid, -1, "有人正在离开你的车辆。");
    }
    return 1;
}
```

## 相关函数

- [GetVehicleLastDriver](GetVehicleLastDriver): 获取车辆最后驾驶员
