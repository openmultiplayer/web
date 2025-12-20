---
title: NPC_SetHealth
sidebar_label: NPC_SetHealth
description: 设置 NPC 的生命值。
tags: ["npc", "生命值"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 的生命值。

| 参数   | 说明           |
| ------ | -------------- |
| npcid  | NPC 的 ID      |
| health | 要设置的生命值 |

## 返回值

如果生命值设置成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/sethealth ", true, 11))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:health = floatstr(cmdtext[11]);
        if (health < 0.0 || health > 100.0)
            return SendClientMessage(playerid, 0xFF0000FF, "生命值必须在0.0到100.0之间。");

        NPC_SetHealth(npcid, health);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 生命值设置为 %.1f", npcid, health);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 生命值通常范围从 0.0 到 100.0，但可以设置更高
- 将生命值设置为 0.0 会杀死 NPC
- NPC 默认出生时生命值为 100.0

## 相关函数

- [NPC_GetHealth](NPC_GetHealth): 获取 NPC 生命值
- [NPC_SetArmour](NPC_SetArmour): 设置 NPC 护甲
- [NPC_GetArmour](NPC_GetArmour): 获取 NPC 护甲
- [NPC_IsDead](NPC_IsDead): 检查 NPC 是否死亡
- [NPC_SetInvulnerable](NPC_SetInvulnerable): 使 NPC 无敌

## 相关回调

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): NPC 受到伤害时调用
- [OnNPCDeath](../callbacks/OnNPCDeath): NPC 死亡时调用
