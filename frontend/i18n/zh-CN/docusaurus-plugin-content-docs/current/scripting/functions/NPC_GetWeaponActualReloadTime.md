---
title: NPC_GetWeaponActualReloadTime
sidebar_label: NPC_GetWeaponActualReloadTime
description: 获取 NPC 武器的实际（默认）换弹时间。
tags: ["npc", "武器"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

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
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponactualreloadtime", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new weapon = NPC_GetWeapon(npcid);
        new reloadtime = NPC_GetWeaponActualReloadTime(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 武器实际装弹时间: %d 毫秒", npcid, reloadtime);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回武器的原始游戏换弹时间
- 这与使用`NPC_SetWeaponReloadTime`设置的自定义换弹时间不同

## 相关函数

- [NPC_SetWeaponReloadTime](NPC_SetWeaponReloadTime): 设置自定义换弹时间
- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): 获取当前换弹时间
- [NPC_IsReloading](NPC_IsReloading): 检查 NPC 是否正在换弹

## 相关回调

- [../callbacks/OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): 武器状态改变时调用
