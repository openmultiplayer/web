---
title: IsPlayerPickupStreamedIn
sidebar_label: IsPlayerPickupStreamedIn
description: 检测某个玩家拾取物是否已为该玩家加载。
tags: ["玩家", "拾取物", "玩家拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定玩家的专属拾取物是否已完成流加载。

| 参数名   | 说明                  |
| -------- | --------------------- |
| playerid | 要检测的玩家 ID       |
| pickupid | 要检测的玩家拾取物 ID |

## 返回值

当目标拾取物已完成流加载时返回 **true**，未加载时返回 **false**。

## 示例代码

```c
new PlayerPickup[MAX_PLAYERS]; // 创建变量存储玩家拾取物ID

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // 创建防弹衣拾取物并存储ID到变量
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (IsPlayerPickupStreamedIn(playerid, PlayerPickup[playerid]))
    {
        // 执行相关逻辑
    }
    return 1;
}
```

## 相关函数

- [CreatePlayerPickup](CreatePlayerPickup): 创建专属玩家的拾取物
- [DestroyPlayerPickup](DestroyPlayerPickup): 销毁玩家专属拾取物
- [IsValidPlayerPickup](IsValidPlayerPickup): 验证玩家拾取物有效性
- [SetPlayerPickupPos](SetPlayerPickupPos): 设置玩家拾取物坐标
- [GetPlayerPickupPos](GetPlayerPickupPos): 获取玩家拾取物坐标
- [SetPlayerPickupModel](SetPlayerPickupModel): 设置拾取物模型
- [GetPlayerPickupModel](GetPlayerPickupModel): 获取拾取物模型 ID
- [SetPlayerPickupType](SetPlayerPickupType): 设置拾取物类型
- [GetPlayerPickupType](GetPlayerPickupType): 获取拾取物类型
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): 设置拾取物虚拟世界
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): 获取拾取物所在虚拟世界
