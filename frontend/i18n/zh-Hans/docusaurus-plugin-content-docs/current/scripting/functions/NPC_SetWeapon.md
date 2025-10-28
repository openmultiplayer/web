---
title: NPC_SetWeapon
sidebar_label: NPC_SetWeapon
description: 设置 NPC 的当前武器。
tags: ["npc", "武器", "战斗"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 的当前武器为特定武器 ID。

| 参数   | 说明            |
| ------ | --------------- |
| npcid  | NPC 的 ID       |
| weapon | 要设置的武器 ID |

## 返回值

如果武器设置成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Soldier");
    NPC_Spawn(npcid);

    // 设置 M4 为当前武器并给予弹药
    NPC_SetWeapon(npcid, WEAPON_M4);
    NPC_SetAmmo(npcid, 200); // 给予 200 发弹药

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/givegun", true))
    {
        // 给予 NPC 一把沙漠之鹰
        NPC_SetWeapon(0, WEAPON_DEAGLE);
        NPC_SetAmmo(0, 50); // 给予 50 发弹药

        SendClientMessage(playerid, 0x00FF00FF, "NPC 已装备沙漠之鹰");
        return 1;
    }

    if (!strcmp(cmdtext, "/disarm", true))
    {
        // 设置 NPC 为拳头
        NPC_SetWeapon(0, WEAPON_FIST);

        SendClientMessage(playerid, 0xFFFFFFFF, "NPC 已解除武装");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 设置武器将为 NPC 装备该武器
- 使用 NPC_SetAmmo 为武器提供弹药
- 武器 ID 0 代表拳头（无武装）
- 使用 NPC_GetWeapon 检查当前武器

## 相关函数

- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 的当前武器
- [NPC_SetAmmo](NPC_SetAmmo): 设置 NPC 武器的弹药
- [NPC_GetAmmo](NPC_GetAmmo): 获取 NPC 的当前弹药数量

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
