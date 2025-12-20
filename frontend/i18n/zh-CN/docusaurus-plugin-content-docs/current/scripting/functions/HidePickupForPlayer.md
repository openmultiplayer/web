---
title: HidePickupForPlayer
sidebar_label: HidePickupForPlayer
description: 对指定玩家隐藏拾取物
tags: ["玩家", "拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

对指定玩家隐藏特定拾取物。

| 参数     | 说明                |
| -------- | ------------------- |
| playerid | 玩家 ID             |
| pickupid | 需要隐藏的拾取物 ID |

## 返回值

此函数始终返回 **true**。

## 示例

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    HidePickupForPlayer(playerid, g_Pickup);
    return 1;
}
```

## 相关函数

- [CreatePickup](CreatePickup): 创建拾取物
- [AddStaticPickup](AddStaticPickup): 添加静态拾取物
- [DestroyPickup](DestroyPickup): 销毁拾取物
- [IsValidPickup](IsValidPickup): 检查拾取物是否有效
- [IsPickupStreamedIn](IsPickupStreamedIn): 检查拾取物是否已为玩家流加载
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): 检查拾取物是否对玩家隐藏
- [SetPickupPos](SetPickupPos): 设置拾取物坐标
- [GetPickupPos](GetPickupPos): 获取拾取物坐标
- [SetPickupModel](SetPickupModel): 设置拾取物模型
- [GetPickupModel](GetPickupModel): 获取拾取物模型 ID
- [SetPickupType](SetPickupType): 设置拾取物类型
- [GetPickupType](GetPickupType): 获取拾取物类型
- [SetPickupVirtualWorld](SetPickupVirtualWorld): 设置拾取物虚拟世界 ID
- [GetPickupVirtualWorld](GetPickupVirtualWorld): 获取拾取物虚拟世界 ID
- [ShowPickupForPlayer](ShowPickupForPlayer): 对玩家显示拾取物
- [SetPickupForPlayer](SetPickupForPlayer): 为玩家调整拾取物模型、类型和位置
