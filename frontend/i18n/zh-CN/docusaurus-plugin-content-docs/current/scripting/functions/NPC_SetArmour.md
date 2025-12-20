---
title: NPC_SetArmour
sidebar_label: NPC_SetArmour
description: 设置 NPC 的护甲等级。
tags: ["npc", "护甲值", "生命值"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 的护甲等级。

| 参数   | 说明                  |
| ------ | --------------------- |
| npcid  | NPC 的 ID             |
| armour | 护甲数量（0.0-100.0） |

## 返回值

如果护甲设置成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setarmour ", true, 11))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:armour = floatstr(cmdtext[11]);
        if (armour < 0.0 || armour > 100.0)
            return SendClientMessage(playerid, 0xFF0000FF, "护甲必须在0.0和100.0之间。");

        NPC_SetArmour(npcid, armour);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 护甲设置为 %.1f", npcid, armour);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 护甲值范围从 0.0（无护甲）到 100.0（满护甲）
- 护甲在生命值受影响前吸收伤害
- 使用 NPC_GetArmour 检查当前护甲等级

## 相关函数

- [NPC_GetArmour](NPC_GetArmour): 获取 NPC 护甲等级
- [NPC_SetHealth](NPC_SetHealth): 设置 NPC 生命值
- [NPC_GetHealth](NPC_GetHealth): 获取 NPC 生命值
- [NPC_IsDead](NPC_IsDead): 检查 NPC 是否死亡

## 相关回调

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): NPC 受到伤害时调用
- [OnNPCDeath](../callbacks/OnNPCDeath): NPC 死亡时调用
