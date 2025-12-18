---
title: OnPlayerPickupStreamOut
sidebar_label: OnPlayerPickupStreamOut
description: 当玩家专属拾取物流卸载时触发此回调函数
tags: ["玩家", "拾取物", "玩家拾取物"]
---

<VersionWarnZH_CN name='回调' version='omp v1.1.0.2612' />

## 描述

当玩家专属拾取物离开玩家可视范围时触发此回调函数

| 参数     | 说明                                                                            |
| -------- | ------------------------------------------------------------------------------- |
| pickupid | 玩家专属拾取物ID（由[CreatePlayerPickup](../functions/CreatePlayerPickup)返回） |
| playerid | 所属玩家ID                                                                      |

## 返回值

此回调始终在游戏模式中优先触发

## 示例

```c
new g_PlayerPickupHealth[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // 为每个玩家创建生命值拾取物
    g_PlayerPickupHealth[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175);
    return 1;
}

public OnPlayerPickupStreamOut(pickupid, playerid)
{
    if (pickupid == g_PlayerPickupHealth[playerid])
    {
        printf("玩家 %d 的生命值拾取物已流卸载", playerid);
    }
    return 1;
}
```

## 注意事项

:::tip

- 仅适用于通过CreatePlayerPickup创建的玩家专属拾取物
- 流卸载操作由客户端自动执行，受玩家位置变化影响
- 使用前请用IsValidPlayerPickup验证拾取物有效性

:::

## 相关回调

以下回调函数可能与此回调相关：

- [OnPlayerPickUpPlayerPickup](OnPlayerPickUpPlayerPickup): 当玩家拾取专属拾取物时触发
- [OnPlayerPickupStreamIn](OnPlayerPickupStreamIn): 当玩家专属拾取物流加载时触发

## 相关函数

以下函数可能与此回调函数相关：

- [CreatePlayerPickup](../functions/CreatePlayerPickup): 创建玩家专属拾取物
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): 销毁玩家专属拾取物
- [IsValidPlayerPickup](../functions/IsValidPlayerPickup): 验证玩家专属拾取物有效性
