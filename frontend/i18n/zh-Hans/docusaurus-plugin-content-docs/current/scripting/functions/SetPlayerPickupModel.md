---
title: SetPlayerPickupModel
sidebar_label: SetPlayerPickupModel
description: 设置玩家拾取物的模型。
tags: ["玩家", "拾取物", "玩家拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置玩家拾取物的模型。

| 名称               | 说明                                   |
| ------------------ | -------------------------------------- |
| playerid           | 玩家的 ID。                            |
| pickupid           | 玩家拾取物的 ID。                      |
| model              | 要设置的[模型](../resources/pickupids) |
| bool:update = true | 是否立即为玩家更新拾取物（true/false） |

## 返回值

本函数总是返回 **true**。

## 示例

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);

    SetPlayerPickupModel(playerid, PlayerPickup[playerid], 1210);
    return 1;
}
```

## 相关函数

- [CreatePlayerPickup](CreatePlayerPickup): 创建仅对单个玩家可见的拾取物
- [DestroyPlayerPickup](DestroyPlayerPickup): 销毁玩家拾取物
- [IsValidPlayerPickup](IsValidPlayerPickup): 检查玩家拾取物是否有效
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): 检查玩家拾取物是否已为玩家流加载
- [SetPlayerPickupPos](SetPlayerPickupPos): 设置玩家拾取物的坐标
- [GetPlayerPickupPos](GetPlayerPickupPos): 获取玩家拾取物的坐标
- [GetPlayerPickupModel](GetPlayerPickupModel): 获取玩家拾取物的模型 ID
- [SetPlayerPickupType](SetPlayerPickupType): 设置玩家拾取物的类型
- [GetPlayerPickupType](GetPlayerPickupType): 获取玩家拾取物的类型
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): 设置玩家拾取物的虚拟世界 ID
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): 获取玩家拾取物的虚拟世界 ID
