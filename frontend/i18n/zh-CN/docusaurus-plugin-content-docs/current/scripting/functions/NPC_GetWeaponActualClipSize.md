---
title: NPC_GetWeaponActualClipSize
sidebar_label: NPC_GetWeaponActualClipSize
description: 获取 NPC 武器的实际（默认）弹夹容量。
tags: ["npc", "武器"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

从游戏数据中获取 NPC 武器的实际（默认）弹夹容量。

| 参数     | 说明            |
| -------- | --------------- |
| npcid    | NPC 的 ID       |
| weaponid | 要检查的武器 ID |

## 返回值

返回默认弹夹容量，出错时返回-1。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponactualclipsize", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new weapon = NPC_GetWeapon(npcid);
        new clipsize = NPC_GetWeaponActualClipSize(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 武器的实际弹夹容量: %d", npcid, clipsize);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回武器的原始游戏弹夹容量
- 这与使用`NPC_SetWeaponClipSize`设置的自定义弹夹容量不同

## 相关函数

- [NPC_SetWeaponClipSize](NPC_SetWeaponClipSize): 设置自定义弹夹容量
- [NPC_GetWeaponClipSize](NPC_GetWeaponClipSize): 获取当前弹夹容量
- [NPC_GetAmmo](NPC_GetAmmo): 获取 NPC 当前弹药

## 相关回调

- [../callbacks/OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): 武器状态改变时调用
