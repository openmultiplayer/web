---
title: NPC_IsMeleeAttacking
sidebar_label: NPC_IsMeleeAttacking
description: 检查NPC是否正在进行近战攻击。
tags: ["npc", "近战攻击", "战斗风格"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 是否正在进行近战攻击。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在进行近战攻击则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Fighter");
    NPC_Spawn(npcid);
    NPC_SetFightingStyle(npcid, FIGHT_STYLE_BOXING);
    NPC_MeleeAttack(npcid, 5000, false);

    SetTimerEx("CheckMeleeStatus", 1000, true, "i", npcid);

    return 1;
}

forward CheckMeleeStatus(npcid);
public CheckMeleeStatus(npcid)
{
    if (NPC_IsMeleeAttacking(npcid))
    {
        printf("NPC %d正在进行近战攻击", npcid);
    }
    else
    {
        printf("NPC %d没有在攻击", npcid);
        KillTimer(GetTickCount()); // 停止检查
    }
}
```

## 注意事项

- 在近战攻击动画期间返回 true
- 使用此函数检查 NPC 是否处于战斗模式
- 近战攻击通过 NPC_MeleeAttack 启动
- 战斗风格会影响攻击动画

## 相关函数

- [NPC_MeleeAttack](NPC_MeleeAttack): 开始近战攻击
- [NPC_StopMeleeAttack](NPC_StopMeleeAttack): 停止近战攻击
- [NPC_SetFightingStyle](NPC_SetFightingStyle): 设置战斗风格
- [NPC_GetFightingStyle](NPC_GetFightingStyle): 获取战斗风格

## 相关回调

- [../callbacks/OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): NPC 造成伤害时调用
