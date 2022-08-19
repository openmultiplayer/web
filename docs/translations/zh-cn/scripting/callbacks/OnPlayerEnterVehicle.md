---
title: OnPlayerEnterVehicle
description: 当玩家开始进入载具时，这个回调被调用，这意味着在这个回调被调用时，玩家还没有在载具中。
tags: ["player", "vehicle"]
---

## 描述

当玩家开始进入载具时，这个回调被调用，这意味着在这个回调被调用时，玩家还没有在载具中。

| 参数名      | 描述                                     |
| ----------- | ---------------------------------------- |
| playerid    | 试图进入载具的玩家的 ID。                |
| vehicleid   | 玩家试图进入的载具的 ID。                |
| ispassenger | 以司机身份进入为 0，以乘客身份进入为 1。 |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new string[128];
    format(string, sizeof(string), "你正在进入载具 %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 要点

:::tip

该回调函数是在玩家开始进入该载具时调用的，而非他们已经进入该载具时调用。详情见 OnPlayerStateChange 回调函数。

如果玩家不能进入载具(例如载具被锁定或满载)，这个回调函数仍然会被调用。

:::

## 相关函数

- [PutPlayerInVehicle](../functions/PutPlayerInVehicle): 把一个玩家放到一辆载具里。
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): 检查玩家的座位。
