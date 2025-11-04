---
title: NPC_IsAiming
sidebar_label: NPC_IsAiming
description: 检查 NPC 是否正在瞄准。
tags: ["npc", "武器", "瞄准"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 是否正在瞄准。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在瞄准则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Sniper");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_SNIPER);
    NPC_SetAmmo(npcid, 50);

    // 让NPC瞄准远处目标
    NPC_AimAt(npcid, 2000.0, 1500.0, 20.0, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_ALL);

    // 2秒后检查瞄准状态
    SetTimerEx("CheckAimingStatus", 2000, false, "i", npcid);

    return 1;
}

forward CheckAimingStatus(npcid);
public CheckAimingStatus(npcid)
{
    if (NPC_IsAiming(npcid))
    {
        printf("NPC %d 正在成功瞄准目标", npcid);
    }
    else
    {
        printf("NPC %d没有在瞄准", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkaim", true))
    {
        if (NPC_IsAiming(0))
        {
            new weapon = NPC_GetWeapon(0);
            new msg[64];
            format(msg, sizeof(msg), "NPC 0正在用武器%d瞄准", weapon);
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0没有在瞄准");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/aimatme", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        // 让NPC 0瞄准玩家
        NPC_AimAt(0, x, y, z + 1.0, false, 0, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_NONE);

        SendClientMessage(playerid, 0xFFFF00FF, "NPC 0现在正在瞄准你！");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 当 NPC 正在积极瞄准目标时返回 true
- 使用此函数检查 NPC 是否处于战斗模式
- 瞄准可以通过 NPC_AimAt 或 NPC_AimAtPlayer 启动
- NPC 会持续瞄准直到使用 NPC_StopAim 停止

## 相关函数

- [NPC_AimAt](NPC_AimAt): 让 NPC 瞄准位置
- [NPC_AimAtPlayer](NPC_AimAtPlayer): 让 NPC 瞄准玩家
- [NPC_StopAim](NPC_StopAim): 停止 NPC 瞄准
- [NPC_IsAimingAtPlayer](NPC_IsAimingAtPlayer): 检查是否瞄准特定玩家

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
