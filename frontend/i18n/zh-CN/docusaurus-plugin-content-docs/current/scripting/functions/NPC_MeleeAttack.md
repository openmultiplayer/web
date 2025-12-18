---
title: NPC_MeleeAttack
sidebar_label: NPC_MeleeAttack
description: 让 NPC 执行近战攻击。
tags: ["npc", "战斗", "近战攻击"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

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
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcmeleeattack", true, 15))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new time = 1000;
        if (strlen(cmdtext) > 16)
            time = strval(cmdtext[16]);

        new bool:success = NPC_MeleeAttack(npcid, time, false);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 持续近战攻击 %d毫秒: %s", npcid, time, success ? "成功" : "失败");
        return 1;
    }
    return 0;
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
