---
title: NPC_IsMeleeAttacking
sidebar_label: NPC_IsMeleeAttacking
description: 检查 NPC 是否正在进行近战攻击。
tags: ["npc", "近战攻击", "战斗风格"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 是否正在进行近战攻击。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在进行近战攻击则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkmeleeattacking", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isMeleeAttacking = NPC_IsMeleeAttacking(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在进行近战攻击: %s", npcid, isMeleeAttacking ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 在近战攻击动画期间返回 true
- 近战攻击通过 NPC_MeleeAttack 启动

## 相关函数

- [NPC_MeleeAttack](NPC_MeleeAttack): 开始近战攻击
- [NPC_StopMeleeAttack](NPC_StopMeleeAttack): 停止近战攻击
- [NPC_SetFightingStyle](NPC_SetFightingStyle): 设置战斗风格
- [NPC_GetFightingStyle](NPC_GetFightingStyle): 获取战斗风格

## 相关回调

- [../callbacks/OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): NPC 造成伤害时调用
