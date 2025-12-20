---
title: NPC_SetAmmoInClip
sidebar_label: NPC_SetAmmoInClip
description: 设置 NPC 武器弹匣中的弹药数量。
tags: ["npc", "武器", "子弹"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 武器弹匣中的弹药数量。

| 参数  | 说明             |
| ----- | ---------------- |
| npcid | NPC 的 ID        |
| ammo  | 要设置的弹药数量 |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setammoclip ", true, 13))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new ammo = strval(cmdtext[13]);
        if (ammo < 0)
            return SendClientMessage(playerid, 0xFF0000FF, "弹药必须是非负整数。");

        NPC_SetAmmoInClip(npcid, ammo);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 弹匣中的弹药数量设置为 %d", npcid, ammo);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 数量不能超过武器的最大弹匣容量
- 设置为 0 将要求 NPC 在射击前重新装弹
- 使用 NPC_GetAmmoInClip 检查当前弹匣数量
- 仅影响当前武器的弹匣，不影响总弹药

## 相关函数

- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): 获取弹匣中的弹药
- [NPC_GetWeaponClipSize](NPC_GetWeaponClipSize): 获取最大弹匣容量
- [NPC_GiveWeapon](NPC_GiveWeapon): 给 NPC 武器
- [NPC_GetAmmo](NPC_GetAmmo): 获取总弹药

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 射击时调用
