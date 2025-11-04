---
title: NPC_SetFightingStyle
sidebar_label: NPC_SetFightingStyle
description: 设置 NPC 的战斗风格，用于近身战斗。
tags: ["npc", "战斗", "战斗风格", "近战攻击"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

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
public OnGameModeInit()
{
    new npcid = NPC_Create("Fighter");
    NPC_Spawn(npcid);

    // 设置拳击战斗风格
    NPC_SetFightingStyle(npcid, FIGHT_STYLE_BOXING);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setboxing", true))
    {
        // 设置 NPC 0 为拳击风格
        NPC_SetFightingStyle(0, FIGHT_STYLE_BOXING);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 现在使用拳击风格");
        return 1;
    }

    if (!strcmp(cmdtext, "/randomstyle", true))
    {
        new styles[] = {
            FIGHT_STYLE_NORMAL,
            FIGHT_STYLE_BOXING,
            FIGHT_STYLE_KUNGFU,
            FIGHT_STYLE_KNEEHEAD,
            FIGHT_STYLE_GRABKICK,
            FIGHT_STYLE_ELBOW
        };

        new style = styles[random(sizeof(styles))];
        NPC_SetFightingStyle(0, style);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 随机战斗风格已设置");
    }

    SendClientMessage(playerid, 0x00FF00FF, "已随机化 NPC 战斗风格");
    return 1;
}
return 0;
}
```

## 注意事项

- 战斗风格影响近身攻击动画和伤害
- 常见风格：NORMAL（普通）、BOXING（拳击）、KUNGFU（功夫）、KNEEHEAD（膝撞）、GRABKICK（抓踢）、ELBOW（肘击）
- 使用 NPC_GetFightingStyle 检查当前风格
- 风格影响攻击动画和战斗效果

## 相关函数

- [NPC_GetFightingStyle](NPC_GetFightingStyle): 获取战斗风格
- [NPC_MeleeAttack](NPC_MeleeAttack): 让 NPC 攻击
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): 检查是否正在攻击
- [NPC_StopMeleeAttack](NPC_StopMeleeAttack): 停止攻击

## 相关回调

- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): NPC 对他人造成伤害时调用
