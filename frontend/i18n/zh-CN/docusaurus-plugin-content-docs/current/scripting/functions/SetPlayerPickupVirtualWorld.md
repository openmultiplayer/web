---
title: SetPlayerPickupVirtualWorld
sidebar_label: SetPlayerPickupVirtualWorld
description: 设置玩家专属拾取物的虚拟世界ID。
tags: ["玩家", "拾取物", "玩家拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置玩家专属拾取物的虚拟世界 ID。

| 参数         | 说明                |
| ------------ | ------------------- |
| playerid     | 玩家的 ID           |
| pickupid     | 玩家专属拾取物的 ID |
| virtualWorld | 要设置的虚拟世界 ID |

## 返回值

此函数总是返回 **true**。

## 示例代码

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // 创建玩家专属拾取物
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 1, 2010.0979, 1222.0642, 10.8206, 20);

    // 设置拾取物的虚拟世界
    SetPlayerPickupVirtualWorld(playerid, PlayerPickup[playerid], 10);
    return 1;
}
```

## 相关函数

- [CreatePlayerPickup](CreatePlayerPickup): 创建一个仅对特定玩家可见的拾取物
- [DestroyPlayerPickup](DestroyPlayerPickup): 销毁玩家专属拾取物
- [IsValidPlayerPickup](IsValidPlayerPickup): 验证玩家专属拾取物是否有效
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): 检测玩家专属拾取物是否已流加载
- [SetPlayerPickupPos](SetPlayerPickupPos): 设置玩家专属拾取物的坐标
- [GetPlayerPickupPos](GetPlayerPickupPos): 获取玩家专属拾取物的坐标
- [SetPlayerPickupModel](SetPlayerPickupModel): 设置玩家专属拾取物的模型
- [GetPlayerPickupModel](GetPlayerPickupModel): 获取玩家专属拾取物的模型 ID
- [SetPlayerPickupType](SetPlayerPickupType): 设置玩家专属拾取物的类型
- [GetPlayerPickupType](GetPlayerPickupType): 获取玩家专属拾取物的类型
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): 获取玩家专属拾取物的虚拟世界 ID
