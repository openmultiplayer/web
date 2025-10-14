---
title: NPC_GetAmmo
sidebar_label: NPC_GetAmmo
description: 获取 NPC 当前武器的弹药数量。
tags: ["npc", "武器", "子弹"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 当前武器的弹药数量。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 当前武器的弹药数量。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Soldier");
    NPC_Spawn(npcid);

    NPC_SetWeapon(npcid, WEAPON_AK47);
    NPC_SetAmmo(npcid, 150); // 给予 150 发弹药

    new ammo = NPC_GetAmmo(npcid);
    printf("NPC %d 有 %d 发弹药", npcid, ammo); // 输出: 150

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkammo", true))
    {
        new ammo = NPC_GetAmmo(0);
        new msg[64];
        format(msg, sizeof(msg), "NPC 0 弹药: %d", ammo);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回总弹药数量，不仅仅是弹夹中的弹药
- 如果 NPC 没有武器，这可能返回 0
- 无限弹药的 NPC 可能仍显示原始弹药数量
- 这包括备用弹药，不仅仅是当前弹夹中的弹药

## 相关函数

- [NPC_SetAmmo](NPC_SetAmmo): 设置 NPC 弹药
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): 获取当前弹夹中的弹药
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): 设置弹夹中的弹药
- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 当前武器

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): 当 NPC 发射武器时调用
