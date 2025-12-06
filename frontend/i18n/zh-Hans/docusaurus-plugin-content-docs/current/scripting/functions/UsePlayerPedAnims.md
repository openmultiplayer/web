---
title: UsePlayerPedAnims
sidebar_label: UsePlayerPedAnims
description: 强制所有玩家使用标准骨骼动画（CJ角色动画），覆盖皮肤专属动画（如滑板皮肤的滑行动作）
tags: ["玩家"]
---

## 描述

启用全局标准角色动画系统，所有玩家将统一使用 CJ 模型的骨骼动画，覆盖各皮肤自带的特殊动画（例如滑板皮肤将禁用滑行动作）。

## 示例代码

```c
public OnGameModeInit()
{
    UsePlayerPedAnims(); // 在游戏模式初始化时启用标准动画
    return 1;
}
```

## 注意事项

:::tip

- 本函数必须置于[OnGameModeInit](../callbacks/OnGameModeInit)回调中才能生效
- 未启用时，部分双手持武器（非双持武器）可能错误显示为单手持握状态

:::

:::tip

可通过[config.json](../../server/config.json)配置文件全局启用标准动画：

```json
"use_player_ped_anims": true,  // 启用标准骨骼动画系统
```

:::

## 相关函数

- [ApplyAnimation](ApplyAnimation): 为玩家应用特定动画
- [ClearAnimations](ClearAnimations): 清除玩家的当前动画
