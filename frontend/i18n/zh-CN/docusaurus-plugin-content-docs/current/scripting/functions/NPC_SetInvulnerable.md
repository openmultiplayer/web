---
title: NPC_SetInvulnerable
sidebar_label: NPC_SetInvulnerable
description: 设置 NPC 是否对伤害免疫。
tags: ["npc", "无敌", "伤害", "保护"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 是否对伤害免疫。

| 参数   | 说明                            |
| ------ | ------------------------------- |
| npcid  | NPC 的 ID                       |
| toggle | true 设为无敌，false 设为可受伤 |

## 返回值

如果免疫状态设置成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/toggleinvulnerable", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:invulnerable = NPC_IsInvulnerable(npcid);
        NPC_SetInvulnerable(npcid, !invulnerable);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 伤害免疫: %s", npcid, !invulnerable ? "启用" : "禁用");

        return 1;
    }
    return 0;
}
```

## 注意事项

- 免疫的 NPC 不会受到武器、爆炸或其他伤害来源的伤害
- 此设置会持续到被更改或 NPC 被销毁
- 免疫的 NPC 仍然可以被移动、传送或更改动画

## 相关函数

- [NPC_IsInvulnerable](NPC_IsInvulnerable): 检查 NPC 是否无敌
- [NPC_SetHealth](NPC_SetHealth): 设置 NPC 生命值
- [NPC_GetHealth](NPC_GetHealth): 获取 NPC 生命值
- [NPC_SetArmour](NPC_SetArmour): 设置 NPC 护甲

## 相关回调

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): NPC 受到伤害时调用（免疫的 NPC 不会调用）
- [OnNPCDeath](../callbacks/OnNPCDeath): NPC 死亡时调用（免疫的 NPC 不会死亡）
