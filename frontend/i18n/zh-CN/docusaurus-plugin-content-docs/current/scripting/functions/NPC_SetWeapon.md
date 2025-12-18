---
title: NPC_SetWeapon
sidebar_label: NPC_SetWeapon
description: 设置 NPC 的当前武器。
tags: ["npc", "武器", "战斗"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 的当前武器为特定武器 ID。

| 参数   | 说明            |
| ------ | --------------- |
| npcid  | NPC 的 ID       |
| weapon | 要设置的武器 ID |

## 返回值

如果武器设置成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweapon ", true, 11))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new weaponid = strval(cmdtext[11]);
        if (weaponid < 0 || weaponid > 46)
            return SendClientMessage(playerid, 0xFF0000FF, "无效的武器ID。必须在0到46之间。");

        NPC_SetWeapon(npcid, WEAPON:weaponid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 武器设置为 %d", npcid, weaponid);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 设置武器将为 NPC 装备该武器
- 使用 NPC_SetAmmo 为武器提供弹药
- 使用 NPC_GetWeapon 检查当前武器

## 相关函数

- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 的当前武器
- [NPC_SetAmmo](NPC_SetAmmo): 设置 NPC 武器的弹药
- [NPC_GetAmmo](NPC_GetAmmo): 获取 NPC 的当前弹药数量

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
