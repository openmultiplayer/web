---
title: NPC_GetWeaponReloadTime
sidebar_label: NPC_GetWeaponReloadTime
description: 获取 NPC 武器的换弹时间。
tags: ["npc", "武器", "换弹"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 武器的换弹时间。

| 参数     | 说明                    |
| -------- | ----------------------- |
| npcid    | NPC 的 ID               |
| weaponid | 要获取换弹时间的武器 ID |

## 返回值

返回指定武器的换弹时间（毫秒）。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("WeaponTester");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_AK47);
    NPC_SetAmmo(npcid, 300);

    // 设置自定义换弹时间
    NPC_SetWeaponReloadTime(npcid, WEAPON_AK47, 1500);

    // 检查换弹时间
    new reloadTime = NPC_GetWeaponReloadTime(npcid, WEAPON_AK47);
    printf("NPC %d AK47换弹时间设置为: %d毫秒", npcid, reloadTime);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkreloadtime", true))
    {
        new weapon = NPC_GetWeapon(0);
        if (weapon > 0)
        {
            new reloadTime = NPC_GetWeaponReloadTime(0, weapon);
            new actualTime = NPC_GetWeaponActualReloadTime(0, weapon);

            new msg[128];
            format(msg, sizeof(msg), "NPC 0武器%d: 自定义换弹%d毫秒, 默认%d毫秒",
                weapon, reloadTime, actualTime);
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

- 返回当前自定义换弹时间设置
- 使用 NPC_GetWeaponActualReloadTime 获取默认游戏换弹时间
- 换弹时间影响 NPC 换弹所需的时间
- 自定义换弹时间会覆盖默认武器换弹速度

## 相关函数

- [NPC_SetWeaponReloadTime](NPC_SetWeaponReloadTime): 设置换弹时间
- [NPC_GetWeaponActualReloadTime](NPC_GetWeaponActualReloadTime): 获取默认换弹时间
- [NPC_IsReloading](NPC_IsReloading): 检查 NPC 是否正在换弹
- [NPC_EnableReloading](NPC_EnableReloading): 启用/禁用换弹

## 相关回调

- [../callbacks/OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): 武器状态改变时调用
