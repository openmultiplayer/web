---
title: CreatePlayerPickup
sidebar_label: CreatePlayerPickup
description: 创建一个仅对单个玩家可见的拾取物。
tags: ["玩家", "拾取物", "玩家拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

创建一个仅对单个玩家可见的拾取物。

| 参数                             | 说明                                                   |
| -------------------------------- | ------------------------------------------------------ |
| playerid                         | 要为其创建拾取物的玩家 ID                              |
| [model](../resources/pickupids)  | 拾取物的模型 ID                                        |
| [type](../resources/pickuptypes) | 拾取物类型。决定拾取物被拾取时的响应方式               |
| Float:x                          | 拾取物创建的 X 坐标                                    |
| Float:y                          | 拾取物创建的 Y 坐标                                    |
| Float:z                          | 拾取物创建的 Z 坐标                                    |
| virtualWorld                     | 拾取物所在的虚拟世界 ID。使用-1 表示在所有虚拟世界可见 |

## 返回值

返回创建的玩家拾取物 ID，失败时返回 **-1**（达到拾取物数量上限）。

## 示例

```c
new PlayerPickupArmour[MAX_PLAYERS]; // 创建用于存储玩家拾取物ID的变量

public OnPlayerConnect(playerid)
{
    PlayerPickupArmour[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // 创建护甲拾取物并将ID存储在'PlayerPickupArmour[playerid]'中
    return 1;
}
```

## 注意事项

:::tip

- 唯一可以在车辆内拾取的类型是 14（特殊拾取物如贿赂物品除外）
- 拾取物对所有玩家可见，并且所有玩家都可以拾取
- 如果在拾取时使用 DestroyPlayerPickup()，由于网络延迟可能导致多个玩家同时拾取。可通过变量机制规避此问题
- 某些拾取类型自带「自动响应」机制，例如使用 M4 模型会自动给予玩家该武器和弹药
- 需要完全脚本控制的拾取物应使用类型 1

:::

:::warning

已知缺陷：

- 当 X 或 Y 坐标小于-4096.0 或大于 4096.0 时，拾取物将不可见且不会触发 OnPlayerPickUpPlayerPickup 回调

:::

## 相关函数

- [CreatePlayerPickup](CreatePlayerPickup): 创建仅对单个玩家可见的拾取物
- [DestroyPlayerPickup](DestroyPlayerPickup): 销毁玩家拾取物
- [IsValidPlayerPickup](IsValidPlayerPickup): 验证玩家拾取物是否有效
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): 检查玩家拾取物是否已流加载给玩家
- [SetPlayerPickupPos](SetPlayerPickupPos): 设置玩家拾取物坐标
- [GetPlayerPickupPos](GetPlayerPickupPos): 获取玩家拾取物坐标
- [SetPlayerPickupModel](SetPlayerPickupModel): 设置玩家拾取物模型
- [GetPlayerPickupModel](GetPlayerPickupModel): 获取玩家拾取物模型 ID
- [SetPlayerPickupType](SetPlayerPickupType): 设置玩家拾取物类型
- [GetPlayerPickupType](GetPlayerPickupType): 获取玩家拾取物类型
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): 设置玩家拾取物虚拟世界
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): 获取玩家拾取物虚拟世界 ID

## 相关回调

以下回调函数可能与此函数相关：

- [OnPlayerPickUpPlayerPickup](../callbacks/OnPlayerPickUpPlayerPickup): 当玩家拾取玩家拾取物时触发
- [OnPlayerPickupStreamIn](../callbacks/OnPlayerPickupStreamIn): 当玩家拾取物进入玩家可视范围时触发
- [OnPlayerPickupStreamOut](../callbacks/OnPlayerPickupStreamOut): 当玩家拾取物离开玩家可视范围时触发

## 相关资源

- [拾取物 ID 列表](../resources/pickupids)
- [拾取物类型列表](../resources/pickuptypes)
