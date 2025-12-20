---
title: NPC_IsInvulnerable
sidebar_label: NPC_IsInvulnerable
description: 检查 NPC 是否对伤害免疫。
tags: ["npc", "无敌", "伤害", "保护"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 是否对伤害免疫。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 免疫伤害则返回 true，否则返回 false。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkinvulnerable", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isInvulnerable = NPC_IsInvulnerable(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 伤害免疫: %s", npcid, isInvulnerable ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回由`NPC_SetInvulnerable`设置的免疫状态
- NPC 在创建时默认是脆弱的

## 相关函数

- [NPC_SetInvulnerable](NPC_SetInvulnerable): 设置 NPC 免疫性
- [NPC_IsValid](NPC_IsValid): 检查 NPC ID 是否有效
- [NPC_IsDead](NPC_IsDead): 检查 NPC 是否死亡
- [NPC_GetHealth](NPC_GetHealth): 获取 NPC 生命值

## 相关回调

- [../callbacks/OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): NPC 受到伤害时调用（免疫 NPC 不会调用）
- [../callbacks/OnNPCDeath](../callbacks/OnNPCDeath): NPC 死亡时调用（免疫 NPC 不会死亡）
