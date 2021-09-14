---
title: Weapon States
description: Weapon State Constants
---

The following weapon states are available:

| ID  | Definition               | Description                                               |
| --- | ------------------------ | --------------------------------------------------------- |
| -1  | WEAPONSTATE_UNKNOWN      | Unknown (Set when in a vehicle)                           |
| 0   | WEAPONSTATE_NO_BULLETS   | The player's current weapon has no ammo remaining         |
| 1   | WEAPONSTATE_LAST_BULLET  | The player's current weapon has a single bullet left      |
| 2   | WEAPONSTATE_MORE_BULLETS | The player's current weapon has more than one bullet left |
| 3   | WEAPONSTATE_RELOADING    | The player is reloading his/her current weapon            |

## Related Functions

- [GetPlayerWeaponState](../functions/GetPlayerWeaponState): Check the state of a player's weapon.
