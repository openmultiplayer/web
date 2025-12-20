---
title: NPC_GetFightingStyle
sidebar_label: NPC_GetFightingStyle
description: 获取 NPC 的战斗风格。
tags: ["npc", "战斗风格"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 的战斗风格。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 的战斗风格 ID。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkfightingstyle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new style = NPC_GetFightingStyle(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 的战斗风格: %d", npcid, style);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 战斗风格影响近战动画和伤害
- 每种风格都有不同的拳击和踢腿动画
- 默认战斗风格为 FIGHT_STYLE_NORMAL

## 相关函数

- [NPC_SetFightingStyle](NPC_SetFightingStyle): 设置 NPC 战斗风格
- [NPC_MeleeAttack](NPC_MeleeAttack): 使 NPC 执行近战攻击
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): 检查 NPC 是否正在攻击

## 相关回调

- [../callbacks/OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): NPC 对他人造成伤害时调用
