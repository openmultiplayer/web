---
title: NPC_SetWeaponShootTime
sidebar_label: NPC_SetWeaponShootTime
description: 设置 NPC 武器的射击间隔。
tags: ["npc", "武器", "射击", "时间"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 特定武器的射击间隔。

| 参数     | 说明                    |
| -------- | ----------------------- |
| npcid    | NPC 的 ID               |
| weaponid | 要设置射击时间的武器 ID |
| time     | 射击间隔（毫秒）        |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("RapidFire");
    NPC_Spawn(npcid);
    NPC_GiveWeapon(npcid, WEAPON_M4, 500); // M4 带 500 发弹药

    // 设置快速射击（每次射击间隔 100 毫秒）
    NPC_SetWeaponShootTime(npcid, 100);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/rapidfire", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        // 为 NPC 0 设置快速射击
        NPC_SetWeaponShootTime(0, 50);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 已启用快速射击");
        return 1;
    }

    if (!strcmp(cmdtext, "/slowfire", true))
    {
        // 为 NPC 0 设置慢速射击
        NPC_SetWeaponShootTime(0, 2000);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 射击速度很慢");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 射击时间以每次射击之间的毫秒为单位
- 较低的值 = 更快的射击频率
- 使用 NPC_GetWeaponShootTime 检查当前射击时间
- 影响武器的射击频率和战斗效果

## 相关函数

- [NPC_GetWeaponShootTime](NPC_GetWeaponShootTime): 获取射击时间
- [NPC_IsShooting](NPC_IsShooting): 检查是否正在射击
- [NPC_Shoot](NPC_Shoot): 让 NPC 射击
- [NPC_GetWeapon](NPC_GetWeapon): 获取当前武器

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 射击时调用
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): NPC 对他人造成伤害时调用
