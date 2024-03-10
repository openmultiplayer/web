---
title: RemovePlayerWeapon
description: Remove a specified weapon from a player.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Remove a specified weapon from a player.

| Name            | Description                                               |
|-----------------|-----------------------------------------------------------|
| playerid        | The ID of the player whose weapon to remove.              |
| WEAPON:weaponid | The [ID of the weapon](../resources/weaponids) to remove. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the player is not connected.

## Examples

```c
RemovePlayerWeapon(playerid, WEAPON_DEAGLE); // Remove the Desert-Eagle from the player
```

## Related Functions

- [GivePlayerWeapon](GivePlayerWeapon): Give a player a weapon.
- [ResetPlayerWeapons](ResetPlayerWeapons): Removes all weapons from a player.
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): Set a player's armed weapon.
- [GetPlayerWeapon](GetPlayerWeapon): Check what weapon a player is currently holding.

## Related Resources

- [Weapon IDs](../resources/weaponids)
