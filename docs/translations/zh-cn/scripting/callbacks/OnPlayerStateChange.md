---
title: OnPlayerStateChange
description: This callback is called when a player changes state.
tags: ["player"]
---

## 描述

This callback is called when a player changes state. For example, when a player changes from being the driver of a vehicle to being on-foot.

| 参数名   | 描述                                     |
| -------- | ---------------------------------------- |
| playerid | The ID of the player that changed state. |
| newstate | The player's new state.                  |
| oldstate | The player's previous state.             |

Refer to [Player States](../resources/playerstates) for a list of all available player states.

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Player entered a vehicle as a driver
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // Add NOS to the vehicle
    }
    return 1;
}
```

## 要点

<TipNPCCallbacks />

## 相关函数

- [GetPlayerState](../functions/GetPlayerState): Get a player's current state.
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction): Get a player's current special action.
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction): Set a player's special action.
