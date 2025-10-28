---
title: NPC_GetHealth
sidebar_label: NPC_GetHealth
description: 获取 NPC 的生命值。
tags: ["npc", "生命值"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 的生命值。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 的生命值（浮点数）。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("HealthBot");
    NPC_Spawn(npcid);

    NPC_SetHealth(npcid, 75.5);

    new Float:health = NPC_GetHealth(npcid);
    printf("NPC %d的生命值为 %.1f", npcid, health); // 输出: 75.5

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkhealth", true))
    {
        new Float:health = NPC_GetHealth(0);
        new msg[64];
        format(msg, sizeof(msg), "NPC 0生命值: %.1f", health);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 生命值通常范围在 0.0 到 100.0 之间
- 生命值为 0.0 的 NPC 被视为已死亡
- 可将生命值设置为超过 100.0 以创建增强型 NPC
- 使用此函数可在战斗场景中监控 NPC 状态

## 相关函数

- [NPC_SetHealth](NPC_SetHealth): 设置 NPC 生命值
- [NPC_GetArmour](NPC_GetArmour): 获取 NPC 护甲
- [NPC_SetArmour](NPC_SetArmour): 设置 NPC 护甲
- [NPC_IsDead](NPC_IsDead): 检查 NPC 是否死亡

## 相关回调

- [../callbacks/OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): NPC 受到伤害时调用
- [../callbacks/OnNPCDeath](../callbacks/OnNPCDeath): NPC 死亡时调用
