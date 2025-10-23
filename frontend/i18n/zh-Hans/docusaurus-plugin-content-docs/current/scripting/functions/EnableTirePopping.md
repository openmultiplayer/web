---
title: EnableTirePopping
sidebar_label: EnableTirePopping
description: 通过此函数可以启用或禁用轮胎爆胎效果。
tags: []
---

## 描述

通过此函数可以启用或禁用车辆轮胎爆胎机制。

| 名称        | 描述                                   |
| ----------- | -------------------------------------- |
| bool:enable | true 启用轮胎爆胎 / false 禁用轮胎爆胎 |

## 返回值

该函数不返回特定值。

## 示例

```c
public OnGameModeInit()
{
    // 这将禁用游戏模式中的轮胎爆胎机制
    EnableTirePopping(false);
    return 1;
}
```

## 注意事项

:::warning

- 该函数已在 SA-MP 0.3 版本移除
- 轮胎爆胎机制默认启用
- 若需禁用该功能，需通过 [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate) 回调手动实现

:::

## 相关函数

- [SetPlayerTeam](SetPlayerTeam): 设置玩家队伍
