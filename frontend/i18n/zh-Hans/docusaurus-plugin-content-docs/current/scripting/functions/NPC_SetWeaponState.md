---
title: NPC_SetWeaponState
sidebar_label: NPC_SetWeaponState
description: 设置NPC的武器状态
tags: ["npc", "武器", "状态"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 的武器状态。

| 参数        | 说明             |
| ----------- | ---------------- |
| npcid       | NPC 的 ID        |
| weaponState | 要设置的武器状态 |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

## 注意事项

- 武器状态控制 NPC 武器的当前动作
- 使用 [NPC_GetWeaponState](NPC_GetWeaponState) 来获取当前状态
- 更改武器状态会影响 NPC 的射击行为

## 相关函数

- [NPC_GetWeaponState](NPC_GetWeaponState): 获取 NPC 武器状态
- [NPC_SetWeapon](NPC_SetWeapon): 设置 NPC 武器
- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 武器
- [NPC_IsReloading](NPC_IsReloading): 检查 NPC 是否正在装弹

## 相关回调函数

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): 当 NPC 武器状态改变时被调用
- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): 当 NPC 开火时被调用
