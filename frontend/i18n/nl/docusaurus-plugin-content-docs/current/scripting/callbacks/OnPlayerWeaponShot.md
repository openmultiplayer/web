---
title: OnPlayerWeaponShot
sidebar_label: OnPlayerWeaponShot
description: Deze callback wordt aangeroepen wanneer een speler een wapen afvuurt.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een wapen afvuurt. Alleen firearms worden ondersteund.

| Naam                    | Beschrijving                                                          |
| ----------------------- | -------------------------------------------------------------------- |
| playerid                | Het ID van de speler die het wapen afvuurde.                         |
| WEAPON:weaponid         | Het ID van het [wapen](../resources/weaponids) dat is afgevuurd.     |
| BULLET_HIT_TYPE:hittype | Het [type](../resources/bullethittypes) doel dat geraakt is.         |
| hitid                   | Het ID van de speler, het voertuig, of object dat geraakt is.        |
| Float:fX                | De X-coördinaat waar het schot raakte.                               |
| Float:fY                | De Y-coördinaat waar het schot raakte.                               |
| Float:fZ                | De Z-coördinaat waar het schot raakte.                               |

## Returns

0 - Voorkom dat de kogel schade veroorzaakt.

1 - Sta toe dat de kogel schade veroorzaakt.

Wordt altijd als eerste aangeroepen in filterscripts; return 0 blokkeert ook andere scripts.

## Voorbeelden

```c
public OnPlayerWeaponShot(playerid, WEAPON:weaponid, BULLET_HIT_TYPE:hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    new string[144];
    format(string, sizeof(string), "Weapon %i fired. hittype: %i   hitid: %i   pos: %f, %f, %f", weaponid, hittype, hitid, fX, fY, fZ);
    SendClientMessage(playerid, -1, string);
    return 1;
}
```

## Notities

:::tip

Deze callback wordt alleen aangeroepen wanneer lag compensation is ingeschakeld. Als hittype is:

- BULLET_HIT_TYPE_NONE: fX, fY en fZ zijn absolute coördinaten (0.0 als niets geraakt is).
- Anders: fX, fY en fZ zijn offsets relatief ten opzichte van hitid.

:::

:::tip

[GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors) kan in deze callback worden gebruikt voor gedetailleerde bullet vector-info.

:::

# Bekende bugs en issues

:::warning

Deze callback wordt niet aangeroepen bij schieten vanuit een voertuig als bestuurder of achteruit gericht met aim (de lucht in).

:::

:::warning

Wanneer een speler in een voertuig geraakt wordt, triggert dit als BULLET_HIT_TYPE_VEHICLE met de juiste hitid (vehicleid van de getroffen speler), niet als BULLET_HIT_TYPE_PLAYER.

:::

:::warning

Gedeeltelijk gefixt in SA-MP 0.3.7: bij fake weapon data van een malafide client kunnen clients vastlopen. Controleer of de gemelde weaponid daadwerkelijk projectielen kan afvuren.

:::

:::warning

Deze callback wordt niet aangeroepen bij drive-bys als bestuurder of bij het afvuren van turrets (Seasparrow, Hunter, etc.).

:::

## Gerelateerde Callbacks

- [OnPlayerGiveDamage](OnPlayerGiveDamage): Deze callback wordt aangeroepen wanneer een speler schade toebrengt.

## Gerelateerde Functies

- [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors): Haal de vector van het laatste schot van een speler op.

## Gerelateerde Resources

- [Bullet Hit Types](../resources/bullethittypes)
