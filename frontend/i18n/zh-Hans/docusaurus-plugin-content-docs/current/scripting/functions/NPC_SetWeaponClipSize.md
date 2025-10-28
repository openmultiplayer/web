---
title: NPC_SetWeaponClipSize
sidebar_label: NPC_SetWeaponClipSize
description: 设置 NPC 武器的弹匣容量。
tags: ["npc", "武器", "子弹"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

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
public OnGameModeInit()
{
    new npcid = NPC_Create("Gunner");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_M4); // M4
    NPC_SetAmmo(npcid, 500); // 给予 500 发弹药

    // 设置大弹匣容量
    NPC_SetWeaponClipSize(npcid, WEAPON_M4, 100);

    printf("NPC %d M4 弹匣容量设置为 100", npcid);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/bigclip", true))
    {
        // 为 NPC 0 设置大弹匣
        NPC_SetWeaponClipSize(0, WEAPON_M4, 999);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 武器弹匣容量已增加");
        return 1;
    }

    if (!strcmp(cmdtext, "/realisticclip", true))
    {
        new weapon = NPC_GetWeapon(0);

        // 为 NPC 0 设置真实弹匣容量
        switch (weapon)
        {
            case WEAPON_COLT45, WEAPON_SILENCED: NPC_SetWeaponClipSize(0, weapon, 17); // 9mm, 消音 9mm
            case WEAPON_DEAGLE: NPC_SetWeaponClipSize(0, weapon, 7);      // 沙漠之鹰
            case WEAPON_SHOTGUN: NPC_SetWeaponClipSize(0, weapon, 12);     // 霰弹枪
            case WEAPON_MP5: NPC_SetWeaponClipSize(0, weapon, 50);     // MP5
            case WEAPON_AK47: NPC_SetWeaponClipSize(0, weapon, 30);     // AK-47
            case WEAPON_M4: NPC_SetWeaponClipSize(0, weapon, 50);     // M4
        }
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 真实弹匣容量已设置");
        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 必须拥有武器此函数才能工作
- 弹匣容量影响 NPC 在需要重新装填前可以发射多少弹药
- 使用 0 设置无限弹匣容量（无需重新装填）
- 更改立即生效
- 不同武器有不同的默认弹匣容量

## 相关函数

- [NPC_GetWeaponClipSize](NPC_GetWeaponClipSize): 获取武器弹匣容量
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): 设置当前弹匣弹药
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): 获取当前弹匣弹药
- [NPC_SetWeapon](NPC_SetWeapon): 设置 NPC 武器

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
