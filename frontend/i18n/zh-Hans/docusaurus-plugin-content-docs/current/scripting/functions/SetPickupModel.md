---
title: SetPickupModel
sidebar_label: SetPickupModel
description: 设置拾取物的模型。
tags: ["拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置拾取物的模型。

| 参数名             | 说明                                   |
| ------------------ | -------------------------------------- |
| pickupid           | 要设置的拾取物 ID                      |
| model              | 要设置的[模型](../resources/pickupids) |
| bool:update = true | 是否立即全局更新拾取物（true/false）   |

## 返回值

本函数永远返回 **true**。

## 示例代码

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);

    SetPickupModel(g_Pickup, 1210);
    return 1;
}
```

## 相关函数

- [CreatePickup](CreatePickup): 创建拾取物
- [AddStaticPickup](AddStaticPickup): 添加静态拾取物
- [DestroyPickup](DestroyPickup): 销毁拾取物
- [IsValidPickup](IsValidPickup): 验证拾取物有效性
- [IsPickupStreamedIn](IsPickupStreamedIn): 检测玩家是否加载了拾取物
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): 检测拾取物是否对玩家隐藏
- [SetPickupPos](SetPickupPos): 设置拾取物坐标
- [GetPickupPos](GetPickupPos): 获取拾取物坐标
- [GetPickupModel](GetPickupModel): 获取拾取物模型 ID
- [SetPickupType](SetPickupType): 设置拾取物类型
- [GetPickupType](GetPickupType): 获取拾取物类型
- [SetPickupVirtualWorld](SetPickupVirtualWorld): 设置拾取物虚拟世界 ID
- [GetPickupVirtualWorld](GetPickupVirtualWorld): 获取拾取物虚拟世界 ID
- [ShowPickupForPlayer](ShowPickupForPlayer): 对玩家显示拾取物
- [HidePickupForPlayer](HidePickupForPlayer): 对玩家隐藏拾取物
- [SetPickupForPlayer](SetPickupForPlayer): 为玩家单独配置拾取物属性

```

```
