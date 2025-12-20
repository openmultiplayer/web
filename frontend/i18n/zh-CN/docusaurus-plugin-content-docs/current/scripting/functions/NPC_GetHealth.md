---
title: NPC_GetHealth
sidebar_label: NPC_GetHealth
description: 获取 NPC 的生命值。
tags: ["npc", "生命值"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 的生命值。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 的生命值（浮点数）。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkhealth", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:health = NPC_GetHealth(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 的生命值： %.2f", npcid, health);
    }
    return 0;
}
```

## 注意事项

- 生命值通常范围在 0.0 到 100.0 之间
- 生命值为 0.0 的 NPC 被视为已死亡

## 相关函数

- [NPC_SetHealth](NPC_SetHealth): 设置 NPC 生命值
- [NPC_GetArmour](NPC_GetArmour): 获取 NPC 护甲
- [NPC_SetArmour](NPC_SetArmour): 设置 NPC 护甲
- [NPC_IsDead](NPC_IsDead): 检查 NPC 是否死亡

## 相关回调

- [../callbacks/OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): NPC 受到伤害时调用
- [../callbacks/OnNPCDeath](../callbacks/OnNPCDeath): NPC 死亡时调用
