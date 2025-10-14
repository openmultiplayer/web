---
title: NPC_SetInvulnerable
sidebar_label: NPC_SetInvulnerable
description: 设置 NPC 是否对伤害免疫。
tags: ["npc", "无敌", "伤害", "保护"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 是否对伤害免疫。

| 名称   | 描述                            |
| ------ | ------------------------------- |
| npcid  | NPC 的 ID                       |
| toggle | true 设为无敌，false 设为可受伤 |

## 返回值

如果免疫状态设置成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("InvincibleBot");
    NPC_Spawn(npcid);

    // 使 NPC 对所有伤害免疫
    NPC_SetInvulnerable(npcid, true);

    printf("NPC %d 现在已免疫", npcid);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/godmode", true))
    {
        // 切换 NPC 0 的上帝模式
        new bool:current = NPC_IsInvulnerable(0);
        NPC_SetInvulnerable(0, !current);

        new msg[64];
        format(msg, sizeof(msg), "NPC 0 上帝模式：%s", !current ? "开启" : "关闭");
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}

// 在特定条件下变得脆弱的 Boss NPC
public OnPlayerEnterCheckpoint(playerid)
{
    // 使 Boss NPC（假设为 NPC ID 1）在最终阶段变得脆弱
    if (GetPlayerScore(playerid) >= 1000)
    {
        NPC_SetInvulnerable(1, false);
        SendClientMessage(playerid, 0xFF0000FF, "Boss 现在变得脆弱了！");
    }
    return 1;
}
```

## 注意事项

- 免疫的 NPC 不会受到武器、爆炸或其他伤害来源的伤害
- 此设置会持续到被更改或 NPC 被销毁
- 免疫的 NPC 仍然可以被移动、传送或更改动画
- 将此用于任务 NPC、重要角色或特殊游戏机制

## 相关函数

- [NPC_IsInvulnerable](NPC_IsInvulnerable): 检查 NPC 是否无敌
- [NPC_SetHealth](NPC_SetHealth): 设置 NPC 生命值
- [NPC_GetHealth](NPC_GetHealth): 获取 NPC 生命值
- [NPC_SetArmour](NPC_SetArmour): 设置 NPC 护甲

## 相关回调

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): NPC 受到伤害时调用（免疫的 NPC 不会调用）
- [OnNPCDeath](../callbacks/OnNPCDeath): NPC 死亡时调用（免疫的 NPC 不会死亡）
