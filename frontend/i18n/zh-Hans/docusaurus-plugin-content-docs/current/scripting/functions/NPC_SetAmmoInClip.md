---
title: NPC_SetAmmoInClip
sidebar_label: NPC_SetAmmoInClip
description: 设置 NPC 武器弹匣中的弹药数量。
tags: ["npc", "武器", "子弹"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 武器弹匣中的弹药数量。

| 名称  | 描述             |
| ----- | ---------------- |
| npcid | NPC 的 ID        |
| ammo  | 要设置的弹药数量 |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Gunner");
    NPC_Spawn(npcid);
    NPC_GiveWeapon(npcid, WEAPON_DEAGLE, 100); // 沙漠之鹰配 100 发弹药

    // 设置弹匣为一半容量
    NPC_SetAmmoInClip(npcid, 3);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/fillclip", true))
    {
        // 装满 NPC 0 的武器弹匣
        NPC_SetAmmoInClip(0, 7); // 给弹匣 7 发弹药
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 弹匣已装满");
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
