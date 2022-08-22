---
title: OnPlayerInteriorChange
description: 当某个玩家的内部空间改变时调用。
tags: ["player"]
---

## 描述

当某个玩家的内部空间改变时调用。可以由 [SetPlayerInterior](../functions/SetPlayerInterior) 触发，或者当玩家进入/离开建筑物时触发。

| 参数名        | 描述                        |
| ------------- | --------------------------- |
| playerid      | 改变了内部空间的玩家 ID。   |
| newinteriorid | 这个玩家现在的内部空间 ID。 |
| oldinteriorid | 这个玩家先前的内部空间 ID。 |

## 返回值

它在游戏模式中总是先被调用。

## 案例

```c
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    new string[42];
    format(string, sizeof(string), "你从内部空间 %d 跑到了内部空间 %d!", oldinteriorid, newinteriorid);
    SendClientMessage(playerid, COLOR_ORANGE, string);
    return 1;
}
```

## 相关函数

- [SetPlayerInterior](../functions/SetPlayerInterior): 设置某个玩家的内部空间。
- [GetPlayerInterior](../functions/GetPlayerInterior): 获取某个玩家目前的内部空间。
- [LinkVehicleToInterior](../functions/LinkVehicleToInterior): 改变某个载具所处的内部空间。
- [OnPlayerStateChange](OnPlayerStateChange): 当玩家改变状态时，这个回调函数被调用。
