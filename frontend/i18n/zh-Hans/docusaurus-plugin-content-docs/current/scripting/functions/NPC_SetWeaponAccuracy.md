---
title: NPC_SetWeaponAccuracy
sidebar_label: NPC_SetWeaponAccuracy
description: 设置 NPC 特定武器的精准度。
tags: ["npc", "武器", "精准度"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 特定武器的精准度。

| 名称     | 描述                   |
| -------- | ---------------------- |
| npcid    | NPC 的 ID              |
| weaponid | 要设置精准度的武器 ID  |
| accuracy | 精准度值（0.0 到 1.0） |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Sniper");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_SNIPER);

    // 设置狙击步枪精准度为 95%
    NPC_SetWeaponAccuracy(npcid, WEAPON_SNIPER, 0.95);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setaccuracy", true))
    {
        new npcid = NPC_Create("Marksman");
        NPC_Spawn(npcid);
        NPC_SetWeapon(npcid, WEAPON_DEAGLE);

        // 设置沙漠之鹰精准度为 80%
        NPC_SetWeaponAccuracy(npcid, WEAPON_DEAGLE, 0.8);

        SendClientMessage(playerid, 0xFFFFFFFF, "NPC 武器精准度已设置");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 精准度值范围从 0.0（从不命中）到 1.0（总是命中）
- 默认精准度因武器类型而异
- 更高的精准度使 NPC 在战斗中更危险
- 精准度影响子弹散布和命中概率

## 相关函数

- [NPC_GetWeaponAccuracy](NPC_GetWeaponAccuracy): 获取武器精准度
- [NPC_SetWeapon](NPC_SetWeapon): 设置 NPC 武器
- [NPC_Shoot](NPC_Shoot): 让 NPC 开枪

## 相关回调

_此函数不会触发任何特定的回调。_
