---
title: "NPC_IsInfiniteAmmoEnabled | open.mp"
description: "Checks if infinite ammo is enabled for an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_IsInfiniteAmmoEnabled
language: en
---

# NPC\_IsInfiniteAmmoEnabled

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if infinite ammo is enabled for an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if infinite ammo is enabled, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkinfiniteammo", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:infiniteAmmo = NPC_IsInfiniteAmmoEnabled(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d infinite ammo enabled: %s", npcid, infiniteAmmo ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

-   Infinite ammo prevents the NPC from running out of ammunition
-   The ammo count may still display as decreasing but weapon functionality remains
-   Can be toggled with NPC\_EnableInfiniteAmmo

## Related Functions

-   [NPC\_EnableInfiniteAmmo](https://open.mp/docs/scripting/functions/NPC_EnableInfiniteAmmo): Enable/disable infinite ammo
-   [NPC\_GetAmmo](https://open.mp/docs/scripting/functions/NPC_GetAmmo): Get NPC ammunition
-   [NPC\_SetAmmo](https://open.mp/docs/scripting/functions/NPC_SetAmmo): Set NPC ammunition
-   [NPC\_GetWeapon](https://open.mp/docs/scripting/functions/NPC_GetWeapon): Get NPC weapon

## Related Callbacks

-   [OnNPCWeaponShot](https://open.mp/docs/scripting/callbacks/OnNPCWeaponShot): Called when NPC fires a weapon
