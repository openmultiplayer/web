---
title: CreatePickup
sidebar_label: CreatePickup
description: 创建可追踪的拾取物，功能类似AddStaticPickup但支持后续销毁和拾取检测。
tags: ["拾取物"]
---

## 描述

本函数功能与 AddStaticPickup 相同，但会返回可用于后续销毁操作的拾取物 ID，并能通过 OnPlayerPickUpPickup 回调追踪拾取事件。

| 参数名                           | 说明                                       |
| -------------------------------- | ------------------------------------------ |
| [model](../resources/pickupids)  | 拾取物[模型 ID](../resources/pickupids)    |
| [type](../resources/pickuptypes) | 拾取物[行为类型](../resources/pickuptypes) |
| Float:x                          | X 轴坐标                                   |
| Float:y                          | Y 轴坐标                                   |
| Float:z                          | Z 轴坐标                                   |
| virtualWorld                     | 所属虚拟世界 ID（-1 表示全可见）           |

## 返回值

成功返回拾取物 ID，达到数量上限时返回-1。

## 应用示例

```c
new pickup_Armour; // 创建变量存储拾取物ID

public OnGameModeInit()
{
    // 在坐标(1503.3359,1432.3585,10.1191)创建护甲拾取物
    pickup_Armour = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);
    return 1;
}

// 后续操作示例
DestroyPickup(pickup_Armour); // 使用ID销毁拾取物
pickup_Armour = 0; // 重置变量避免冲突
```

## 注意事项

:::tip

- 仅类型 14 的拾取物支持车辆内拾取（特殊类型如贿赂物品例外）
- 所有玩家可见且可拾取
- 使用 DestroyPickup 时可能出现多人同时拾取（需通过变量控制）
- 特定模型会触发自动响应（如 M4 模型自动给予武器）
- 完全脚本控制的拾取物建议使用类型 1

:::

:::warning

已知问题：

- 当 X/Y 坐标超出 ±4096 范围时，拾取物不可见且不会触发拾取回调

:::

## 关联函数

- [AddStaticPickup](AddStaticPickup): 创建静态拾取物
- [DestroyPickup](DestroyPickup): 销毁拾取物
- [IsValidPickup](IsValidPickup): 验证有效性
- [IsPickupStreamedIn](IsPickupStreamedIn): 检测流加载状态
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): 检测玩家可见性
- [SetPickupPos](SetPickupPos): 设置坐标
- [GetPickupPos](GetPickupPos): 获取坐标
- [SetPickupModel](SetPickupModel): 更换模型
- [GetPickupModel](GetPickupModel): 获取当前模型
- [SetPickupType](SetPickupType): 修改行为类型
- [GetPickupType](GetPickupType): 获取当前类型
- [SetPickupVirtualWorld](SetPickupVirtualWorld): 设置虚拟世界
- [GetPickupVirtualWorld](GetPickupVirtualWorld): 获取虚拟世界
- [ShowPickupForPlayer](ShowPickupForPlayer): 对玩家显示
- [HidePickupForPlayer](HidePickupForPlayer): 对玩家隐藏
- [SetPickupForPlayer](SetPickupForPlayer): 自定义玩家专属属性
- [CreatePlayerPickup](CreatePlayerPickup): 创建玩家私有拾取物
- [DestroyPlayerPickup](DestroyPlayerPickup): 销毁私有拾取物

## 关联回调

- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): 玩家拾取时触发
- [OnPickupStreamIn](../callbacks/OnPickupStreamIn): 流加载时触发
- [OnPickupStreamOut](../callbacks/OnPickupStreamOut): 流卸载时触发

## 扩展阅读

- [拾取物模型列表](../resources/pickupids)
- [拾取物类型说明](../resources/pickuptypes)
