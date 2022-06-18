---
title: OnPlayerPickUpPickup
description: 当玩家拿到通过拾取器创建的拾取时调用。
tags: ["player"]
---

## 描述

当玩家拿到通过拾取器创建的拾取时调用。

| 参数名   | 描述                              |
| -------- | --------------------------------- |
| playerid | 拿到拾取信息的玩家的 ID。         |
| pickupid | 拿到的 ID，由 CreatePickup 返回。 |

## 返回值

它在游戏模式中总是先被调用。

## 案例

```c
new pickup_Cash;
new pickup_Health;

public OnGameModeInit()
{
    pickup_Cash = CreatePickup(1274, 2, 0.0, 0.0, 9.0);
    pickup_Health = CreatePickup(1240, 2, 0.0, 0.0, 9.0);
    return 1;
}

public OnPlayerPickUpPickup(playerid, pickupid)
{
    if (pickupid == pickup_Cash)
    {
        GivePlayerMoney(playerid, 1000);
    }
    else if (pickupid == pickup_Health)
    {
        SetPlayerHealth(playerid, 100.0);
    }
    return 1;
}
```

## 相关函数

- [CreatePickup](../functions/CreatePickup): 创建一个拾取。
- [DestroyPickup](../functions/DestroyPickup): 销毁一个拾取。
