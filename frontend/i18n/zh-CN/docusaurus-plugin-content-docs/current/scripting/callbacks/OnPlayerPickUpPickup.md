---
title: OnPlayerPickUpPickup
sidebar_label: OnPlayerPickUpPickup
description: 当玩家拾取通过CreatePickup创建的拾取物时触发该回调函数。
tags: ["玩家"]
---

## 描述

当玩家拾取通过[CreatePickup](../functions/CreatePickup)创建的拾取物时触发该回调函数。

| 参数名   | 说明                                                        |
| -------- | ----------------------------------------------------------- |
| playerid | 拾取拾取物的玩家ID                                          |
| pickupid | 拾取物ID（由[CreatePickup](../functions/CreatePickup)返回） |

## 返回值

该回调始终在游戏模式中优先触发

## 示例

```c
new pickup_Cash;
new pickup_Health;

public OnGameModeInit()
{
    // 创建现金和生命值拾取物
    pickup_Cash = CreatePickup(1274, 2, 2009.8658, 1220.0293, 10.8206, -1);
    pickup_Health = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175, -1);
    return 1;
}

public OnPlayerPickUpPickup(playerid, pickupid)
{
    if (pickupid == pickup_Cash)
    {
        GivePlayerMoney(playerid, 1000); // 给予玩家$1000
    }
    else if (pickupid == pickup_Health)
    {
        SetPlayerHealth(playerid, 100.0); // 恢复玩家满生命值
    }
    return 1;
}
```

## 注意事项

:::tip

- 仅适用于通过CreatePickup创建的常规拾取物
- 武器拾取物（通过CreateWeaponPickup创建）不会触发此回调
- 使用前请用IsValidPickup验证拾取物有效性

:::

## 相关回调

以下回调函数可能与本回调相关：

- [OnPickupStreamIn](OnPickupStreamIn): 当拾取物进入玩家可视范围时触发
- [OnPickupStreamOut](OnPickupStreamOut): 当拾取物离开玩家可视范围时触发

## 相关函数

以下函数可能与本回调函数相关：

- [CreatePickup](../functions/CreatePickup): 创建常规拾取物
- [DestroyPickup](../functions/DestroyPickup): 销毁拾取物
- [IsValidPickup](../functions/IsValidPickup): 验证拾取物ID有效性
