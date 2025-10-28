---
title: NPC_GetWeaponClipSize
sidebar_label: NPC_GetWeaponClipSize
description: 获取 NPC 武器的弹夹容量设置。
tags: ["npc", "武器"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

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
public OnGameModeInit()
{
    new npcid = NPC_Create("Gunner");
    NPC_Spawn(npcid);

    NPC_SetWeapon(npcid, WEAPON_AK47);
    NPC_SetWeaponClipSize(npcid, WEAPON_AK47, 50); // 扩展弹夹

    new clipSize = NPC_GetWeaponClipSize(npcid, WEAPON_AK47);
    printf("NPC %d AK47弹夹容量: %d", npcid, clipSize);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkclip", true))
    {
        new clipSize = NPC_GetWeaponClipSize(0, WEAPON_AK47);
        if (clipSize != -1)
        {
            new msg[64];
            format(msg, sizeof(msg), "NPC 0 AK47弹夹: %d发", clipSize);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回当前自定义弹夹容量设置
- 不同武器有不同的默认弹夹容量
- 自定义弹夹容量可以大于正常容量以实现扩展弹匣

## 相关函数

- [NPC_SetWeaponClipSize](NPC_SetWeaponClipSize): 设置武器弹夹容量
- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 当前武器
- [NPC_GetAmmo](NPC_GetAmmo): 获取 NPC 当前弹药

## 相关回调

- [../callbacks/OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): 武器状态改变时调用
