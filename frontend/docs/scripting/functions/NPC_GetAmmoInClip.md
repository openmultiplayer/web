---
title: NPC_GetAmmoInClip
sidebar_label: NPC_GetAmmoInClip
description: Gets the ammunition in the current clip of an NPC's weapon.
tags: ["npc", "weapon", "ammo"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the ammunition in the current clip of an NPC's weapon.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the amount of ammunition in the NPC's current weapon clip.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Gunner");
    NPC_Spawn(npcid);
    
    NPC_SetWeapon(npcid, WEAPON_M4);
    NPC_SetAmmo(npcid, 300); // Give 300 ammo
    NPC_SetAmmoInClip(npcid, 50); // Set 50 ammo in clip
    
    new clipAmmo = NPC_GetAmmoInClip(npcid);
    new totalAmmo = NPC_GetAmmo(npcid);
    
    printf("NPC %d: %d in clip, %d total", npcid, clipAmmo, totalAmmo);
    
    return 1;
}

forward CheckNPCAmmo();
public CheckNPCAmmo()
{
    new clipAmmo = NPC_GetAmmoInClip(0);
    
    if (clipAmmo <= 5)
    {
        printf("NPC 0 has low clip ammo: %d", clipAmmo);
    }
}
```

## Notes

- Returns ammunition currently loaded in the weapon's magazine/clip
- This is different from total ammunition which includes reserves
- When the clip is empty, the NPC will need to reload (if enabled)
- Different weapons have different clip sizes

## Related Functions

- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): Set ammunition in clip
- [NPC_GetAmmo](NPC_GetAmmo): Get total ammunition
- [NPC_SetAmmo](NPC_SetAmmo): Set total ammunition
- [NPC_IsReloading](NPC_IsReloading): Check if NPC is reloading

## Related Callbacks

- [OnNPCWeaponShot](OnNPCWeaponShot): Called when NPC fires a weapon
- [OnNPCWeaponStateChange](OnNPCWeaponStateChange): Called when weapon state changes
