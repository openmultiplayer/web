---
title: NPC_GetWeaponReloadTime
sidebar_label: NPC_GetWeaponReloadTime
description: 获取 NPC 武器的换弹时间。
tags: ["npc", "武器", "换弹"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

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
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponreloadtime", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new weapon = NPC_GetWeapon(npcid);
        new reloadtime = NPC_GetWeaponReloadTime(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 武器的换弹时间: %d 毫秒", npcid, reloadtime);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回当前自定义换弹时间设置
- 使用 NPC_GetWeaponActualReloadTime 获取默认游戏换弹时间
- 换弹时间影响 NPC 换弹所需的时间

## 相关函数

- [NPC_SetWeaponReloadTime](NPC_SetWeaponReloadTime): 设置换弹时间
- [NPC_GetWeaponActualReloadTime](NPC_GetWeaponActualReloadTime): 获取默认换弹时间
- [NPC_IsReloading](NPC_IsReloading): 检查 NPC 是否正在换弹
- [NPC_EnableReloading](NPC_EnableReloading): 启用/禁用换弹

## 相关回调

- [../callbacks/OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): 武器状态改变时调用
