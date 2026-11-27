---
title: "RemovePlayerWeapon | open.mp"
description: "Remove a specified weapon from a player."
canonical: https://open.mp/docs/scripting/functions/RemovePlayerWeapon
language: en
---

# RemovePlayerWeapon

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Remove a specified weapon from a player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose weapon to remove. |
| WEAPON:weaponid | The [ID of the weapon](https://open.mp/docs/scripting/resources/weaponids) to remove. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the player is not connected.

## Examples

```c
RemovePlayerWeapon(playerid, WEAPON_DEAGLE); // Remove the Desert-Eagle from the player
```

## Related Functions

-   [GivePlayerWeapon](https://open.mp/docs/scripting/functions/GivePlayerWeapon): Give a player a weapon.
-   [ResetPlayerWeapons](https://open.mp/docs/scripting/functions/ResetPlayerWeapons): Removes all weapons from a player.
-   [SetPlayerArmedWeapon](https://open.mp/docs/scripting/functions/SetPlayerArmedWeapon): Set a player's armed weapon.
-   [GetPlayerWeapon](https://open.mp/docs/scripting/functions/GetPlayerWeapon): Check what weapon a player is currently holding.

## Related Resources

-   [Weapon IDs](https://open.mp/docs/scripting/resources/weaponids)
