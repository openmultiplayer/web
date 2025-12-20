---
title: NPC_StopMeleeAttack
sidebar_label: NPC_StopMeleeAttack
description: 停止 NPC 的近战攻击。
tags: ["npc", "近战攻击", "战斗风格"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

停止 NPC 的近战攻击。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcstopmelee", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:success = NPC_StopMeleeAttack(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 停止近战攻击：%s", npcid, success ? "成功" : "失败");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 这会立即停止任何正在进行的近战攻击动画
- NPC 将回到正常姿态
- 如果 NPC 当前没有攻击，则此函数无效

## 相关函数

- [NPC_MeleeAttack](NPC_MeleeAttack): 开始近战攻击
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): 检查 NPC 是否在攻击
- [NPC_SetFightingStyle](NPC_SetFightingStyle): 设置战斗风格
- [NPC_GetFightingStyle](NPC_GetFightingStyle): 获取战斗风格

## 相关回调

- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): NPC 对他人造成伤害时调用
