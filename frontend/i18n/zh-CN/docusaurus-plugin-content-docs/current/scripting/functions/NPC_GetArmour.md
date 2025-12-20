---
title: NPC_GetArmour
sidebar_label: NPC_GetArmour
description: 获取 NPC 的护甲值。
tags: ["npc", "生命值"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 的护甲值。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 的护甲值（浮点数，范围 0.0 到 100.0）。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkarmour", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:armour = NPC_GetArmour(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 有 %.1f%% 护甲", npcid, armour);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 护甲值范围从 0.0 到 100.0
- NPC 默认护甲值为 0.0，使用 [NPC_SetArmour](NPC_SetArmour) 设置更高的值

## 相关函数

- [NPC_SetArmour](NPC_SetArmour): 设置 NPC 护甲
- [NPC_GetHealth](NPC_GetHealth): 获取 NPC 生命值
- [NPC_SetHealth](NPC_SetHealth): 设置 NPC 生命值
- [NPC_IsDead](NPC_IsDead): 检查 NPC 是否死亡

## 相关回调

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): NPC 受到伤害时调用
- [OnNPCDeath](../callbacks/OnNPCDeath): NPC 死亡时调用
