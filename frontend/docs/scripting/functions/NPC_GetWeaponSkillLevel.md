---
title: NPC_GetWeaponSkillLevel
sidebar_label: NPC_GetWeaponSkillLevel
description: Gets the weapon skill level of an NPC.
tags: ["npc", "weapon", "skill"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the weapon skill level of an NPC.

| Name  | Description                         |
| ----- | ----------------------------------- |
| npcid | The ID of the NPC                   |
| skill | The weapon skill type (WEAPONSKILL) |

## Returns

Returns the weapon skill level (0-999), or `UNKNOWN_WEAPONSKILL` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponskill", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new pistol = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_PISTOL);
        new silenced = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_PISTOL_SILENCED);
        new deagle = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_DESERT_EAGLE);
        new shotgun = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_SHOTGUN);
        new micro = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_MICRO_UZI);
        new mp5 = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_MP5);
        new ak47 = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_AK47);
        new m4 = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_M4);
        new sniper = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_SNIPERRIFLE);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon skills:", npcid);
        SendClientMessage(playerid, 0xFFFFFFFF, "Pistol:%d Silenced:%d Deagle:%d Shotgun:%d", pistol, silenced, deagle, shotgun);
        SendClientMessage(playerid, 0xFFFFFFFF, "Micro:%d MP5:%d AK47:%d M4:%d Sniper:%d", micro, mp5, ak47, m4, sniper);
        return 1;
    }
    return 0;
}
```

## Notes

- Weapon skill affects accuracy and shooting behavior
- Skill level ranges from 0 (poor) to 999 (hitman)
- Returns `UNKNOWN_WEAPONSKILL` if the NPC is invalid or skill type is invalid

## Related Functions

- [NPC_SetWeaponSkillLevel](NPC_SetWeaponSkillLevel): Set NPC weapon skill level
- [NPC_GetWeaponAccuracy](NPC_GetWeaponAccuracy): Get weapon accuracy
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): Set weapon accuracy
- [NPC_GetWeapon](NPC_GetWeapon): Get NPC weapon

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
