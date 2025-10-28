---
title: DestroyPickup
sidebar_label: DestroyPickup
description: 销毁通过 CreatePickup 创建的拾取物。
tags: ["拾取物"]
---

## 描述

销毁通过 CreatePickup 创建的拾取物。

| 参数   | 说明                                      |
| ------ | ----------------------------------------- |
| pickup | 要销毁的拾取物 ID（由 CreatePickup 返回） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定拾取物不存在）

## 示例

```c
new g_PickupArmour;

// 创建护甲拾取物
g_PickupArmour = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191);

// 一段时间后...
DestroyPickup(g_PickupArmour);
```

## 相关函数

- [CreatePickup](CreatePickup): 创建拾取物
- [IsValidPickup](IsValidPickup): 检查拾取物是否有效

## 相关回调

- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): 当玩家拾取拾取物时调用
