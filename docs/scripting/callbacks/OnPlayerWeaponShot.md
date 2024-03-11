---
title: OnPlayerWeaponShot
description: This callback is called when a player fires a shot from a weapon.
tags: ["player"]
---

## Description

This callback is called when a player fires a shot from a weapon. Only bullet weapons are supported. Only passenger drive-by is supported (not driver drive-by, and not sea sparrow / hunter shots).

| Name                    | Description                                                                                               |
|-------------------------|-----------------------------------------------------------------------------------------------------------|
| playerid                | The ID of the player that shot a weapon.                                                                  |
| WEAPON:weaponid         | The ID of the [weapon](../resources/weaponids) shot by the player.                                        |
| BULLET_HIT_TYPE:hittype | The [type](../resources/bullethittypes) of thing the shot hit (none, player, vehicle, or (player)object). |
| hitid                   | The ID of the player, vehicle or object that was hit.                                                     |
| Float:fX                | The X coordinate that the shot hit.                                                                       |
| Float:fY                | The Y coordinate that the shot hit.                                                                       |
| Float:fZ                | The Z coordinate that the shot hit.                                                                       |

## Returns

0 - Prevent the bullet from causing damage.

1 - Allow the bullet to cause damage.

It is always called first in filterscripts so returning 0 there also blocks other scripts from seeing it.

## Examples

```c
public OnPlayerWeaponShot(playerid, WEAPON:weaponid, BULLET_HIT_TYPE:hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    new string[144];
    format(string, sizeof(string), "Weapon %i fired. hittype: %i   hitid: %i   pos: %f, %f, %f", weaponid, hittype, hitid, fX, fY, fZ);
    SendClientMessage(playerid, -1, string);
    return 1;
}
```

## Notes

:::tip

This callback is only called when lag compensation is enabled. If hittype is:

- `BULLET_HIT_TYPE_NONE`: the fX, fY and fZ parameters are normal coordinates, will give 0.0 for coordinates if nothing was hit (e.g. far object that the bullet can't reach);
- Others: the fX, fY and fZ are offsets relative to the hitid.

:::

:::tip

[GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors) can be used in this callback for more detailed bullet vector information.

:::

:::warning

Known Bug(s):

- Isn't called if you fired in vehicle as driver or if you are looking behind with the aim enabled (shooting in air).
- It is called as `BULLET_HIT_TYPE_VEHICLE` with the correct `hitid` (the hit player's vehicleid) if you are shooting a player which is in a vehicle. It won't be called as `BULLET_HIT_TYPE_PLAYER` at all.
- Partially fixed in SA-MP 0.3.7: If fake weapon data is sent by a malicious user, other player clients may freeze or crash. To combat this, check if the reported weaponid can actually fire bullets.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerGiveDamage](OnPlayerGiveDamage): This callback is called when a player gives damage.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors): Retrieves the vector of the last shot a player fired.

## Related Resources

- [Bullet Hit Types](../resources/bullethittypes)
