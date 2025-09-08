---
title: NPC_SetAmmoInClip
sidebar_label: NPC_SetAmmoInClip
description: Sets the amount of ammo in an NPC's weapon clip.
tags: ["npc", "weapon", "ammo"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the amount of ammo in an NPC's weapon clip.

| Name  | Description                      |
| ----- | -------------------------------- |
| npcid | The ID of the NPC               |
| ammo  | The amount of ammo to set       |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Gunner");
    NPC_Spawn(npcid);
    NPC_GiveWeapon(npcid, WEAPON_DEAGLE, 100); // Desert Eagle with 100 ammo
    
    // Set clip to half capacity
    NPC_SetAmmoInClip(npcid, 3);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/fillclip", true))
    {
        // Fill NPC 0's weapon clip
        NPC_SetAmmoInClip(0, 7); // Give 7 ammo to clip
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 clip filled");
        return 1;
    }
    return 0;
}
```

## Notes

- Amount cannot exceed the weapon's maximum clip size
- Setting to 0 will require the NPC to reload before shooting
- Use NPC_GetAmmoInClip to check current clip amount
- Affects only the current weapon's clip, not total ammo

## Related Functions

- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Get ammo in clip
- [NPC_GetWeaponClipSize](NPC_GetWeaponClipSize): Get max clip size
- [NPC_GiveWeapon](NPC_GiveWeapon): Give weapon to NPC
- [NPC_GetAmmo](NPC_GetAmmo): Get total ammo

## Related Callbacks

- [OnNPCWeaponShot](OnNPCWeaponShot): Called when NPC shoots
- [OnNPCReload](OnNPCReload): Called when NPC reloads
