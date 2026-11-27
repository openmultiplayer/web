---
title: "NPC_SetAmmoInClip | open.mp"
description: "Sets the amount of ammo in an NPC's weapon clip."
canonical: https://open.mp/docs/scripting/functions/NPC_SetAmmoInClip
language: en
---

# NPC\_SetAmmoInClip

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets the amount of ammo in an NPC's weapon clip.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| ammo | The amount of ammo to set |

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

-   Amount cannot exceed the weapon's maximum clip size
-   Setting to 0 will require the NPC to reload before shooting
-   Use NPC\_GetAmmoInClip to check current clip amount
-   Affects only the current weapon's clip, not total ammo

## Related Functions

-   [NPC\_GetAmmoInClip](https://open.mp/docs/scripting/functions/NPC_GetAmmoInClip): Get ammo in clip
-   [NPC\_GetWeaponClipSize](https://open.mp/docs/scripting/functions/NPC_GetWeaponClipSize): Get max clip size
-   [NPC\_SetWeapon](https://open.mp/docs/scripting/functions/NPC_SetWeapon): Set NPC weapon
-   [NPC\_GetAmmo](https://open.mp/docs/scripting/functions/NPC_GetAmmo): Get total ammo

## Related Callbacks

-   [OnNPCWeaponShot](https://open.mp/docs/scripting/callbacks/OnNPCWeaponShot): Called when NPC shoots
