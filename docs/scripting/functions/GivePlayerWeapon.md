---
title: "GivePlayerWeapon | open.mp"
description: "Give a player a weapon with a specified amount of ammo."
canonical: https://open.mp/docs/scripting/functions/GivePlayerWeapon
language: en
---

# GivePlayerWeapon

## Description

Give a player a weapon with a specified amount of ammo.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to give a weapon to. |
| WEAPON:weaponid | The [ID of the weapon](https://open.mp/docs/scripting/resources/weaponids) to give to the player. |
| ammo | The amount of ammo to give to the player. |

## Returns

**1** - The function was executed successfully.

**0** - The function failed to execute. This means the player is not connected.

## Examples

```c
GivePlayerWeapon(playerid, WEAPON_SAWEDOFF, 64); // Give playerid a sawn-off shotgun with 64 ammo
```

## Related Functions

-   [SetPlayerArmedWeapon](https://open.mp/docs/scripting/functions/SetPlayerArmedWeapon): Set a player's armed weapon.
-   [GetPlayerWeapon](https://open.mp/docs/scripting/functions/GetPlayerWeapon): Check what weapon a player is currently holding.
-   [ResetPlayerWeapons](https://open.mp/docs/scripting/functions/ResetPlayerWeapons): Removes all weapons from a player.
-   [RemovePlayerWeapon](https://open.mp/docs/scripting/functions/RemovePlayerWeapon): Remove a specified weapon from a player.

## Related Resources

-   [Weapon IDs](https://open.mp/docs/scripting/resources/weaponids)
