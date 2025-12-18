---
title: NPC_SetWeaponSkillLevel
sidebar_label: NPC_SetWeaponSkillLevel
description: 设置NPC的武器技能等级
tags: ["npc", "武器", "技能"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 的武器技能等级。

| 参数  | 说明                       |
| ----- | -------------------------- |
| npcid | NPC 的 ID                  |
| skill | 武器技能类型 (WEAPONSKILL) |
| level | 要设置的技能等级 (0-999)   |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponskill ", true, 16))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new level = strval(cmdtext[16]);

        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_PISTOL, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_PISTOL_SILENCED, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_DESERT_EAGLE, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_SHOTGUN, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_MICRO_UZI, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_MP5, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_AK47, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_M4, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_SNIPERRIFLE, level);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 所有武器技能设置为 %d", npcid, level);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 武器技能影响准确度和射击行为
- 技能等级范围从 0（差）到 999（杀手级）
- 不同武器类型有不同的技能类别

## 相关函数

- [NPC_GetWeaponSkillLevel](NPC_GetWeaponSkillLevel): 获取 NPC 武器技能等级
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): 设置武器准确度
- [NPC_GetWeaponAccuracy](NPC_GetWeaponAccuracy): 获取武器准确度
- [NPC_SetWeapon](NPC_SetWeapon): 设置 NPC 武器

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): 当 NPC 开火时被调用
