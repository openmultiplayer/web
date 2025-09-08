---
title: NPC_GetWeapon
sidebar_label: NPC_GetWeapon
description: Gets the current weapon an NPC is holding.
tags: ["npc", "weapon"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the current weapon an NPC is holding.

| Name  | Description           |
| ----- | --------------------- |
| npcid | The ID of the NPC     |

## Returns

Returns the weapon ID that the NPC is currently holding.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Gunner");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_AK47);
    NPC_SetAmmo(npcid, 300);
    
    new weapon = NPC_GetWeapon(npcid);
    printf("NPC %d is holding weapon %d", npcid, weapon);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweapon", true))
    {
        new weapon = NPC_GetWeapon(0);
        new ammo = NPC_GetAmmo(0);
        
        new weaponName[32];
        switch(weapon)
        {
            case 0: weaponName = "Fists";
            case WEAPON_COLT45: weaponName = "Colt 45";
            case WEAPON_UZI: weaponName = "Micro Uzi";
            case WEAPON_AK47: weaponName = "AK-47";
            case WEAPON_M4: weaponName = "M4";
            case WEAPON_SHOTGUN: weaponName = "Shotgun";
            case WEAPON_SNIPER: weaponName = "Sniper Rifle";
            default: format(weaponName, sizeof(weaponName), "Weapon %d", weapon);
        }
        
        new msg[64];
        format(msg, sizeof(msg), "NPC 0: %s (%d ammo)", weaponName, ammo);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns 0 if the NPC has no weapon (fists)
- Weapon IDs are the same as player weapon IDs
- Use this before setting ammunition or weapon properties
- The NPC must be valid for this function to work

## Related Functions

- [NPC_SetWeapon](NPC_SetWeapon): Set NPC weapon
- [NPC_GetAmmo](NPC_GetAmmo): Get NPC ammunition
- [NPC_SetAmmo](NPC_SetAmmo): Set NPC ammunition
- [NPC_RemoveWeapon](NPC_RemoveWeapon): Remove NPC weapon

## Related Callbacks

- [OnNPCWeaponShot](OnNPCWeaponShot): Called when NPC fires weapon