---
title: "NPC_GetWeaponState | open.mp"
description: "Gets the weapon state of an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_GetWeaponState
language: en
---

# NPC\_GetWeaponState

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the weapon state of an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the weapon state ID.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponstate", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new WEAPONSTATE:weaponState = WEAPONSTATE:NPC_GetWeaponState(npcid);

        static weaponStates[5][64] =
        {
            "Unknown",
            "No ammo remaining",
            "Single bullet left",
            "More than one bullet left",
            "Reloading"
        };

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon state: %s (%d)", npcid, weaponStates[weaponState], _:weaponState);
        return 1;
    }
    return 0;
}
```

## Notes

-   Weapon states include reloading, shooting, out of ammo, etc.
-   Use this to check the current status of the NPC's weapon
-   State values correspond to PlayerWeaponState constants

## Related Functions

-   [NPC\_GetWeapon](https://open.mp/docs/scripting/functions/NPC_GetWeapon): Get NPC's current weapon
-   [NPC\_IsReloading](https://open.mp/docs/scripting/functions/NPC_IsReloading): Check if NPC is reloading
-   [NPC\_IsShooting](https://open.mp/docs/scripting/functions/NPC_IsShooting): Check if NPC is shooting
-   [NPC\_GetAmmoInClip](https://open.mp/docs/scripting/functions/NPC_GetAmmoInClip): Get ammo in clip

## Related Callbacks

-   [OnNPCWeaponStateChange](https://open.mp/docs/scripting/callbacks/OnNPCWeaponStateChange): Called when weapon state changes
