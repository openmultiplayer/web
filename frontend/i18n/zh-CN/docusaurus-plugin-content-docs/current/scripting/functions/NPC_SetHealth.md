---
title: NPC_SetHealth
sidebar_label: NPC_SetHealth
description: 设置 NPC 的生命值。
tags: ["npc", "生命值"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 的生命值。

| 名称   | 描述           |
| ------ | -------------- |
| npcid  | NPC 的 ID      |
| health | 要设置的生命值 |

## 返回值

如果生命值设置成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("HealthBot");
    NPC_Spawn(npcid);

    // 设置 NPC 生命值为 75.5
    NPC_SetHealth(npcid, 75.5);

    new Float:health = NPC_GetHealth(npcid);
    printf("NPC 生命值: %.1f", health);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/heal", true))
    {
        new npcid = NPC_Create("Patient");
        NPC_Spawn(npcid);

        NPC_SetHealth(npcid, 100.0); // 满血
        SendClientMessage(playerid, 0x00FF00FF, "NPC 已治疗！");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 生命值通常范围从 0.0 到 100.0，但可以设置更高
- 将生命值设置为 0.0 会杀死 NPC
- NPC 默认出生时生命值为 100.0
- 可以将生命值设置在 100.0 以上以增强 NPC
- 使用浮点数值进行精确的生命值控制

## 相关函数

- [NPC_GetHealth](NPC_GetHealth): 获取 NPC 生命值
- [NPC_SetArmour](NPC_SetArmour): 设置 NPC 护甲
- [NPC_GetArmour](NPC_GetArmour): 获取 NPC 护甲
- [NPC_IsDead](NPC_IsDead): 检查 NPC 是否死亡
- [NPC_SetInvulnerable](NPC_SetInvulnerable): 使 NPC 无敌

## 相关回调

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): NPC 受到伤害时调用
- [OnNPCDeath](../callbacks/OnNPCDeath): NPC 死亡时调用
