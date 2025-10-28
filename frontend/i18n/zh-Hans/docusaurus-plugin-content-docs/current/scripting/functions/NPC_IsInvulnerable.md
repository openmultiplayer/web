---
title: NPC_IsInvulnerable
sidebar_label: NPC_IsInvulnerable
description: 检查 NPC 是否对伤害免疫。
tags: ["npc", "无敌", "伤害", "保护"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 是否对伤害免疫。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 免疫伤害则返回 true，否则返回 false。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("TestBot");
    NPC_Spawn(npcid);

    // 检查初始免疫状态
    if (NPC_IsInvulnerable(npcid))
    {
        printf("NPC %d免疫伤害", npcid);
    }
    else
    {
        printf("NPC %d可以受到伤害", npcid);
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkgod", true))
    {
        if (NPC_IsInvulnerable(0))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0免疫伤害");
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0可以受到伤害");
        }
        return 1;
    }
    return 0;
            new Float:armour = NPC_GetArmour(npcs[i]);
            new bool:invulnerable = NPC_IsInvulnerable(npcs[i]);

            new status[64];
            format(status, sizeof(status), "NPC %d: 生命:%.1f 护甲:%.1f %s",
                   npcs[i], health, armour, invulnerable ? "[免疫]" : "[脆弱]");

            SendClientMessage(playerid, 0xCCCCCCFF, status);
        }

        return 1;
    }
    return 0;
}

// 检查免疫性的智能伤害系统
stock bool:CanDamageNPC(npcid)
{
    if (!NPC_IsValid(npcid))
        return false;

    if (NPC_IsDead(npcid))
        return false;

    if (NPC_IsInvulnerable(npcid))
    {
        printf("无法伤害NPC %d - 免疫", npcid);
        return false;
    }

    return true;
}

// Boss战斗机制
public OnPlayerWeaponShot(playerid, weaponid, hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    if (hittype == BULLET_HIT_TYPE_PLAYER)
    {
        new npcid = hitid; // 假设hitid是NPC ID

        if (NPC_IsValid(npcid) && NPC_IsInvulnerable(npcid))
        {
            // 显示免疫效果
            SendClientMessage(playerid, 0xFF0000FF, "目标免疫伤害！");

            // 在此处播放免疫声音或效果
            PlayerPlaySound(playerid, 1130, 0.0, 0.0, 0.0);
            return 0; // 阻止伤害
        }
    }
    return 1;
}
```

## 注意事项

- 返回由`NPC_SetInvulnerable`设置的免疫状态
- NPC 在创建时默认是脆弱的
- 此函数对战斗系统和游戏机制很有用
- 在应用自定义伤害计算前始终检查此项

## 相关函数

- [NPC_SetInvulnerable](NPC_SetInvulnerable): 设置 NPC 免疫性
- [NPC_IsValid](NPC_IsValid): 检查 NPC ID 是否有效
- [NPC_IsDead](NPC_IsDead): 检查 NPC 是否死亡
- [NPC_GetHealth](NPC_GetHealth): 获取 NPC 生命值

## 相关回调

- [../callbacks/OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): NPC 受到伤害时调用（免疫 NPC 不会调用）
- [../callbacks/OnNPCDeath](../callbacks/OnNPCDeath): NPC 死亡时调用（免疫 NPC 不会死亡）
