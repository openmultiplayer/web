---
title: NPC_MeleeAttack
sidebar_label: NPC_MeleeAttack
description: 让 NPC 执行近战攻击。
tags: ["npc", "战斗", "近战攻击"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

让 NPC 执行指定持续时间的近战攻击。

| 参数            | 说明                            |
| --------------- | ------------------------------- |
| npcid           | NPC 的 ID                       |
| time            | 攻击持续时间                    |
| secondaryAttack | 是否使用次要攻击（默认: false） |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("CombatTrainer");
    NPC_Spawn(npcid);
    NPC_SetFightingStyle(npcid, FIGHT_STYLE_BOXING);

    // 设置战斗训练例程
    SetTimer("CombatTraining", 5000, true);

    return 1;
}

forward CombatTraining();
public CombatTraining()
{
    if (NPC_IsValid(0) && !NPC_IsDead(0))
    {
        // 在主要和次要攻击之间交替
        new bool:useSecondary = (gettime() % 2 == 0);
        NPC_MeleeAttack(0, 1200, useSecondary);

        printf("NPC 0 执行%s近战攻击",
            useSecondary ? "次要" : "主要");
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/punch", true))
    {
        // 让 NPC 执行快速拳击
        NPC_MeleeAttack(0, 800, false);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 挥出一拳！");
        return 1;
    }

    if (!strcmp(cmdtext, "/combo", true))
    {
        // 执行连击攻击序列
        NPC_MeleeAttack(0, 500, false);  // 快速刺拳

        SetTimerEx("ComboStep2", 600, false, "i", playerid);
        SetTimerEx("ComboStep3", 1300, false, "i", playerid);

        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 执行连击攻击！");
        return 1;
    }

    if (!strcmp(cmdtext, "/spar", true))
    {
        // 开始不同战斗风格的对练模式
        new styles[] = {
            FIGHT_STYLE_BOXING,
            FIGHT_STYLE_KUNGFU,
            FIGHT_STYLE_KNEEHEAD,
            FIGHT_STYLE_GRABKICK
        };

        new randomStyle = styles[random(sizeof(styles))];
        NPC_SetFightingStyle(0, randomStyle);
        NPC_MeleeAttack(0, 2000, true);  // 长时间次要攻击

        new msg[64];
        format(msg, sizeof(msg), "NPC 0 使用战斗风格 %d 对练", randomStyle);
        SendClientMessage(playerid, 0xFFFF00FF, msg);
        return 1;
    }
    return 0;
}

forward ComboStep2(playerid);
public ComboStep2(playerid)
{
    NPC_MeleeAttack(0, 700, true);  // 次要攻击
    SendClientMessage(playerid, 0xFF8000FF, "连击: 第二步！");
}

forward ComboStep3(playerid);
public ComboStep3(playerid)
{
    NPC_MeleeAttack(0, 900, false);  // 终结技
    SendClientMessage(playerid, 0xFF4000FF, "连击: 终结技！");
}
```

## 注意事项

- NPC 必须拥有近战武器或使用拳头进行攻击
- 持续时间影响攻击动画播放的时间长度
- 次要攻击通常有不同的动画和效果
- 使用战斗风格来改变攻击动画和有效性

## 相关函数

- [NPC_StopMeleeAttack](NPC_StopMeleeAttack): 停止近战攻击
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): 检查是否正在攻击
- [NPC_SetFightingStyle](NPC_SetFightingStyle): 设置战斗风格
- [NPC_GetFightingStyle](NPC_GetFightingStyle): 获取战斗风格

## 相关回调

- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): NPC 对玩家造成伤害时调用
