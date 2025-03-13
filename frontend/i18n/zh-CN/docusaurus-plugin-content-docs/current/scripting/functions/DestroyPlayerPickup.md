---
title: DestroyPlayerPickup
sidebar_label: DestroyPlayerPickup
description: 销毁通过 CreatePlayerPickup 创建的玩家专属拾取物。
tags: ["玩家", "拾取物", "玩家专属拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

销毁通过 [CreatePlayerPickup](CreatePlayerPickup) 创建的玩家专属拾取物。

| 名称     | 描述                                                    |
| -------- | ------------------------------------------------------- |
| playerid | 目标玩家 ID                                             |
| pickupid | 要销毁的玩家专属拾取物 ID（由 CreatePlayerPickup 返回） |

## 返回值

该函数不返回特定值。

## 示例

```c
new PlayerPickupArmour[MAX_PLAYERS]; // 创建存储玩家专属拾取物ID的数组

public OnPlayerConnect(playerid)
{
    PlayerPickupArmour[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // 创建护甲拾取物并将ID存储到 PlayerPickupArmour[playerid]
    return 1;
}

// 一段时间后...
DestroyPlayerPickup(playerid, PlayerPickupArmour[playerid]);
```

## 相关函数

- [CreatePlayerPickup](CreatePlayerPickup): 创建仅对单个玩家可见的拾取物
- [IsValidPlayerPickup](IsValidPlayerPickup): 检查玩家专属拾取物是否有效

## 相关回调

- [OnPlayerPickUpPlayerPickup](../callbacks/OnPlayerPickUpPlayerPickup): 当玩家拾取专属拾取物时触发
