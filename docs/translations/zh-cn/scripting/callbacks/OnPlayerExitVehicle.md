---
title: OnPlayerExitVehicle
description: 当玩家开始离开载具时，这个回调函数被调用。
tags: ["player", "vehicle"]
---

## 描述

当玩家开始离开载具时，这个回调函数被调用。

| 参数名    | 描述                  |
| --------- | --------------------- |
| playerid  | 离开载具的玩家的 ID。 |
| vehicleid | 玩家离开的载具的 ID。 |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new string[35];
    format(string, sizeof(string), "信息: 您正在离开载具 %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 要点

:::warning

如果玩家从自行车上摔下来或被其他函数从载具上移除，例如使用 SetPlayerPos 函数时，则不调用。

你必须使用 OnPlayerStateChange 回调并检查它们的旧状态是 PLAYER_STATE_DRIVER 还是 PLAYER_STATE_PASSENGER。它们现在的新状态是 PLAYER_STATE_ONFOOT。

:::

## 相关函数

- [RemovePlayerFromVehicle](../functions/RemovePlayerFromVehicle): 把一个玩家丢出载具外。
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): 检查玩家的座位。
