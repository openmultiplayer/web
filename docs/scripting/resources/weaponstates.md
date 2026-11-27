---
title: "Weapon States | open.mp"
description: "Weapon State Constants."
canonical: https://open.mp/docs/scripting/resources/weaponstates
language: en
---

# Weapon States

The following weapon states are available, used by [GetPlayerWeaponState](https://open.mp/docs/scripting/functions/GetPlayerWeaponState) function:

| ID | Definition | Description |
| --- | --- | --- |
| \-1 | WEAPONSTATE\_UNKNOWN | Unknown (set when in a vehicle, in spectating or when the [player state](https://open.mp/docs/scripting/functions/GetPlayerState) is PLAYER\_STATE\_SPAWNED) |
| 0 | WEAPONSTATE\_NO\_BULLETS | The player's current weapon has no ammo remaining |
| 1 | WEAPONSTATE\_LAST\_BULLET | The player's current weapon has a single bullet left |
| 2 | WEAPONSTATE\_MORE\_BULLETS | The player's current weapon has more than one bullet left |
| 3 | WEAPONSTATE\_RELOADING | The player is reloading his/her current weapon |
