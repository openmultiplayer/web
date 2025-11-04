---
title: NPC_IsDead
sidebar_label: NPC_IsDead
description: 检查 NPC 是否死亡。
tags: ["npc"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 是否死亡。

| 参数  | 说明               |
| ----- | ------------------ |
| npcid | 要检查的 NPC 的 ID |

## 返回值

如果 NPC 已死亡则返回`true`，否则返回`false`。

## 示例

```c
public OnNPCTakeDamage(npcid, damagerid, Float:damage, WEAPON:weapon, bodypart)
{
    if (NPC_IsDead(npcid))
    {
        printf("NPC %d已经死亡！", npcid);
        return 1;
    }

    new const Float:health = NPC_GetHealth(npcid);
    printf("NPC %d受到%.1f点伤害，剩余生命值：%.1f", npcid, damage, health);
    return 1;
}
```

## 注意事项

:::warning

- 当 NPC 的生命值达到 0.0 或以下时被视为死亡。
- 死亡的 NPC 可以使用[NPC_Respawn](NPC_Respawn)重生。

:::

## 相关函数

- [NPC_GetHealth](NPC_GetHealth): 获取 NPC 的生命值
- [NPC_SetHealth](NPC_SetHealth): 设置 NPC 的生命值
- [NPC_Respawn](NPC_Respawn): 重生 NPC

## 相关回调

- [../callbacks/OnNPCDeath](../callbacks/OnNPCDeath): NPC 死亡时调用
- [../callbacks/OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): NPC 受到伤害时调用
