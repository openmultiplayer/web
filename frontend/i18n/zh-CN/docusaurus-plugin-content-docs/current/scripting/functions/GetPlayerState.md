---
title: GetPlayerState
sidebar_label: GetPlayerState
description: 获取玩家当前的状态
tags: ["玩家"]
---

## 描述

获取玩家当前的游戏状态

| 参数名   | 说明                  |
| -------- | --------------------- |
| playerid | 需要获取状态的玩家 ID |

## 返回值

返回玩家当前的[状态值](../resources/playerstates)（整数形式）

## 示例代码

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    new PLAYER_STATE:state = GetPlayerState(killerid); // 获取击杀者的状态

    if (state == PLAYER_STATE_DRIVER) // 如果击杀者处于驾驶状态
    {
        // 驾驶车辆时击杀，扣除金钱
        GivePlayerMoney(killerid, -10000);
    }
    return 1;
}
```

## 相关函数

- [GetPlayerSpecialAction](GetPlayerSpecialAction): 获取玩家特殊动作状态
- [SetPlayerSpecialAction](SetPlayerSpecialAction): 设置玩家特殊动作

## 相关回调

- [OnPlayerStateChange](../callbacks/OnPlayerStateChange): 玩家状态变更时触发

## 扩展资源

- [玩家状态列表](../resources/playerstates)
