---
title: IsValidPickup
sidebar_label: IsValidPickup
description: 检测拾取物是否有效。
tags: ["拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定拾取物 ID 是否有效。

| 参数名   | 说明              |
| -------- | ----------------- |
| pickupid | 要检测的拾取物 ID |

## 返回值

当拾取物有效时返回 **true**，无效时返回 **false**

## 示例代码

```c
new g_Pickup; // 全局拾取物存储变量

public OnGameModeInit()
{
    // 在坐标(1503.33,1432.35,10.11)创建防弹衣拾取物
    g_Pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);

    if (IsValidPickup(g_Pickup))
    {
        // 执行有效状态处理
    }
    return 1;
}
```

## 相关函数

- [CreatePickup](CreatePickup): 创建全局拾取物
- [AddStaticPickup](AddStaticPickup): 添加静态拾取物
- [DestroyPickup](DestroyPickup): 销毁拾取物
- [IsPickupStreamedIn](IsPickupStreamedIn): 检测玩家是否加载该拾取物
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): 检测拾取物对玩家是否隐藏
- [SetPickupPos](SetPickupPos): 设置拾取物坐标
- [GetPickupPos](GetPickupPos): 获取拾取物坐标
- [SetPickupModel](SetPickupModel): 设置拾取物模型
- [GetPickupModel](GetPickupModel): 获取拾取物模型 ID
- [SetPickupType](SetPickupType): 设置拾取物类型
- [GetPickupType](GetPickupType): 获取拾取物类型
- [SetPickupVirtualWorld](SetPickupVirtualWorld): 设置拾取物虚拟世界
- [GetPickupVirtualWorld](GetPickupVirtualWorld): 获取拾取物所在虚拟世界
- [ShowPickupForPlayer](ShowPickupForPlayer): 为玩家显示拾取物
- [HidePickupForPlayer](HidePickupForPlayer): 为玩家隐藏拾取物
- [SetPickupForPlayer](SetPickupForPlayer): 为玩家自定义拾取物属性
