---
title: NPC_SetWeaponShootTime
sidebar_label: NPC_SetWeaponShootTime
description: 设置 NPC 武器的射击间隔。
tags: ["npc", "武器", "射击", "时间"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

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
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponshoottime ", true, 20))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new weapon = NPC_GetWeapon(npcid);
        new shoottime = strval(cmdtext[20]);

        NPC_SetWeaponShootTime(npcid, WEAPON:weapon, shoottime);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 武器 %d 射击时间设置为 %d 毫秒", npcid, weapon, shoottime);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 射击时间以每次射击之间的毫秒为单位
- 使用 NPC_GetWeaponShootTime 检查当前射击时间

## 相关函数

- [NPC_GetWeaponShootTime](NPC_GetWeaponShootTime): 获取射击时间
- [NPC_IsShooting](NPC_IsShooting): 检查是否正在射击
- [NPC_Shoot](NPC_Shoot): 让 NPC 射击
- [NPC_GetWeapon](NPC_GetWeapon): 获取当前武器

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 射击时调用
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): NPC 对他人造成伤害时调用
