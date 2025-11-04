---
title: NPC_GetPlayerMovingTo
sidebar_label: NPC_GetPlayerMovingTo
description: 获取NPC当前正移向的玩家ID
tags: ["npc", "玩家", "移动"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 当前正移向的玩家 ID。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回正移向的玩家 ID，若未向任何玩家移动则返回 `INVALID_PLAYER_ID`。

## 示例

## 注意事项

- 若 NPC 使用 [NPC_MoveToPlayer](NPC_MoveToPlayer) 向玩家移动，则返回玩家 ID
- 若 NPC 未向任何玩家移动，则返回 `INVALID_PLAYER_ID`
- 这与使用 [NPC_Move](NPC_Move) 向固定位置移动不同

## 相关函数

- [NPC_MoveToPlayer](NPC_MoveToPlayer): 使 NPC 向玩家移动
- [NPC_IsMovingToPlayer](NPC_IsMovingToPlayer): 检查 NPC 是否向特定玩家移动
- [NPC_IsMoving](NPC_IsMoving): 检查 NPC 是否正在移动
- [NPC_GetPlayerAimingAt](NPC_GetPlayerAimingAt): 获取 NPC 正在瞄准的玩家

## 相关回调函数

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): 当 NPC 完成移动时被调用
