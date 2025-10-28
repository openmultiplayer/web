---
title: NPC_GetWeaponActualReloadTime
sidebar_label: NPC_GetWeaponActualReloadTime
description: 获取 NPC 武器的实际（默认）换弹时间。
tags: ["npc", "武器"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

从游戏数据中获取 NPC 武器的实际（默认）换弹时间。

| 参数     | 说明            |
| -------- | --------------- |
| npcid    | NPC 的 ID       |
| weaponid | 要检查的武器 ID |

## 返回值

返回默认换弹时间（毫秒），出错时返回-1。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Reloader");
    NPC_Spawn(npcid);

    NPC_SetWeapon(npcid, WEAPON_AK47);

    new actualReloadTime = NPC_GetWeaponActualReloadTime(npcid, WEAPON_AK47);
    new customReloadTime = NPC_GetWeaponReloadTime(npcid, WEAPON_AK47);

    printf("NPC %d AK47 - 实际换弹: %d毫秒, 自定义: %d毫秒",
        npcid, actualReloadTime, customReloadTime);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/defaulttime", true))
    {
        new actualTime = NPC_GetWeaponActualReloadTime(0, WEAPON_AK47);
        if (actualTime != -1)
        {
            new msg[64];
            format(msg, sizeof(msg), "AK47默认换弹: %d毫秒", actualTime);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回武器的原始游戏换弹时间
- 这与使用`NPC_SetWeaponReloadTime`设置的自定义换弹时间不同
- 使用此函数与自定义设置比较或重置为默认值

## 相关函数

- [NPC_SetWeaponReloadTime](NPC_SetWeaponReloadTime): 设置自定义换弹时间
- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): 获取当前换弹时间
- [NPC_IsReloading](NPC_IsReloading): 检查 NPC 是否正在换弹

## 相关回调

- [../callbacks/OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): 武器状态改变时调用
