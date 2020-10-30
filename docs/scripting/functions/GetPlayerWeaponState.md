---
title: GetPlayerWeaponState
description: Check the state of a player's weapon.
tags: ["player"]
---

import T from '../../../src/components/templates.js'

<T.VersionWarn version='SA-MP 0.3a' />

## Description

Check the state of a player's weapon.

| Name     | Description                                         |
| -------- | --------------------------------------------------- |
| playerid | The ID of the player to obtain the weapon state of. |

## Returns

The state of the player's weapon. 0 if player specified does not exist.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    SetPVarInt(playerid, "WepState", GetPlayerWeaponState(playerid));
    return 1;
}
```

## Related Functions

- [GivePlayerWeapon](GivePlayerWeapon.md): Give a player a weapon.
