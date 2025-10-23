---
title: NPC_GetWeaponActualClipSize
sidebar_label: NPC_GetWeaponActualClipSize
description: 获取NPC武器的实际（默认）弹夹容量。
tags: ["npc", "武器"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

从游戏数据中获取 NPC 武器的实际（默认）弹夹容量。

| 名称     | 描述            |
| -------- | --------------- |
| npcid    | NPC 的 ID       |
| weaponid | 要检查的武器 ID |

## 返回值

返回默认弹夹容量，出错时返回-1。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Soldier");
    NPC_Spawn(npcid);

    NPC_SetWeapon(npcid, WEAPON_AK47);

    new actualClipSize = NPC_GetWeaponActualClipSize(npcid, WEAPON_AK47);
    new customClipSize = NPC_GetWeaponClipSize(npcid, WEAPON_AK47);

    printf("NPC %d AK47 - 实际: %d, 自定义: %d", npcid, actualClipSize, customClipSize);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/defaultclip", true))
    {
        new actualClip = NPC_GetWeaponActualClipSize(0, WEAPON_AK47);
        if (actualClip != -1)
        {
            new msg[64];
            format(msg, sizeof(msg), "AK47默认弹夹: %d发", actualClip);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回武器的原始游戏弹夹容量
- 这与使用`NPC_SetWeaponClipSize`设置的自定义弹夹容量不同
- 使用此函数与自定义设置比较或重置为默认值

## 相关函数

- [NPC_SetWeaponClipSize](NPC_SetWeaponClipSize): 设置自定义弹夹容量
- [NPC_GetWeaponClipSize](NPC_GetWeaponClipSize): 获取当前弹夹容量
- [NPC_GetAmmo](NPC_GetAmmo): 获取 NPC 当前弹药

## 相关回调

- [../callbacks/OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): 武器状态改变时调用
