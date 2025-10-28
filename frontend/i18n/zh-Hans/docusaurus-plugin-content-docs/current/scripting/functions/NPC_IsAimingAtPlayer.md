---
title: NPC_IsAimingAtPlayer
sidebar_label: NPC_IsAimingAtPlayer
description: 检查 NPC 是否正在瞄准特定玩家。
tags: ["npc", "武器", "瞄准"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 是否正在瞄准特定玩家。

| 参数     | 说明            |
| -------- | --------------- |
| npcid    | NPC 的 ID       |
| playerid | 要检查的玩家 ID |

## 返回值

如果 NPC 正在瞄准指定玩家则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Bodyguard");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_M4);
    NPC_SetAmmo(npcid, 300);

    printf("保镖NPC %d已创建并装备武器", npcid);

    return 1;
}

public OnPlayerConnect(playerid)
{
    // 让NPC瞄准新玩家
    NPC_AimAtPlayer(0, playerid, false, 0, true, 0.0, 0.0, 0.0, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);

    new msg[64];
    format(msg, sizeof(msg), "保镖正在监视玩家%d", playerid);
    print(msg);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/amitargeted", true))
    {
        if (NPC_IsAimingAtPlayer(0, playerid))
        {
            SendClientMessage(playerid, 0xFF0000FF, "警告：NPC 0正在瞄准你！");

            // 显示武器信息
            new weapon = NPC_GetWeapon(0);
            new ammo = NPC_GetAmmo(0);

            new msg[128];
            format(msg, sizeof(msg), "NPC武器：%d，弹药：%d", weapon, ammo);
            SendClientMessage(playerid, 0xFFFF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0x00FF00FF, "你是安全的 - NPC 0没有以你为目标");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/stoptargeting", true))
    {
        // 停止NPC瞄准
        NPC_StopAim(0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0已停止瞄准");
        return 1;
    }

    if (!strcmp(cmdtext, "/hostile", true))
    {
        // 让NPC对玩家怀有敌意
        NPC_AimAtPlayer(0, playerid, true, 500, true, 0.0, 0.0, 0.8, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0现在对你怀有敌意！");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 只有当 NPC 特别针对给定玩家时才返回 true
- 使用此函数检查玩家是否被 NPC 瞄准
- NPC 必须使用 NPC_AimAtPlayer 此函数才返回 true
- 对威胁检测和玩家安全系统很有用

## 相关函数

- [NPC_AimAtPlayer](NPC_AimAtPlayer): 让 NPC 瞄准玩家
- [NPC_IsAiming](NPC_IsAiming): 检查 NPC 是否正在瞄准
- [NPC_StopAim](NPC_StopAim): 停止 NPC 瞄准
- [NPC_AimAt](NPC_AimAt): 让 NPC 瞄准位置

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
