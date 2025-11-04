---
title: NPC_Kill
sidebar_label: NPC_Kill
description: 使用特定武器/原因杀死NPC
tags: ["npc", "死亡", "杀死"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

使用特定武器/原因杀死 NPC。

| 参数     | 说明                                                       |
| -------- | ---------------------------------------------------------- |
| npcid    | 要杀死的 NPC 的 ID                                         |
| killerid | 杀死 NPC 的玩家 ID（可选，无杀手时使用 INVALID_PLAYER_ID） |
| reason   | 武器 ID 或死亡原因（默认：255 表示自杀）                   |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

## 注意事项

- 将 NPC 的生命值设置为 0 也会杀死它
- 若没有杀手，killerid 使用 `INVALID_PLAYER_ID`
- reason 参数使用武器 ID（WEAPON 枚举）
- 这会触发 [OnNPCDeath](../callbacks/OnNPCDeath) 回调函数

## 相关函数

- [NPC_SetHealth](NPC_SetHealth): 设置 NPC 生命值
- [NPC_GetHealth](NPC_GetHealth): 获取 NPC 生命值
- [NPC_IsDead](NPC_IsDead): 检查 NPC 是否死亡
- [NPC_Respawn](NPC_Respawn): 重新生成 NPC

## 相关回调函数

- [OnNPCDeath](../callbacks/OnNPCDeath): 当 NPC 死亡时被调用
- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): 当 NPC 受到伤害时被调用
