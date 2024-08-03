---
title: OnPlayerStateChange
description: 当玩家改变状态时，这个回调函数被调用。例如，当一名玩家从一辆车的司机变成了步行。
tags: ["player"]
---

## 描述

当玩家改变状态时，这个回调函数被调用。例如，当一名玩家从一辆车的司机变成了步行。

| 参数名   | 描述                |
| -------- | ------------------- |
| playerid | 改变状态的玩家 ID。 |
| newstate | 玩家的新状态。      |
| oldstate | 玩家之前的状态。    |

参考 [玩家状态](../resources/playerstates) 来获取所有可用的玩家状态列表。

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // 玩家以驾驶员的身份进入车辆
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // 添加氮气
    }
    return 1;
}
```

## 要点

<TipNPCCallbacksCN />

## 相关函数

- [GetPlayerState](../functions/GetPlayerState): 获取玩家的当前状态。
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction): 获得玩家当前的特殊动作。
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction): 设定玩家的特殊动作。
