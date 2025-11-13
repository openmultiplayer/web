---
title: NPC_SetAmmoInClip
sidebar_label: NPC_SetAmmoInClip
description: Sets the amount of ammo in an NPC's weapon clip.
tags: ["npc", "weapon", "ammo"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the amount of ammo in an NPC's weapon clip.

| Name  | Description               |
| ----- | ------------------------- |
| npcid | The ID of the NPC         |
| ammo  | The amount of ammo to set |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setammoclip ", true, 13))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new ammo = strval(cmdtext[13]);
        if (ammo < 0)
            return SendClientMessage(playerid, 0xFF0000FF, "Ammo must be positive.");

        NPC_SetAmmoInClip(npcid, ammo);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d clip ammo set to %d", npcid, ammo);

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

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC shoots
