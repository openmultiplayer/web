---
title: NPC_SetAmmo
sidebar_label: NPC_SetAmmo
description: 设置 NPC 当前武器的弹药数量。
tags: ["npc", "武器", "子弹", "弹药"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 当前武器的弹药数量。

| 参数  | 说明             |
| ----- | ---------------- |
| npcid | NPC 的 ID        |
| ammo  | 要设置的弹药数量 |

## 返回值

如果弹药设置成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setammo ", true, 9))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new ammo = strval(cmdtext[9]);
        if (ammo < 0)
            return SendClientMessage(playerid, 0xFF0000FF, "弹药必须是非负整数。");

        NPC_SetAmmo(npcid, ammo);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 弹药设置为 %d", npcid, ammo);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 将弹药设置为 0 会使武器无法使用
- 不同武器有不同的最大弹药容量
- 这设置的是总弹药量，不仅仅是当前弹匣

## 相关函数

- [NPC_GetAmmo](NPC_GetAmmo): 获取 NPC 弹药
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): 设置当前弹匣弹药
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): 获取当前弹匣弹药
- [NPC_EnableInfiniteAmmo](NPC_EnableInfiniteAmmo): 启用无限弹药

## 相关回调

_此函数不会触发任何特定的回调。_
