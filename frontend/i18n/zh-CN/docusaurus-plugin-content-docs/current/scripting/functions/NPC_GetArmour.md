---
title: NPC_GetArmour
sidebar_label: NPC_GetArmour
description: 获取 NPC 的护甲值。
tags: ["npc", "生命值"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 的护甲值。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 的护甲值（浮点数，范围 0.0 到 100.0）。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Guard");
    NPC_Spawn(npcid);

    NPC_SetArmour(npcid, 75.5);

    new Float:armour = NPC_GetArmour(npcid);
    printf("NPC %d 有 %.1f 护甲", npcid, armour); // 输出: 75.5

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkarmour", true))
    {
        new Float:armour = NPC_GetArmour(0);
        new msg[64];
        format(msg, sizeof(msg), "NPC 0 护甲: %.1f", armour);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 护甲值范围从 0.0 到 100.0
- 护甲提供伤害保护
- 当护甲耗尽时，伤害直接影响生命值
- NPC 默认开始时护甲为 0.0

## 相关函数

- [NPC_SetArmour](NPC_SetArmour): 设置 NPC 护甲
- [NPC_GetHealth](NPC_GetHealth): 获取 NPC 生命值
- [NPC_SetHealth](NPC_SetHealth): 设置 NPC 生命值
- [NPC_IsDead](NPC_IsDead): 检查 NPC 是否死亡

## 相关回调

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): 当 NPC 受到伤害时调用
- [OnNPCDeath](../callbacks/OnNPCDeath): 当 NPC 死亡时调用
