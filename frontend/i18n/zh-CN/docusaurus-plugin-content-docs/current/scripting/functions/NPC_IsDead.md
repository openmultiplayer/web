---
title: NPC_IsDead
sidebar_label: NPC_IsDead
description: 检查 NPC 是否死亡。
tags: ["npc"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 是否死亡。

| 参数  | 说明               |
| ----- | ------------------ |
| npcid | 要检查的 NPC 的 ID |

## 返回值

如果 NPC 已死亡则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkdead", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isDead = NPC_IsDead(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 是否死亡: %s", npcid, isDead ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 当 NPC 的生命值达到 0.0 或以下时被视为死亡。
- 死亡的 NPC 可以使用[NPC_Respawn](NPC_Respawn)重生。

:::

## 相关函数

- [NPC_GetHealth](NPC_GetHealth): 获取 NPC 的生命值
- [NPC_SetHealth](NPC_SetHealth): 设置 NPC 的生命值
- [NPC_Respawn](NPC_Respawn): 重生 NPC

## 相关回调

- [../callbacks/OnNPCDeath](../callbacks/OnNPCDeath): NPC 死亡时调用
- [../callbacks/OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): NPC 受到伤害时调用
