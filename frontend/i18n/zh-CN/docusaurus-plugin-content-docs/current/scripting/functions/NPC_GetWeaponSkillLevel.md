---
title: NPC_GetWeaponSkillLevel
sidebar_label: NPC_GetWeaponSkillLevel
description: 获取NPC的武器技能等级
tags: ["npc", "武器", "技能"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 的武器技能等级。

| 参数  | 说明                       |
| ----- | -------------------------- |
| npcid | NPC 的 ID                  |
| skill | 武器技能类型 (WEAPONSKILL) |

## 返回值

返回武器技能等级（0-999），失败时返回 `UNKNOWN_WEAPONSKILL`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponskill", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new pistol = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_PISTOL);
        new silenced = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_PISTOL_SILENCED);
        new deagle = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_DESERT_EAGLE);
        new shotgun = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_SHOTGUN);
        new micro = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_MICRO_UZI);
        new mp5 = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_MP5);
        new ak47 = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_AK47);
        new m4 = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_M4);
        new sniper = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_SNIPERRIFLE);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 的武器技能:", npcid);
        SendClientMessage(playerid, 0xFFFFFFFF, "手枪:%d 消音手枪:%d 沙漠之鹰:%d 霰弹枪:%d", pistol, silenced, deagle, shotgun);
        SendClientMessage(playerid, 0xFFFFFFFF, "微型冲锋枪:%d MP5:%d AK47:%d M4:%d 狙击枪:%d", micro, mp5, ak47, m4, sniper);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 武器技能影响准确度和射击行为
- 技能等级范围从 0（差）到 999（杀手级）
- 若 NPC 无效或技能类型无效，则返回 `UNKNOWN_WEAPONSKILL`

## 相关函数

- [NPC_SetWeaponSkillLevel](NPC_SetWeaponSkillLevel): 设置 NPC 武器技能等级
- [NPC_GetWeaponAccuracy](NPC_GetWeaponAccuracy): 获取武器准确度
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): 设置武器准确度
- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 武器

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): 当 NPC 开火时被调用
