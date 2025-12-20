---
title: NPC_SetWeaponAccuracy
sidebar_label: NPC_SetWeaponAccuracy
description: 设置 NPC 特定武器的精准度。
tags: ["npc", "武器", "精准度"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 特定武器的精准度。

| 参数     | 说明                   |
| -------- | ---------------------- |
| npcid    | NPC 的 ID              |
| weaponid | 要设置精准度的武器 ID  |
| accuracy | 精准度值（0.0 到 1.0） |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponaccuracy ", true, 19))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new weapon = NPC_GetWeapon(npcid);
        new Float:accuracy = floatstr(cmdtext[19]);

        NPC_SetWeaponAccuracy(npcid, WEAPON:weapon, accuracy);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 武器 %d 精准度设置为 %.2f", npcid, weapon, accuracy);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 精准度值范围从 0.0（从不命中）到 1.0（总是命中）
- 默认精准度因武器类型而异
- 精准度影响子弹散布和命中概率

## 相关函数

- [NPC_GetWeaponAccuracy](NPC_GetWeaponAccuracy): 获取武器精准度
- [NPC_SetWeapon](NPC_SetWeapon): 设置 NPC 武器
- [NPC_Shoot](NPC_Shoot): 让 NPC 开火

## 相关回调

_此函数不会触发任何特定的回调。_
