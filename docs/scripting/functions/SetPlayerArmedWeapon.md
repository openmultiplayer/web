---
title: "SetPlayerArmedWeapon | open.mp"
description: "Sets which weapon (that a player already has) the player is holding."
canonical: https://open.mp/docs/scripting/functions/SetPlayerArmedWeapon
language: en
---

# SetPlayerArmedWeapon

## Description

Sets which weapon (that a player already has) the player is holding.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to arm with a weapon. |
| WEAPON:weaponid | The ID of the [weapon](https://open.mp/docs/scripting/resources/weaponids) that the player should be armed with. |

## Returns

**1** - The function was executed successfully. Success is returned even when the function fails to execute (the player doesn't have the weapon specified, or it is an invalid weapon).

**0** - The function failed to execute. The player is not connected.

## Examples

```c
public OnPlayerUpdate(playerid)
{
    SetPlayerArmedWeapon(playerid, WEAPON_FIST); // disables weapons
    return 1;
}
```

```c
// SMG driveby by [03]Garsino
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER || newstate == PLAYER_STATE_PASSENGER)
    {
        new
            weapon,
            ammo;

        GetPlayerWeaponData(playerid, WEAPON_SLOT_MACHINE_GUN, weapon, ammo); // Get the players SMG weapon in slot 4 (WEAPON_SLOT_MACHINE_GUN)
        SetPlayerArmedWeapon(playerid, weapon); // Set the player to driveby with SMG
    }
    return 1;
}
```

## Notes

note

This function _arms_ a player with a weapon they **already have**; it does not _give_ them a new weapon. See [GivePlayerWeapon](https://open.mp/docs/scripting/functions/GivePlayerWeapon).

## Related Functions

-   [GivePlayerWeapon](https://open.mp/docs/scripting/functions/GivePlayerWeapon): Give a player a weapon.
-   [GetPlayerWeapon](https://open.mp/docs/scripting/functions/GetPlayerWeapon): Check what weapon a player is currently holding.

## Related Functions

-   [Weapon IDs](https://open.mp/docs/scripting/resources/weaponids)
-   [Weapon Slots](https://open.mp/docs/scripting/resources/weaponslots)
