---
title: GivePlayerWeapon
description: Give a player a weapon with a specified amount of ammo.
tags: ["player"]
---

## Description

Give a player a weapon with a specified amount of ammo.

| Name            | Description                                                           |
|-----------------|-----------------------------------------------------------------------|
| playerid        | The ID of the player to give a weapon to.                             |
| WEAPON:weaponid | The [ID of the weapon](../resources/weaponids) to give to the player. |
| ammo            | The amount of ammo to give to the player.                             |

## Returns

1: The function was executed successfully.

0: The function failed to execute. This means the player is not connected.

## Examples

```c
GivePlayerWeapon(playerid, WEAPON_SAWEDOFF, 64); // Give playerid a sawn-off shotgun with 64 ammo
```

## Related Functions

- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): Set a player's armed weapon.
- [GetPlayerWeapon](GetPlayerWeapon): Check what weapon a player is currently holding.
- [ResetPlayerWeapons](ResetPlayerWeapons): Removes all weapons from a player.
- [RemovePlayerWeapon](RemovePlayerWeapon): Remove a specified weapon from a player.

## Related Resources

- [Weapon IDs](../resources/weaponids)
