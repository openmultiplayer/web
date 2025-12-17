---
title: NPC_SetWeaponClipSize
sidebar_label: NPC_SetWeaponClipSize
description: Sets the clip size for an NPC's weapon.
tags: ["npc", "weapon", "ammo"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Sets the clip size for an NPC's current weapon.

| Name   | Description          |
| ------ | -------------------- |
| npcid  | The ID of the NPC    |
| weapon | The weapon ID to set |
| size   | The new clip size    |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponclipsize ", true, 19))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new clipsize = strval(cmdtext[19]);

        NPC_SetWeaponClipSize(npcid, WEAPON:weapon, clipsize);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon %d clip size set to %d", npcid, weapon, clipsize);
        return 1;
    }
    return 0;
}
```

## Notes

- The NPC must have a weapon for this function to work
- Clip size affects how much ammo the NPC can fire before needing to reload
- Different weapons have different default clip sizes

## Related Functions

- [NPC_GetWeaponClipSize](NPC_GetWeaponClipSize): Get weapon clip size
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): Set current clip ammunition
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Get current clip ammunition
- [NPC_SetWeapon](NPC_SetWeapon): Set NPC weapon

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
