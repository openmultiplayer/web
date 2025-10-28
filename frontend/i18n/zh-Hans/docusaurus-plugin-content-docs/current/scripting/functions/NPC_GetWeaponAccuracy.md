---
title: NPC_GetWeaponAccuracy
sidebar_label: NPC_GetWeaponAccuracy
description: 获取 NPC 武器的精度设置。
tags: ["npc", "武器"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

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
public OnGameModeInit()
{
    new npcid = NPC_Create("Sniper");
    NPC_Spawn(npcid);

    NPC_SetWeapon(npcid, WEAPON_SNIPER);
    NPC_SetWeaponAccuracy(npcid, WEAPON_SNIPER, 0.95);

    new Float:accuracy = NPC_GetWeaponAccuracy(npcid, WEAPON_SNIPER);
    printf("NPC %d狙击枪精度: %.2f", npcid, accuracy);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkaccuracy", true))
    {
        new Float:accuracy = NPC_GetWeaponAccuracy(0, WEAPON_SNIPER);
        if (accuracy >= 0.0)
        {
            new msg[64];
            format(msg, sizeof(msg), "NPC 0狙击枪精度: %.2f", accuracy);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "获取精度失败");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 精度是介于 0.0（0%准确）和 1.0（100%准确）之间的值
- 若 NPC ID 无效或武器不存在则返回-1.0
- 默认精度因武器类型而异

## 相关函数

- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): 设置武器精度
- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 当前武器
- [NPC_SetWeapon](NPC_SetWeapon): 设置 NPC 武器

## 相关回调

- [../callbacks/OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
- [../callbacks/OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): 武器状态改变时调用
