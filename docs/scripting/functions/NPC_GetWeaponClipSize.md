---
title: "NPC_GetWeaponClipSize | open.mp"
description: "Gets the clip size setting for an NPC's weapon."
canonical: https://open.mp/docs/scripting/functions/NPC_GetWeaponClipSize
language: en
---

# NPC\_GetWeaponClipSize

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the clip size setting for an NPC's weapon.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| weaponid | The weapon ID to check |

## Returns

Returns the weapon's clip size, or -1 on error.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponclipsize", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new clipsize = NPC_GetWeaponClipSize(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon clip size: %d", npcid, clipsize);
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns the current custom clip size setting
-   Different weapons have different default clip sizes

## Related Functions

-   [NPC\_SetWeaponClipSize](https://open.mp/docs/scripting/functions/NPC_SetWeaponClipSize): Set weapon clip size
-   [NPC\_GetWeapon](https://open.mp/docs/scripting/functions/NPC_GetWeapon): Get NPC's current weapon
-   [NPC\_GetAmmo](https://open.mp/docs/scripting/functions/NPC_GetAmmo): Get NPC's current ammo

## Related Callbacks

-   [OnNPCWeaponStateChange](https://open.mp/docs/scripting/callbacks/OnNPCWeaponStateChange): Called when weapon state changes
