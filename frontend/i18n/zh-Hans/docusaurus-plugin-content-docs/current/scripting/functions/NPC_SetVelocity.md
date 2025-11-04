---
title: NPC_SetVelocity
sidebar_label: NPC_SetVelocity
description: 设置NPC的速度
tags: ["npc", "速度", "移动"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 的速度。

| 参数    | 说明       |
| ------- | ---------- |
| npcid   | NPC 的 ID  |
| Float:x | X 速度分量 |
| Float:y | Y 速度分量 |
| Float:z | Z 速度分量 |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

## 注意事项

- 速度值决定了移动的速度和方向
- 正 Z 值使 NPC 向上移动，负值使 NPC 向下移动
- 这可用于创建自定义移动行为

## 相关函数

- [NPC_GetVelocity](NPC_GetVelocity): 获取 NPC 速度
- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置
- [NPC_Move](NPC_Move): 使 NPC 移动到指定位置

## 相关回调函数

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): 当 NPC 完成移动时被调用
