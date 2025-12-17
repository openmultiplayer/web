---
title: NPC_SetWeaponSkillLevel
sidebar_label: NPC_SetWeaponSkillLevel
description: Sets the weapon skill level for an NPC.
tags: ["npc", "weapon", "skill"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Sets the weapon skill level for an NPC.

| Name  | Description                              |
| ----- | ---------------------------------------- |
| npcid | The ID of the NPC                        |
| skill | The weapon skill type (WEAPONSKILL)      |
| level | The skill level to set (0-999)           |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponskill ", true, 16))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

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

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d all weapon skills set to %d", npcid, level);
        return 1;
    }
    return 0;
}
```

## Notes

- Weapon skill affects accuracy and shooting behavior
- Skill level ranges from 0 (poor) to 999 (hitman)
- Different weapon types have different skill categories

## Related Functions

- [NPC_GetWeaponSkillLevel](NPC_GetWeaponSkillLevel): Get NPC weapon skill level
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): Set weapon accuracy
- [NPC_GetWeaponAccuracy](NPC_GetWeaponAccuracy): Get weapon accuracy
- [NPC_SetWeapon](NPC_SetWeapon): Set NPC weapon

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
