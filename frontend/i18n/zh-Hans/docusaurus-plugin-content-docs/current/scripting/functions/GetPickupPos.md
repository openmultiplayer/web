---
title: GetPickupPos
sidebar_label: GetPickupPos
description: 获取拾取物的坐标
tags: ["拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取拾取物的坐标。

| 名称     | 描述                                |
| -------- | ----------------------------------- |
| pickupid | 需要获取坐标的拾取物 ID             |
| &Float:x | 存储 X 坐标的浮点变量，通过引用传递 |
| &Float:y | 存储 Y 坐标的浮点变量，通过引用传递 |
| &Float:z | 存储 Z 坐标的浮点变量，通过引用传递 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定拾取物不存在）

## 示例代码

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);

    new
        Float:x,
        Float:y,
        Float:z;

    GetPickupPos(g_Pickup, x, y, z);
    // x = 1686.6160
    // y = 1455.4277
    // z = 10.7705
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
- [SetPickupModel](SetPickupModel): 设置拾取物模型
- [GetPickupModel](GetPickupModel): 获取拾取物模型 ID
- [SetPickupType](SetPickupType): 设置拾取物类型
- [GetPickupType](GetPickupType): 获取拾取物类型
- [SetPickupVirtualWorld](SetPickupVirtualWorld): 设置拾取物虚拟世界
- [GetPickupVirtualWorld](GetPickupVirtualWorld): 获取拾取物所属虚拟世界
- [ShowPickupForPlayer](ShowPickupForPlayer): 为玩家显示拾取物
- [HidePickupForPlayer](HidePickupForPlayer): 对玩家隐藏拾取物
- [SetPickupForPlayer](SetPickupForPlayer): 为玩家自定义拾取物属性
