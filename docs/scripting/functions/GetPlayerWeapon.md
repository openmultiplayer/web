---
title: "GetPlayerWeapon | open.mp"
description: "Returns the ID of the weapon a player is currently holding."
canonical: https://open.mp/docs/scripting/functions/GetPlayerWeapon
language: en
---

# GetPlayerWeapon

## Description

Returns the ID of the weapon a player is currently holding.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the currently held weapon of. |

## Returns

The ID of the player's current [weapon](https://open.mp/docs/scripting/resources/weaponids). Returns **\-1** if the player specified does not exist.

## Examples

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Check if the killerid is not an invalid player (which means is connected).
    if (killerid != INVALID_PLAYER_ID)
    {
        // The WEAPON_MINIGUN constant is pre-defined in the standard library and is equal to 38.
        if (GetPlayerWeapon(killerid) == WEAPON_MINIGUN)
        {
            //Ban if they have a minigun
            Ban(killerid);
        }
    }
    return 1;
}
```

## Notes

note

When the player state is `PLAYER_STATE_DRIVER` or `PLAYER_STATE_PASSENGER` this function returns the weapon held by the player before they entered the vehicle. If a cheat is used to spawn a weapon inside a vehicle, this function will not report it.

warning

Sometimes the result can be -1 which is an invalid weapon ID. Circumstances of this are not yet known, but it is best to discard information when returned weapon is -1.

## Related Functions

-   [GetPlayerWeaponData](https://open.mp/docs/scripting/functions/GetPlayerWeaponData): Find out information about weapons a player has.
-   [GivePlayerWeapon](https://open.mp/docs/scripting/functions/GivePlayerWeapon): Give a player a weapon.
-   [ResetPlayerWeapons](https://open.mp/docs/scripting/functions/ResetPlayerWeapons): Remove all weapons from a player.
-   [RemovePlayerWeapon](https://open.mp/docs/scripting/functions/RemovePlayerWeapon): Remove a specified weapon from a player.

## Related Resources

-   [Weapon IDs](https://open.mp/docs/scripting/resources/weaponids)
