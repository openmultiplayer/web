---
title: GetPickupType
sidebar_label: GetPickupType
description: 获取拾取物的类型
tags: ["拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取拾取物的类型。

| 参数     | 说明                    |
| -------- | ----------------------- |
| pickupid | 需要获取类型的拾取物 ID |

## 返回值

返回拾取物的类型，  
当拾取物无效时返回 **-1**。

## 示例代码

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);

    new type = GetPickupType(g_Pickup);
    // type = 1
    return 1;
}
```

## 相关函数

- [CreatePickup](CreatePickup): 创建拾取物
- [AddStaticPickup](AddStaticPickup): 添加静态拾取物
- [DestroyPickup](DestroyPickup): 销毁拾取物
- [IsValidPickup](IsValidPickup): 验证拾取物有效性
- [IsPickupStreamedIn](IsPickupStreamedIn): 检测拾取物是否对玩家流加载
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): 检测拾取物是否对玩家隐藏
- [SetPickupPos](SetPickupPos): 设置拾取物坐标
- [GetPickupPos](GetPickupPos): 获取拾取物坐标
- [SetPickupModel](SetPickupModel): 设置拾取物模型
- [GetPickupModel](GetPickupModel): 获取拾取物模型 ID
- [SetPickupType](SetPickupType): 设置拾取物类型
- [SetPickupVirtualWorld](SetPickupVirtualWorld): 设置拾取物虚拟世界
- [GetPickupVirtualWorld](GetPickupVirtualWorld): 获取拾取物所属虚拟世界
- [ShowPickupForPlayer](ShowPickupForPlayer): 为玩家显示拾取物
- [HidePickupForPlayer](HidePickupForPlayer): 对玩家隐藏拾取物
- [SetPickupForPlayer](SetPickupForPlayer): 为玩家自定义拾取物属性
