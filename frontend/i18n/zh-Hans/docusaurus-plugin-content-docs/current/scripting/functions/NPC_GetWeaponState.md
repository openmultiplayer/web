---
title: NPC_GetWeaponState
sidebar_label: NPC_GetWeaponState
description: 获取 NPC 的武器状态。
tags: ["npc", "武器"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 的武器状态。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回武器状态 ID。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("CombatBot");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_AK47);
    NPC_SetAmmo(npcid, 30);

    // 开始监控武器状态
    SetTimer("MonitorWeaponState", 1000, true);

    return 1;
}

forward MonitorWeaponState();
public MonitorWeaponState()
{
    new weaponState = NPC_GetWeaponState(0);

    new stateName[32];
    switch(weaponState)
    {
        case WEAPONSTATE_NO_BULLETS: stateName = "无子弹";
        case WEAPONSTATE_LAST_BULLET: stateName = "最后一发子弹";
        case WEAPONSTATE_MORE_BULLETS: stateName = "有子弹";
        case WEAPONSTATE_RELOADING: stateName = "换弹中";
        default: stateName = "未知";
    }

    printf("NPC 0武器状态: %s (%d)", stateName, weaponState);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/weaponstate", true))
    {
        new weaponState = NPC_GetWeaponState(0);
        new weapon = NPC_GetWeapon(0);
        new ammo = NPC_GetAmmoInClip(0);

        new msg[128];
        format(msg, sizeof(msg), "NPC 0: 武器%d, 状态%d, 弹夹中弹药: %d",
            weapon, weaponState, ammo);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 武器状态包括换弹、射击、弹药耗尽等
- 使用此函数检查 NPC 武器的当前状态
- 状态值对应 PlayerWeaponState 常量
- 对 AI 决策制定和战斗监控很有用

## 相关函数

- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 当前武器
- [NPC_IsReloading](NPC_IsReloading): 检查 NPC 是否正在换弹
- [NPC_IsShooting](NPC_IsShooting): 检查 NPC 是否正在射击
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): 获取弹夹中的弹药

## 相关回调

- [../callbacks/OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): 武器状态改变时调用
