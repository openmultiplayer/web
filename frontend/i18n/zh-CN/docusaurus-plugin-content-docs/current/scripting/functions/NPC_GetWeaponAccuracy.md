---
title: NPC_GetWeaponAccuracy
sidebar_label: NPC_GetWeaponAccuracy
description: 获取 NPC 武器的精度设置。
tags: ["npc", "武器"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 武器的精度设置。

| 参数     | 说明            |
| -------- | --------------- |
| npcid    | NPC 的 ID       |
| weaponid | 要检查的武器 ID |

## 返回值

返回精度值（0.0 到 1.0），出错时返回-1.0。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponaccuracy", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new weapon = NPC_GetWeapon(npcid);
        new Float:accuracy = NPC_GetWeaponAccuracy(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 武器 %d 精度: %.2f", npcid, weapon, accuracy);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 精度是介于 0.0（0%准确）和 1.0（100%准确）之间的值
- 若 NPC ID 无效或武器不存在则返回-1.0

## 相关函数

- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): 设置武器精度
- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 当前武器
- [NPC_SetWeapon](NPC_SetWeapon): 设置 NPC 武器

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
- [../callbacks/OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): 武器状态改变时调用
