---
title: IsValidPlayerPickup
sidebar_label: IsValidPlayerPickup
description: 检测玩家专属拾取物有效性
tags: ["玩家", "拾取物", "玩家拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定玩家的专属拾取物是否有效。

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 要检测的玩家 ID   |
| pickupid | 玩家专属拾取物 ID |

## 返回值

当玩家专属拾取物有效时返回 **true**，无效时返回 **false**

## 示例代码

```c
new PlayerPickup[MAX_PLAYERS]; // 声明玩家拾取物存储数组

public OnPlayerConnect(playerid)
{
    // 在坐标(2010.0979,1222.0642,10.8206)创建防弹衣拾取物
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);

    if (IsValidPlayerPickup(playerid, PlayerPickup[playerid]))
    {
        // 执行有效状态处理
    }
    return 1;
}
```

## 相关函数

- [CreatePlayerPickup](CreatePlayerPickup): 创建玩家专属拾取物
- [DestroyPlayerPickup](DestroyPlayerPickup): 销毁玩家专属拾取物
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): 检测玩家是否加载该拾取物
- [SetPlayerPickupPos](SetPlayerPickupPos): 设置玩家专属拾取物坐标
- [GetPlayerPickupPos](GetPlayerPickupPos): 获取玩家专属拾取物坐标
- [SetPlayerPickupModel](SetPlayerPickupModel): 设置玩家专属拾取物模型
- [GetPlayerPickupModel](GetPlayerPickupModel): 获取玩家专属拾取物模型 ID
- [SetPlayerPickupType](SetPlayerPickupType): 设置玩家专属拾取物类型
- [GetPlayerPickupType](GetPlayerPickupType): 获取玩家专属拾取物类型
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): 设置玩家专属拾取物虚拟世界
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): 获取玩家专属拾取物所在虚拟世界
