---
title: "NPC_SetWeaponSkillLevel | open.mp"
description: "Sets the weapon skill level for an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_SetWeaponSkillLevel
language: en
---

# NPC\_SetWeaponSkillLevel

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets the weapon skill level for an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| skill | The weapon skill type (WEAPONSKILL) |
| level | The skill level to set (0-999) |

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

-   Weapon skill affects accuracy and shooting behavior
-   Skill level ranges from 0 (poor) to 999 (hitman)
-   Different weapon types have different skill categories

## Related Functions

-   [NPC\_GetWeaponSkillLevel](https://open.mp/docs/scripting/functions/NPC_GetWeaponSkillLevel): Get NPC weapon skill level
-   [NPC\_SetWeaponAccuracy](https://open.mp/docs/scripting/functions/NPC_SetWeaponAccuracy): Set weapon accuracy
-   [NPC\_GetWeaponAccuracy](https://open.mp/docs/scripting/functions/NPC_GetWeaponAccuracy): Get weapon accuracy
-   [NPC\_SetWeapon](https://open.mp/docs/scripting/functions/NPC_SetWeapon): Set NPC weapon

## Related Callbacks

-   [OnNPCWeaponShot](https://open.mp/docs/scripting/callbacks/OnNPCWeaponShot): Called when NPC fires weapon
