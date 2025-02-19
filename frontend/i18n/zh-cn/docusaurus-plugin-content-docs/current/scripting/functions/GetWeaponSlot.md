---
title: GetWeaponSlot
sidebar_label: GetWeaponSlot
description: Gets the slot of one weapon.
tags: ["weapon"]
---

<versionWarn version='omp v1.1.0.2612' />

## Description

Gets the slot of one weapon.

| Name            | Description                              |
| --------------- | ---------------------------------------- |
| WEAPON:weaponid | The ID of the weapon to get the slot of. |

## Returns

The number of the [weapon slot](../resources/weaponslots) (0 - 12)

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

- [GetPlayerWeapon](GetPlayerWeapon): Gets the ID of the weapon a player is currently holding.
- [GetPlayerWeaponData](GetPlayerWeaponData): Get the weapon and ammo in a specific player's weapon slot (e.g. the weapon in the 'SMG' slot).
- [GetPlayerAmmo](GetPlayerAmmo): Gets the amount of ammo in a player's current weapon.
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): Sets which weapon (that a player already has) the player is holding.
- [ResetPlayerWeapon](ResetPlayerWeapons): Removes all weapons from a player.
- [RemovePlayerWeapon](RemovePlayerWeapon): Remove a specified weapon from a player.

## Related Resources

- [Weapon Slots](../resources/weaponslots).
