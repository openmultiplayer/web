---
title: SetPlayerPickupType
sidebar_label: SetPlayerPickupType
description: 设置玩家专属拾取物的类型。
tags: ["玩家", "拾取物", "玩家拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置玩家专属拾取物的类型。

| 参数名             | 描述                                         |
| ------------------ | -------------------------------------------- |
| playerid           | 玩家 ID                                      |
| pickupid           | 玩家拾取物 ID                                |
| type               | 要设置的[拾取类型](../resources/pickuptypes) |
| bool:update = true | 是否立即更新显示给玩家（true/false）         |

## 返回值

本函数始终返回 **true**。

## 示例

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 1, 2010.0979, 1222.0642, 10.8206, -1);

    SetPlayerPickupType(playerid, PlayerPickup[playerid], 2);
    return 1;
}
```

## 相关函数

- [CreatePlayerPickup](CreatePlayerPickup): 创建仅对单个玩家可见的拾取物
- [DestroyPlayerPickup](DestroyPlayerPickup): 销毁玩家专属拾取物
- [IsValidPlayerPickup](IsValidPlayerPickup): 验证玩家拾取物有效性
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): 检测玩家是否已流加载该拾取物
- [SetPlayerPickupPos](SetPlayerPickupPos): 设置玩家拾取物坐标
- [GetPlayerPickupPos](GetPlayerPickupPos): 获取玩家拾取物位置
- [SetPlayerPickupModel](SetPlayerPickupModel): 设置玩家拾取物模型
- [GetPlayerPickupModel](GetPlayerPickupModel): 获取玩家拾取物模型 ID
- [GetPlayerPickupType](GetPlayerPickupType): 获取玩家拾取物类型
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): 设置玩家拾取物所属虚拟世界
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): 获取玩家拾取物的虚拟世界 ID
