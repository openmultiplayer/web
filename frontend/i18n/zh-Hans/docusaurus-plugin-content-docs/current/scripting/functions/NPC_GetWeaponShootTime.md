---
title: NPC_GetWeaponShootTime
sidebar_label: NPC_GetWeaponShootTime
description: 获取NPC武器的射击时间。
tags: ["npc", "武器"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 武器的射击时间。

| 名称     | 描述                    |
| -------- | ----------------------- |
| npcid    | NPC 的 ID               |
| weaponid | 要获取射击时间的武器 ID |

## 返回值

返回指定武器的射击时间（毫秒）。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("RapidFire");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_M4);
    NPC_SetAmmo(npcid, 500);

    // 设置快速射击
    NPC_SetWeaponShootTime(npcid, WEAPON_M4, 100);

    // 检查射击时间
    new shootTime = NPC_GetWeaponShootTime(npcid, WEAPON_M4);
    printf("NPC %d M4射击时间设置为: %d毫秒", npcid, shootTime);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkfirerate", true))
    {
        new weapon = NPC_GetWeapon(0);
        if (weapon > 0)
        {
            new shootTime = NPC_GetWeaponShootTime(0, weapon);

            new fireRate[32];
            if (shootTime <= 100)
                fireRate = "极快";
            else if (shootTime <= 500)
                fireRate = "快速";
            else if (shootTime <= 1000)
                fireRate = "正常";
            else
                fireRate = "缓慢";

            new msg[128];
            format(msg, sizeof(msg), "NPC 0武器%d: %d毫秒射击时间(%s)",
                weapon, shootTime, fireRate);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0没有武器");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 射击时间影响射击之间的延迟
- 数值越低意味着射击速率越快
- 不同武器有不同的默认射击时间
- 自定义射击时间可以创建独特的射击模式

## 相关函数

- [NPC_SetWeaponShootTime](NPC_SetWeaponShootTime): 设置射击时间
- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 当前武器
- [NPC_Shoot](NPC_Shoot): 让 NPC 射击
- [NPC_IsShooting](NPC_IsShooting): 检查 NPC 是否正在射击

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
