---
title: NPC_GetPlayerAimingAt
sidebar_label: NPC_GetPlayerAimingAt
description: 获取NPC当前瞄准的玩家ID
tags: ["npc", "玩家", "瞄准", "武器"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 当前瞄准的玩家 ID。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回被瞄准的玩家 ID，若未瞄准任何玩家则返回 `INVALID_PLAYER_ID`。

## 示例

## 注意事项

- 若 NPC 使用 [NPC_AimAtPlayer](NPC_AimAtPlayer) 瞄准玩家，则返回玩家 ID
- 若 NPC 未瞄准任何玩家，则返回 `INVALID_PLAYER_ID`
- 这与使用 [NPC_AimAt](NPC_AimAt) 瞄准固定位置不同

## 相关函数

- [NPC_AimAtPlayer](NPC_AimAtPlayer): 使 NPC 瞄准玩家
- [NPC_IsAimingAtPlayer](NPC_IsAimingAtPlayer): 检查 NPC 是否瞄准特定玩家
- [NPC_IsAiming](NPC_IsAiming): 检查 NPC 是否正在瞄准
- [NPC_GetPlayerMovingTo](NPC_GetPlayerMovingTo): 获取 NPC 正在移动向的玩家

## 相关回调函数

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): 当 NPC 开火时被调用
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): 当 NPC 对玩家造成伤害时被调用
