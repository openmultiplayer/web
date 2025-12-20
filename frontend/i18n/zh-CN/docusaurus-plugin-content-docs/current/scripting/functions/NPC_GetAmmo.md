---
title: NPC_GetAmmo
sidebar_label: NPC_GetAmmo
description: 获取 NPC 当前武器的弹药数量。
tags: ["npc", "武器", "子弹"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 当前武器的弹药数量。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 当前武器的弹药数量。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkammo", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new ammo = NPC_GetAmmo(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 总共还有 %d 发子弹", npcid, ammo);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 返回总弹药数量
- 如果 NPC 没有武器，此函数返回 0
- 拥有无限弹药的 NPC 仍显示原始弹药数量

## 相关函数

- [NPC_SetAmmo](NPC_SetAmmo): 设置 NPC 弹药
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): 获取当前弹匣中的弹药
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): 设置弹匣中的弹药
- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 当前武器

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
