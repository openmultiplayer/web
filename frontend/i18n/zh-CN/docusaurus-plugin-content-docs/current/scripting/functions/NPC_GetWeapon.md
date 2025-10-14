---
title: NPC_GetWeapon
sidebar_label: NPC_GetWeapon
description: 获取NPC当前持有的武器。
tags: ["npc", "武器"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 当前持有的武器。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 当前持有的武器 ID。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Gunner");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_AK47);
    NPC_SetAmmo(npcid, 300); // 给予300发弹药

    new weapon = NPC_GetWeapon(npcid);
    printf("NPC %d持有武器%d", npcid, weapon);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweapon", true))
    {
        new weapon = NPC_GetWeapon(0);
        new ammo = NPC_GetAmmo(0);

        new weaponName[32];
        switch(weapon)
        {
            case WEAPON_FIST: weaponName = "拳头";
            case WEAPON_COLT45: weaponName = "Colt 45";
            case WEAPON_UZI: weaponName = "微型乌兹";
            case WEAPON_AK47: weaponName = "AK-47";
            case WEAPON_M4: weaponName = "M4";
            case WEAPON_SHOTGUN: weaponName = "霰弹枪";
            case WEAPON_SNIPER: weaponName = "狙击步枪";
            default: format(weaponName, sizeof(weaponName), "武器%d", weapon);
        }

        new msg[64];
        format(msg, sizeof(msg), "NPC 0: %s (%d发弹药)", weaponName, ammo);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 若 NPC 没有武器则返回 0（拳头）
- 武器 ID 与玩家武器 ID 相同
- 在设置弹药或武器属性前使用此函数
- NPC 必须有效此函数才能工作

## 相关函数

- [NPC_SetWeapon](NPC_SetWeapon): 设置 NPC 武器
- [NPC_GetAmmo](NPC_GetAmmo): 获取 NPC 弹药
- [NPC_SetAmmo](NPC_SetAmmo): 设置 NPC 弹药
- [NPC_RemoveWeapon](NPC_RemoveWeapon): 移除 NPC 武器

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
