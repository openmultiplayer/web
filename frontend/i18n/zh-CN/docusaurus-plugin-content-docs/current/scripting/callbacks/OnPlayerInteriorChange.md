---
title: OnPlayerInteriorChange
sidebar_label: OnPlayerInteriorChange
description: 当玩家切换室内区域时触发此回调函数。
tags: ["玩家"]
---

## 描述

当玩家切换室内区域时触发此回调函数。可能由[SetPlayerInterior](../functions/SetPlayerInterior)触发，或当玩家进入/离开建筑物时触发。

| 参数          | 说明                     |
| ------------- | ------------------------ |
| playerid      | 切换室内区域的玩家ID     |
| newinteriorid | 玩家当前所在室内区域ID   |
| oldinteriorid | 玩家之前所在的室内区域ID |

## 返回值

此回调始终在游戏模式中优先触发

## 示例

```c
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    new string[42];
    format(string, sizeof(string), "你从室内区域 %d 切换到了 %d 号区域！", oldinteriorid, newinteriorid);
    SendClientMessage(playerid, COLOR_ORANGE, string);
    return 1;
}
```

## 相关回调

以下回调函数可能与此回调相关：

- [OnPlayerStateChange](OnPlayerStateChange): 当玩家状态改变时触发

## 相关函数

以下函数可能与此回调函数相关：

- [SetPlayerInterior](../functions/SetPlayerInterior): 设置玩家室内区域
- [GetPlayerInterior](../functions/GetPlayerInterior): 获取玩家当前室内区域
- [LinkVehicleToInterior](../functions/LinkVehicleToInterior): 设置车辆关联的室内区域
