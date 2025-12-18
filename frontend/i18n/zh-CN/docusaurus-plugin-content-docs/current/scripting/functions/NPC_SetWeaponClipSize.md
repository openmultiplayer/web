---
title: NPC_SetWeaponClipSize
sidebar_label: NPC_SetWeaponClipSize
description: 设置 NPC 武器的弹匣容量。
tags: ["npc", "武器", "子弹"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 当前武器的弹匣容量。

| 参数   | 说明            |
| ------ | --------------- |
| npcid  | NPC 的 ID       |
| weapon | 要设置的武器 ID |
| size   | 新的弹匣容量    |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponclipsize ", true, 19))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new weapon = NPC_GetWeapon(npcid);
        new clipsize = strval(cmdtext[19]);

        NPC_SetWeaponClipSize(npcid, WEAPON:weapon, clipsize);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 武器 %d 弹匣容量设置为 %d", npcid, weapon, clipsize);
        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 必须拥有武器此函数才能工作
- 弹匣容量影响 NPC 在需要重新装填前可以发射多少弹药
- 不同武器有不同的默认弹匣容量

## 相关函数

- [NPC_GetWeaponClipSize](NPC_GetWeaponClipSize): 获取武器弹匣容量
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): 设置当前弹匣弹药
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): 获取当前弹匣弹药
- [NPC_SetWeapon](NPC_SetWeapon): 设置 NPC 武器

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
