---
title: IsPickupStreamedIn
sidebar_label: IsPickupStreamedIn
description: 检查指定拾取物是否已为玩家流式加载
tags: ["玩家", "拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测特定拾取物是否已完成对玩家的流式加载过程。

| 参数     | 说明                |
| -------- | ------------------- |
| playerid | 玩家 ID             |
| pickupid | 需要检查的拾取物 ID |

## 返回值

**true** - 拾取物已完成流式加载  
**false** - 未完成加载或拾取物不存在

## 示例

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (IsPickupStreamedIn(playerid, g_Pickup))
    {
        // 当玩家死亡时检测到拾取物已加载
    }
    return 1;
}
```

## 相关函数

- [CreatePickup](CreatePickup): 创建动态拾取物
- [AddStaticPickup](AddStaticPickup): 添加静态拾取物
- [DestroyPickup](DestroyPickup): 销毁拾取物
- [IsValidPickup](IsValidPickup): 验证拾取物有效性
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): 检查拾取物隐藏状态
- [SetPickupPos](SetPickupPos): 设置拾取物坐标
- [GetPickupPos](GetPickupPos): 获取拾取物坐标
- [SetPickupModel](SetPickupModel): 设置显示模型
- [GetPickupModel](GetPickupModel): 获取模型 ID
- [SetPickupType](SetPickupType): 设置拾取物类型
- [GetPickupType](GetPickupType): 获取拾取物类型
- [SetPickupVirtualWorld](SetPickupVirtualWorld): 设置所属虚拟世界
- [GetPickupVirtualWorld](GetPickupVirtualWorld): 获取虚拟世界 ID
- [ShowPickupForPlayer](ShowPickupForPlayer): 对玩家显示拾取物
- [HidePickupForPlayer](HidePickupForPlayer): 对玩家隐藏拾取物
- [SetPickupForPlayer](SetPickupForPlayer): 自定义玩家专属拾取物属性
