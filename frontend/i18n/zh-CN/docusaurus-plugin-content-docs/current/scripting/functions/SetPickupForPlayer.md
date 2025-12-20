---
title: SetPickupForPlayer
sidebar_label: SetPickupForPlayer
description: 为指定玩家调整拾取物的模型、类型和位置。
tags: ["玩家", "拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

:::warning

此函数尚未实现

:::

## 描述

为指定玩家调整拾取物的模型、类型和位置。

| 参数     | 说明                                 |
| -------- | ------------------------------------ |
| playerid | 目标玩家 ID                          |
| pickupid | 要调整的拾取物 ID                    |
| model    | [模型 ID](../resources/pickupids)    |
| type     | [拾取类型](../resources/pickuptypes) |
| Float:x  | 新的 X 坐标                          |
| Float:y  | 新的 Y 坐标                          |
| Float:z  | 新的 Z 坐标                          |

## 返回值

此函数始终返回 **true**

## 示例代码

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z);
    SetPickupForPlayer(playerid, g_Pickup, 1210, 2, x + 2.0, y + 2.0, z);
    return 1;
}
```

## 相关函数

- [CreatePickup](CreatePickup): 创建拾取物
- [AddStaticPickup](AddStaticPickup): 添加静态拾取物
- [DestroyPickup](DestroyPickup): 销毁拾取物
- [IsValidPickup](IsValidPickup): 验证拾取物有效性
- [IsPickupStreamedIn](IsPickupStreamedIn): 检查拾取物是否已流加载给玩家
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): 检查拾取物是否对玩家隐藏
- [SetPickupPos](SetPickupPos): 设置拾取物坐标
- [GetPickupPos](GetPickupPos): 获取拾取物坐标
- [SetPickupModel](SetPickupModel): 设置拾取物模型
- [GetPickupModel](GetPickupModel): 获取拾取物模型 ID
- [SetPickupType](SetPickupType): 设置拾取物类型
- [GetPickupType](GetPickupType): 获取拾取物类型
- [SetPickupVirtualWorld](SetPickupVirtualWorld): 设置拾取物虚拟世界
- [GetPickupVirtualWorld](GetPickupVirtualWorld): 获取拾取物虚拟世界 ID
- [ShowPickupForPlayer](ShowPickupForPlayer): 对玩家显示拾取物
- [HidePickupForPlayer](HidePickupForPlayer): 对玩家隐藏拾取物
