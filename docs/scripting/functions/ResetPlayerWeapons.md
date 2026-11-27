---
title: "ResetPlayerWeapons | open.mp"
description: "Removes all weapons from a player."
canonical: https://open.mp/docs/scripting/functions/ResetPlayerWeapons
language: en
---

# ResetPlayerWeapons

## Description

Removes all weapons from a player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose weapons to remove. |

## Returns

**1** - The function was executed successfully.

**0** - The function failed to execute. This means the player specified does not exist.

## Examples

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Remove the killer's weapons
    ResetPlayerWeapons(killerid);
    return 1;
}
```

## Notes

tip

To remove individual weapons from a player, set their ammo to 0 using [SetPlayerAmmo](https://open.mp/docs/scripting/functions/SetPlayerAmmo).

## Related Functions

-   [GivePlayerWeapon](https://open.mp/docs/scripting/functions/GivePlayerWeapon): Give a player a weapon.
-   [GetPlayerWeapon](https://open.mp/docs/scripting/functions/GetPlayerWeapon): Check what weapon a player is currently holding.
-   [RemovePlayerWeapon](https://open.mp/docs/scripting/functions/RemovePlayerWeapon): Remove a specified weapon from a player.
