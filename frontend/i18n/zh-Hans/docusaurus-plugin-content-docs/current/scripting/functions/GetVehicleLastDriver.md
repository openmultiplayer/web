---
title: GetVehicleLastDriver
sidebar_label: GetVehicleLastDriver
description: 获取车辆的最后驾驶员。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定车辆的最后驾驶员。

## 参数

| 参数名    | 说明            |
| --------- | --------------- |
| vehicleid | 目标车辆的 ID。 |

## 返回值

返回最后驾驶员的玩家 ID。

`INVALID_PLAYER_ID` - 表示该车辆没有最后驾驶员记录

## 示例代码

```c
new g_Vehicle;

public OnGameModeInit()
{
    g_Vehicle = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);
}

public OnGameModeExit()
{
    new lastDriver = GetVehicleLastDriver(g_Vehicle);
    if (lastDriver != INVALID_PLAYER_ID)
    {
        printf("车辆ID %d 的最后驾驶员: %d", g_Vehicle, lastDriver);
    }
    else
    {
        printf("车辆ID %d 没有最后驾驶员记录", g_Vehicle);
    }
}
```

## 相关函数

- [GetVehicleDriver](GetVehicleDriver): 获取当前驾驶车辆的玩家 ID
