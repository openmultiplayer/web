---
title: OnPlayerPickUpPlayerPickup
sidebar_label: OnPlayerPickUpPlayerPickup
description: 当玩家拾取通过CreatePlayerPickup创建的玩家拾取物时触发该回调函数
tags: ["玩家", "拾取物", "玩家拾取物"]
---

<VersionWarnZH_CN name='回调' version='omp v1.1.0.2612' />

## 描述

当玩家拾取通过[CreatePlayerPickup](../functions/CreatePlayerPickup)创建的玩家专属拾取物时触发该回调函数。

| 参数名   | 说明                                                                            |
| -------- | ------------------------------------------------------------------------------- |
| playerid | 拾取玩家专属拾取物的玩家ID                                                      |
| pickupid | 玩家专属拾取物ID（由[CreatePlayerPickup](../functions/CreatePlayerPickup)返回） |

## 返回值

该回调始终在游戏模式中优先触发

## 示例

```c
new player_pickup_Cash[MAX_PLAYERS];
new player_pickup_Health[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // 为每个玩家创建专属拾取物
    player_pickup_Cash[playerid] = CreatePlayerPickup(playerid, 1274, 2, 2009.8658, 1220.0293, 10.8206, -1);
    player_pickup_Health[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175, -1);
    return 1;
}

public OnPlayerPickUpPlayerPickup(playerid, pickupid)
{
    if (pickupid == player_pickup_Cash[playerid])
    {
        GivePlayerMoney(playerid, 1000); // 给予玩家$1000
    }
    else if (pickupid == player_pickup_Health[playerid])
    {
        SetPlayerHealth(playerid, 100.0); // 恢复玩家满生命值
    }
    return 1;
}
```

## 注意事项

:::tip

- 仅适用于通过CreatePlayerPickup创建的玩家专属拾取物
- 使用前请用IsValidPlayerPickup验证拾取物有效性
- 每个玩家拾取物独立存在，不同玩家的拾取物ID可能重复

:::

## 相关回调

以下回调函数可能与本回调相关：

- [OnPlayerPickupStreamIn](OnPlayerPickupStreamIn): 当玩家专属拾取物流加载时触发
- [OnPlayerPickupStreamOut](OnPlayerPickupStreamOut): 当玩家专属拾取物流卸载时触发

## 相关函数

以下函数可能与本回调函数相关：

- [CreatePlayerPickup](../functions/CreatePlayerPickup): 创建玩家专属拾取物
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): 销毁玩家专属拾取物
- [IsValidPlayerPickup](../functions/IsValidPlayerPickup): 验证玩家专属拾取物有效性
