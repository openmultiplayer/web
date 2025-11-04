---
title: OnNPCSpawn
sidebar_label: OnNPCSpawn
description: 当 NPC 生成时调用此回调。
tags: ["npc"]
---

## 描述

当 NPC 生成时调用此回调。

| 参数  | 说明             |
| ----- | ---------------- |
| npcid | 生成的 NPC 的 ID |

## 示例

```c
public OnNPCSpawn(npcid)
{
    printf("NPC %d 已生成", npcid);

    // 设置初始属性
    NPC_SetHealth(npcid, 100.0);
    NPC_SetArmour(npcid, 0.0);
    NPC_SetWeapon(npcid, WEAPON_COLT45);

    return true;
}
```

## 注意事项

- 当 `NPC_Spawn` 成功执行时调用此回调
- NPC 在游戏世界中变得可见和可交互
- 您可以在此回调中设置 NPC 的初始属性和行为
- NPC 的状态会自动设置为默认值（100 生命值，0 护甲，拳头武器）

## 相关函数

- [NPC_Spawn](../functions/NPC_Spawn): 在游戏世界中生成 NPC
- [NPC_Respawn](../functions/NPC_Respawn): 重生死亡的 NPC
- [NPC_SetHealth](../functions/NPC_SetHealth): 设置 NPC 的生命值
- [NPC_SetWeapon](../functions/NPC_SetWeapon): 设置 NPC 的武器

## 相关回调

- [OnNPCCreate](OnNPCCreate): 当 NPC 被创建时调用
- [OnNPCRespawn](OnNPCRespawn): 当 NPC 重生时调用
- [OnNPCDeath](OnNPCDeath): 当 NPC 死亡时调用
- [OnPlayerSpawn](OnPlayerSpawn): 当玩家生成时调用
