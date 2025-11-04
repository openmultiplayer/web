---
title: NPC_SetWeaponSkillLevel
sidebar_label: NPC_SetWeaponSkillLevel
description: 设置NPC的武器技能等级
tags: ["npc", "武器", "技能"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 的武器技能等级。

| 参数  | 说明                       |
| ----- | -------------------------- |
| npcid | NPC 的 ID                  |
| skill | 武器技能类型 (WEAPONSKILL) |
| level | 要设置的技能等级 (0-999)   |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

## 注意事项

- 武器技能影响准确度和射击行为
- 技能等级范围从 0（差）到 999（杀手级）
- 不同武器类型有不同的技能类别

## 相关函数

- [NPC_GetWeaponSkillLevel](NPC_GetWeaponSkillLevel): 获取 NPC 武器技能等级
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): 设置武器准确度
- [NPC_GetWeaponAccuracy](NPC_GetWeaponAccuracy): 获取武器准确度
- [NPC_SetWeapon](NPC_SetWeapon): 设置 NPC 武器

## 相关回调函数

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): 当 NPC 开火时被调用
