---
title: NPC_SetFightingStyle
sidebar_label: NPC_SetFightingStyle
description: 设置 NPC 的战斗风格，用于近身战斗。
tags: ["npc", "战斗", "战斗风格", "近战攻击"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 的战斗风格，用于近身战斗。

| 参数  | 说明        |
| ----- | ----------- |
| npcid | NPC 的 ID   |
| style | 战斗风格 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setfightingstyle ", true, 18))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new styleid = strval(cmdtext[18]);
        // 有效的战斗风格: 4, 5, 6, 7, 15, 16
        if (styleid != 4 && styleid != 5 && styleid != 6 && styleid != 7 && styleid != 15 && styleid != 16)
            return SendClientMessage(playerid, 0xFF0000FF, "无效的风格。有效：4（普通），5（拳击），6（功夫），7（膝击），15（抓踢），16（肘击）");

        NPC_SetFightingStyle(npcid, FIGHT_STYLE:styleid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 战斗风格设置为 %d", npcid, styleid);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 战斗风格影响近身攻击动画和伤害
- 使用 NPC_GetFightingStyle 检查当前风格
- 风格影响攻击动画和战斗效果

## 相关函数

- [NPC_GetFightingStyle](NPC_GetFightingStyle): 获取战斗风格
- [NPC_MeleeAttack](NPC_MeleeAttack): 让 NPC 攻击
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): 检查是否正在攻击
- [NPC_StopMeleeAttack](NPC_StopMeleeAttack): 停止攻击

## 相关资源

- [战斗风格](../resources/fightingstyles)

## 相关回调

- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): NPC 对他人造成伤害时调用
