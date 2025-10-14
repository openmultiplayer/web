---
title: NPC_StopMeleeAttack
sidebar_label: NPC_StopMeleeAttack
description: 停止 NPC 的近战攻击。
tags: ["npc", "近战攻击", "战斗风格"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

停止 NPC 的近战攻击。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Fighter");
    NPC_Spawn(npcid);

    NPC_SetFightingStyle(npcid, FIGHT_STYLE_BOXING);

    // 开始近战攻击
    NPC_MeleeAttack(npcid, 5000, false);

    // 3 秒后停止
    SetTimerEx("StopFighting", 3000, false, "i", npcid);

    return 1;
}

forward StopFighting(npcid);
public StopFighting(npcid)
{
    NPC_StopMeleeAttack(npcid);
    printf("NPC %d 已停止战斗", npcid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopfight", true))
    {
        // 停止 NPC 0 的近战攻击
        NPC_StopMeleeAttack(0);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 已停止战斗");
        return 1;
    }
    return 0;
}

forward NPCFightSequence(npcid);
public NPCFightSequence(npcid)
{
    if (!NPC_IsValid(npcid))
        return;

    if (NPC_IsMeleeAttacking(npcid))
    {
        // 停止当前攻击
        NPC_StopMeleeAttack(npcid);

        // 等待下一次攻击
        SetTimerEx("NPCFightSequence", 2000, false, "i", npcid);
    }
    else
    {
        // 开始新的攻击序列
        NPC_MeleeAttack(npcid, 3000, random(2) ? true : false);
        SetTimerEx("NPCFightSequence", 4000, false, "i", npcid);
    }
}
```

## 注意事项

- 这会立即停止任何正在进行的近战攻击动画
- NPC 将回到正常姿态
- 如果 NPC 当前没有攻击，则此函数无效
- 使用此函数来创建受控的战斗序列

## 相关函数

- [NPC_MeleeAttack](NPC_MeleeAttack): 开始近战攻击
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): 检查 NPC 是否在攻击
- [NPC_SetFightingStyle](NPC_SetFightingStyle): 设置战斗风格
- [NPC_GetFightingStyle](NPC_GetFightingStyle): 获取战斗风格

## 相关回调

- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): NPC 对他人造成伤害时调用
