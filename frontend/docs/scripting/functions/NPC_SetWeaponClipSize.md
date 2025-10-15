---
title: NPC_SetWeaponClipSize
sidebar_label: NPC_SetWeaponClipSize
description: Sets the clip size for an NPC's weapon.
tags: ["npc", "weapon", "ammo"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the clip size for an NPC's current weapon.

| Name     | Description                    |
| -------- | ------------------------------ |
| npcid    | The ID of the NPC              |
| weapon | The weapon ID to set           |
| size | The new clip size              |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Gunner");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_M4); // M4
    NPC_SetAmmo(npcid, 500); // Give 500 ammo
    
    // Set large clip size
    NPC_SetWeaponClipSize(npcid, WEAPON_M4, 100);
    
    printf("NPC %d M4 clip size set to 100", npcid);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/bigclip", true))
    {
        // Set large clip for NPC 0
        NPC_SetWeaponClipSize(0, WEAPON_M4, 999);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 weapon clip increased");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/realisticclip", true))
    {
        new weapon = NPC_GetWeapon(0);
        
        // Set realistic clip size for NPC 0
        switch (weapon)
        {
            case WEAPON_COLT45, WEAPON_SILENCED: NPC_SetWeaponClipSize(0, weapon, 17); // 9mm, Silenced 9mm
            case WEAPON_DEAGLE: NPC_SetWeaponClipSize(0, weapon, 7);      // Desert Eagle
            case WEAPON_SHOTGUN: NPC_SetWeaponClipSize(0, weapon, 12);     // Shotgun
            case WEAPON_MP5: NPC_SetWeaponClipSize(0, weapon, 50);     // MP5
            case WEAPON_AK47: NPC_SetWeaponClipSize(0, weapon, 30);     // AK-47
            case WEAPON_M4: NPC_SetWeaponClipSize(0, weapon, 50);     // M4
        }
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 realistic clip set");
        return 1;
    }
    return 0;
}
```

## Notes

- The NPC must have a weapon for this function to work
- Clip size affects how much ammo the NPC can fire before needing to reload
- Use 0 to set unlimited clip size (no reloading needed)
- Changes take effect immediately
- Different weapons have different default clip sizes

## Related Functions

- [NPC_GetWeaponClipSize](NPC_GetWeaponClipSize): Get weapon clip size
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): Set current clip ammunition
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Get current clip ammunition
- [NPC_SetWeapon](NPC_SetWeapon): Set NPC weapon

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon