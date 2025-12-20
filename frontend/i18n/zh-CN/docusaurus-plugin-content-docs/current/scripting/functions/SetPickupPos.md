---
title: SetPickupPos
sidebar_label: SetPickupPos
description: 设置拾取物的位置
tags: ["拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置拾取物的位置

| 参数               | 说明                                          |
| ------------------ | --------------------------------------------- |
| pickupid           | 要设置的拾取物 ID                             |
| Float:x            | 拾取物新的 X 坐标                             |
| Float:y            | 拾取物新的 Y 坐标                             |
| Float:z            | 拾取物新的 Z 坐标                             |
| bool:update = true | 是否立即为所有玩家更新拾取物位置 (true/false) |

## 返回值

此函数始终返回 **true**

## 示例

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);

    SetPickupPos(g_Pickup, 1958.5488, 1344.9137, 15.3613);
    return 1;
}
```

## 相关函数

- [CreatePickup](CreatePickup): 创建一个拾取物
- [AddStaticPickup](AddStaticPickup): 添加静态拾取物
- [DestroyPickup](DestroyPickup): 销毁拾取物
- [IsValidPickup](IsValidPickup): 验证拾取物是否有效
- [IsPickupStreamedIn](IsPickupStreamedIn): 检查拾取物是否已为指定玩家流加载
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): 检查拾取物是否对指定玩家隐藏
- [GetPickupPos](GetPickupPos): 获取拾取物坐标
- [SetPickupModel](SetPickupModel): 设置拾取物模型
- [GetPickupModel](GetPickupModel): 获取拾取物模型 ID
- [SetPickupType](SetPickupType): 设置拾取物类型
- [GetPickupType](GetPickupType): 获取拾取物类型
- [SetPickupVirtualWorld](SetPickupVirtualWorld): 设置拾取物的虚拟世界 ID
- [GetPickupVirtualWorld](GetPickupVirtualWorld): 获取拾取物的虚拟世界 ID
- [ShowPickupForPlayer](ShowPickupForPlayer): 为指定玩家显示拾取物
- [HidePickupForPlayer](HidePickupForPlayer): 对指定玩家隐藏拾取物
- [SetPickupForPlayer](SetPickupForPlayer): 为指定玩家调整拾取物模型、类型和位置
