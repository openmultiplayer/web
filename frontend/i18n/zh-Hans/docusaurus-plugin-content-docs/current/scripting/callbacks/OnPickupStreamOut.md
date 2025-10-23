---
title: OnPickupStreamIn
sidebar_label: OnPickupStreamIn
description: 当拾取物进入玩家的可视范围时触发该回调
tags: ["玩家"]
---

<VersionWarnZH_CN name='回调' version='omp v1.1.0.2612' />

## 描述

当拾取物进入玩家的可视范围时触发该回调。

| 参数     | 说明                                                            |
| -------- | --------------------------------------------------------------- |
| pickupid | 拾取物ID（由[CreatePickup](../functions/CreatePickup)函数返回） |
| playerid | 触发流加载的玩家ID                                              |

## 返回值

该回调在游戏模式中总是优先触发。

## 示例

```c
new g_PickupHealth;

public OnGameModeInit()
{
    g_PickupHealth = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175);
    return 1;
}

public OnPickupStreamIn(pickupid, playerid)
{
    if (pickupid == g_PickupHealth)
    {
        printf("生命值拾取物已为玩家 %d 完成流加载", playerid);
    }
    return 1;
}
```

## 相关回调

以下回调可能与当前回调存在关联：

- [OnPlayerPickUpPickup](OnPlayerPickUpPickup)：当玩家拾取物品时触发
- [OnPickupStreamOut](OnPickupStreamOut)：当拾取物离开玩家可视范围时触发

## 相关函数

以下函数可能与当前回调相关：

- [CreatePickup](../functions/CreatePickup)：创建拾取物
- [DestroyPickup](../functions/DestroyPickup)：销毁拾取物
