---
title: SetPlayerArmedWeapon
sidebar_label: SetPlayerArmedWeapon
description: Sets which weapon (that a player already has) the player is holding.
tags: ["player"]
---

## Description

Sets which weapon (that a player already has) the player is holding.

| Name            | Description                                                                          |
| --------------- | ------------------------------------------------------------------------------------ |
| playerid        | The ID of the player to arm with a weapon.                                           |
| WEAPON:weaponid | The ID of the [weapon](../resources/weaponids) that the player should be armed with. |

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

:::tip

This function arms a player with a weapon they already have; it does not give them a new weapon. See GivePlayerWeapon.

:::

## Related Functions

- [GivePlayerWeapon](GivePlayerWeapon): Give a player a weapon.
- [GetPlayerWeapon](GetPlayerWeapon): Check what weapon a player is currently holding.

## Related Functions

- [Weapon IDs](../resources/weaponids)
- [Weapon Slots](../resources/weaponslots)
