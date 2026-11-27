---
title: "NPC_GetAmmo | open.mp"
description: "Gets the ammunition amount for an NPC's current weapon."
canonical: https://open.mp/docs/scripting/functions/NPC_GetAmmo
language: en
---

# NPC\_GetAmmo

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the ammunition amount for an NPC's current weapon.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the amount of ammunition the NPC has for its current weapon.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkammo", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new ammo = NPC_GetAmmo(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has %d bullets remaining on total ammo", npcid, ammo);
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns the total ammunition count
-   If the NPC has no weapon, this returns 0
-   Infinite ammo NPCs still show the original ammo count

## Related Functions

-   [NPC\_SetAmmo](https://open.mp/docs/scripting/functions/NPC_SetAmmo): Set NPC ammunition
-   [NPC\_GetAmmoInClip](https://open.mp/docs/scripting/functions/NPC_GetAmmoInClip): Get ammunition in current clip
-   [NPC\_SetAmmoInClip](https://open.mp/docs/scripting/functions/NPC_SetAmmoInClip): Set ammunition in clip
-   [NPC\_GetWeapon](https://open.mp/docs/scripting/functions/NPC_GetWeapon): Get NPC's current weapon

## Related Callbacks

-   [OnNPCWeaponShot](https://open.mp/docs/scripting/callbacks/OnNPCWeaponShot): Called when NPC fires a weapon
