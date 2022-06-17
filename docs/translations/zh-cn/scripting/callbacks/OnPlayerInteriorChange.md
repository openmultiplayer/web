---
title: OnPlayerInteriorChange
description: Called when a player changes interior.
tags: ["player"]
---

## 描述

Called when a player changes interior. Can be triggered by SetPlayerInterior or when a player enter/exits a building.

| 参数名        | 描述                                   |
| ------------- | -------------------------------------- |
| playerid      | The playerid who changed interior.     |
| newinteriorid | The interior the player is now in.     |
| oldinteriorid | The interior the player was in before. |

## 返回值

它在游戏模式中总是先被调用。

## 案例

```c
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    new string[42];
    format(string, sizeof(string), "You went from interior %d to interior %d!", oldinteriorid, newinteriorid);
    SendClientMessage(playerid, COLOR_ORANGE, string);
    return 1;
}
```

## 相关函数

- [SetPlayerInterior](../functions/SetPlayerInterior): Set a player's interior.
- [GetPlayerInterior](../functions/GetPlayerInterior): Get the current interior of a player.
- [LinkVehicleToInterior](../functions/LinkVehicleToInterior): Change the interior that a vehicle is seen in.
- [OnPlayerStateChange](OnPlayerStateChange): Called when a player changes state.
