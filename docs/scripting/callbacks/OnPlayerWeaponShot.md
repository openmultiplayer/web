---
title: OnPlayerWeaponShot
description: This callback is called when a player fires a weapon.
tags: ["player"]
---

## Description

This callback is called when a player fires a weapon. Only firearms are supported.

| Name                    | Description                                                                                               |
|-------------------------|-----------------------------------------------------------------------------------------------------------|
| playerid                | The ID of the player who fired the weapon.                                                                  |
| WEAPON:weaponid         | The ID of the [weapon](../resources/weaponids) fired by the player.                                        |
| BULLET_HIT_TYPE:hittype | The [type](../resources/bullethittypes) of target hit by the shot. |
| hitid                   | The ID of the player, vehicle, or object that was hit.                                                     |
| Float:fX                | The X coordinate where the shot hit.                                                                       |
| Float:fY                | The Y coordinate where the shot hit.                                                                       |
| Float:fZ                | The Z coordinate where the shot hit.                                                                       |

## Returns

0 - Prevent the bullet from causing damage.

1 - Allow the bullet to cause damage.

It is always called first in filterscripts so returning 0 there also blocks other scripts from processing it.

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

- BULLET_HIT_TYPE_NONE: The fX, fY, and fZ parameters are absolute coordinates. These will return 0.0 if nothing was hit (e.g., a distant object that the bullet can't reach).
- Other values: The fX, fY, and fZ values are offsets relative to hitid.

:::

:::tip

[GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors) can be used in this callback for more detailed bullet vector information.

# Known bugs and issues


:::warning

This callback isn't called when firing from a vehicle as the driver or when shooting while looking backward with the aim enabled (shooting into the air).

:::

:::warning

When shooting a player inside a vehicle, this callback will be triggered as BULLET_HIT_TYPE_VEHICLE with the correct hitid (the hit player's vehicleid). It won't be triggered as BULLET_HIT_TYPE_PLAYER.

:::

:::warning

Partially fixed in SA-MP 0.3.7: If fake weapon data is sent by a malicious client, other players' clients may freeze or crash. To prevent this, check if the reported weaponid can, in fact, fire projectiles.

:::

:::warning

This callback is not called when driving-by as a driver, firing the turret of a Seasparrow, Hunter, or any other armed vehicle.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerGiveDamage](OnPlayerGiveDamage): This callback is called when a player gives damage.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors): Retrieves the vector of the last shot a player fired.

## Related Resources

- [Bullet Hit Types](../resources/bullethittypes)
