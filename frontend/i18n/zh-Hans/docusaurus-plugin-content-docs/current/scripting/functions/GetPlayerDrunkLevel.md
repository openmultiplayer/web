---
title: GetPlayerDrunkLevel
sidebar_label: GetPlayerDrunkLevel
description: 检测玩家当前的醉酒等级
tags: ["玩家"]
---

## 描述

检测玩家当前的醉酒等级。当等级低于 2000 时表示清醒状态。醉酒等级会以每秒 26 点的速度自动降低，最终会稳定在 2000 点。高醉酒等级会影响玩家视角和车辆操控，玩家使用酒瓶道具时该数值会增加（可通过 SetPlayerSpecialAction 赋予酒瓶道具）。

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要检测的玩家 ID |

## 返回值

玩家的醉酒等级整数值

## 示例代码

```c
public OnPlayerStateChange(playerid, oldstate, newstate)
{
    if (newstate == PLAYER_STATE_DRIVER && GetPlayerDrunkLevel(playerid) > 1999)
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "禁止酒驾！");
        RemovePlayerFromVehicle(playerid); // 强制移出车辆
    }
}
```

## 相关函数

- [SetPlayerDrunkLevel](SetPlayerDrunkLevel): 设置玩家醉酒等级
