---
title: NPC_SetAmmo
sidebar_label: NPC_SetAmmo
description: 设置 NPC 当前武器的弹药数量。
tags: ["npc", "武器", "子弹", "弹药"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 当前武器的弹药数量。

| 名称  | 说明             |
| ----- | ---------------- |
| npcid | NPC 的 ID        |
| ammo  | 要设置的弹药数量 |

## 返回值

如果弹药设置成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Soldier");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_M4); // M4

    // 设置 M4 弹药为 200
    NPC_SetAmmo(npcid, 200);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/giveammo", true))
    {
        new npcid = NPC_Create("Gunner");
        NPC_Spawn(npcid);
        NPC_SetWeapon(npcid, WEAPON_DEAGLE);

        // 给沙漠之鹰 50 发弹药
        NPC_SetAmmo(npcid, 50);

        SendClientMessage(playerid, 0xFFFFFFFF, "NPC 已装备弹药");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 将弹药设置为 0 会使武器无法使用
- 不同武器有不同的最大弹药容量
- 这设置的是总弹药量，不仅仅是当前弹匣
- 与 `NPC_SetAmmoInClip` 配合使用以进行精确控制

## 相关函数

- [NPC_GetAmmo](NPC_GetAmmo): 获取 NPC 弹药
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): 设置当前弹匣弹药
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): 获取当前弹匣弹药
- [NPC_EnableInfiniteAmmo](NPC_EnableInfiniteAmmo): 启用无限弹药

## 相关回调

_此函数不会触发任何特定的回调。_
