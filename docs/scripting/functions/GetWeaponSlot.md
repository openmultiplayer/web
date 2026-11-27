---
title: "GetWeaponSlot | open.mp"
description: "Gets the slot of one weapon."
canonical: https://open.mp/docs/scripting/functions/GetWeaponSlot
language: en
---

# GetWeaponSlot

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the slot of one weapon.

| Name | Description |
| --- | --- |
| WEAPON:weaponid | The ID of the weapon to get the slot of. |

## Returns

The number of the [weapon slot](https://open.mp/docs/scripting/resources/weaponslots) (0 - 12)

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/weaponslot", true) == 0)
    {
        new WEAPON:weaponid = GetPlayerWeapon(playerid); // will store the id of the weapon the player is currently holding
        new WEAPON_SLOT:slot = GetWeaponSlot(weaponid); // will store the id of the weapon slot
        SendClientMessage(playerid, -1, "Your weapon is occupying the slot %d.", slot); // sends a formatted message to the player
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [GetPlayerWeapon](https://open.mp/docs/scripting/functions/GetPlayerWeapon): Gets the ID of the weapon a player is currently holding.
-   [GetPlayerWeaponData](https://open.mp/docs/scripting/functions/GetPlayerWeaponData): Get the weapon and ammo in a specific player's weapon slot (e.g. the weapon in the 'SMG' slot).
-   [GetPlayerAmmo](https://open.mp/docs/scripting/functions/GetPlayerAmmo): Gets the amount of ammo in a player's current weapon.
-   [SetPlayerArmedWeapon](https://open.mp/docs/scripting/functions/SetPlayerArmedWeapon): Sets which weapon (that a player already has) the player is holding.
-   [ResetPlayerWeapons](https://open.mp/docs/scripting/functions/ResetPlayerWeapons): Removes all weapons from a player.
-   [RemovePlayerWeapon](https://open.mp/docs/scripting/functions/RemovePlayerWeapon): Remove a specified weapon from a player.

## Related Resources

-   [Weapon Slots](https://open.mp/docs/scripting/resources/weaponslots).
