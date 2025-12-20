---
title: NPC_GetWeaponClipSize
sidebar_label: NPC_GetWeaponClipSize
description: 获取 NPC 武器的弹夹容量设置。
tags: ["npc", "武器"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 武器的弹夹容量设置。

| 参数     | 说明            |
| -------- | --------------- |
| npcid    | NPC 的 ID       |
| weaponid | 要检查的武器 ID |

## 返回值

返回武器的弹夹容量，出错时返回-1。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponclipsize", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new weapon = NPC_GetWeapon(npcid);
        new clipsize = NPC_GetWeaponClipSize(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 武器的弹夹容量为: %d", npcid, clipsize);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回当前自定义弹夹容量设置
- 不同武器有不同的默认弹夹容量

## 相关函数

- [NPC_SetWeaponClipSize](NPC_SetWeaponClipSize): 设置武器弹夹容量
- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 当前武器
- [NPC_GetAmmo](NPC_GetAmmo): 获取 NPC 当前弹药

## 相关回调

- [../callbacks/OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): 武器状态改变时调用
