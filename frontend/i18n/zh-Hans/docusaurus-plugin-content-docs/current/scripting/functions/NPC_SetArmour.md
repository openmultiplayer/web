---
title: NPC_SetArmour
sidebar_label: NPC_SetArmour
description: 设置 NPC 的护甲等级。
tags: ["npc", "护甲值", "生命值"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 的护甲等级。

| 参数   | 说明                  |
| ------ | --------------------- |
| npcid  | NPC 的 ID             |
| armour | 护甲数量（0.0-100.0） |

## 返回值

如果护甲设置成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Tank");
    NPC_Spawn(npcid);

    // 给予满护甲
    NPC_SetArmour(npcid, 100.0);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setarmour", true))
    {
        // 为第一个 NPC 设置护甲
        NPC_SetArmour(0, 75.0);

        SendClientMessage(playerid, 0x00FF00FF, "已将 NPC 护甲设置为 75%");
        return 1;
    }

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

- 护甲值范围从 0.0（无护甲）到 100.0（满护甲）
- 护甲在生命值受影响前吸收伤害
- 使用 NPC_GetArmour 检查当前护甲等级
- 护甲不会自动再生

## 相关函数

- [NPC_GetArmour](NPC_GetArmour): 获取 NPC 护甲等级
- [NPC_SetHealth](NPC_SetHealth): 设置 NPC 生命值
- [NPC_GetHealth](NPC_GetHealth): 获取 NPC 生命值
- [NPC_IsDead](NPC_IsDead): 检查 NPC 是否死亡

## 相关回调

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): NPC 受到伤害时调用
- [OnNPCDeath](../callbacks/OnNPCDeath): NPC 死亡时调用
