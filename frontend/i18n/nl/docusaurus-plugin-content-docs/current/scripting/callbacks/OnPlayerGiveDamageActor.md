---
title: OnPlayerGiveDamageActor
sidebar_label: OnPlayerGiveDamageActor
description: Deze callback wordt aangeroepen wanneer een speler schade toebrengt aan een actor.
tags: ["player", "actor"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler schade toebrengt aan een actor.

| Naam            | Beschrijving                                           |
| --------------- | ----------------------------------------------------- |
| playerid        | Het ID van de speler die schade toebracht.            |
| damaged_actorid | Het ID van de actor die schade ontving.               |
| Float:amount    | De hoeveelheid gezondheid/pantser die damaged_actorid verloor. |
| WEAPON:weaponid | De reden die de schade veroorzaakte.                  |
| bodypart        | Het [lichaamsdeel](../resources/bodyparts) dat werd geraakt |

## Returns

1 - Callback wordt niet aangeroepen in andere filterscripts.

0 - Staat toe dat deze callback wordt aangeroepen in andere filterscripts.

Wordt altijd als eerste aangeroepen in filterscripts; return 1 blokkeert andere filterscripts.

## Voorbeelden

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128];
    new attackerName[MAX_PLAYER_NAME];
    new weaponName[24];

    GetPlayerName(playerid, attackerName, sizeof (attackerName));
    GetWeaponName(weaponid, weaponName, sizeof (weaponName));

    format(string, sizeof(string), "%s has made %.0f damage to actor id %d, weapon: %s", attackerName, amount, damaged_actorid, weaponName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notities

:::tip

Deze functie wordt niet aangeroepen als de actor onkwetsbaar is ingesteld (WAT STANDAARD IS). Zie [SetActorInvulnerable](../functions/SetActorInvulnerable).

:::

## Gerelateerde Callbacks

- [OnActorStreamOut](OnActorStreamOut): Deze callback wordt aangeroepen wanneer een actor wordt uitgestreamd door de client van een speler.
- [OnActorStreamIn](OnActorStreamOut): Deze callback wordt aangeroepen wanneer een actor wordt gestreamd door de client van een speler.

## Gerelateerde Functies

- [CreateActor](../functions/CreateActor): Maak een actor (statische NPC).
- [SetActorInvulnerable](../functions/SetActorInvulnerable): Stel actor onkwetsbaar in.
- [SetActorHealth](../functions/SetActorHealth): Stel de gezondheid van een actor in.
- [GetActorHealth](../functions/GetActorHealth): Krijg de gezondheid van een actor.
- [IsActorInvulnerable](../functions/IsActorInvulnerable): Check of actor onkwetsbaar is.
- [IsValidActor](../functions/IsValidActor): Check of actor ID geldig is.

## Gerelateerde Resources

- [Body Parts](../resources/bodyparts)
