---
title: OnPlayerTakeDamage
sidebar_label: OnPlayerTakeDamage
description: Deze callback wordt aangeroepen wanneer een speler schade ontvangt.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler schade ontvangt.

| Naam            | Beschrijving                                                                       |
| --------------- | --------------------------------------------------------------------------------- |
| playerid        | Het ID van de speler die schade ontving.                                          |
| issuerid        | Het ID van de speler die de schade veroorzaakte. INVALID_PLAYER_ID bij zelfschade. |
| Float:amount    | De hoeveelheid ontvangen schade (health en armor gecombineerd).                    |
| WEAPON:weaponid | Het ID van het wapen/de reden voor de schade.                                     |
| bodypart        | Het [lichaamsdeel](../resources/bodyparts) dat geraakt werd.                       |

## Returns

1 - Callback wordt niet in andere filterscripts aangeroepen.

0 - Staat toe dat deze callback in andere filterscripts wordt aangeroepen.

Wordt altijd als eerste aangeroepen in filterscripts; return 1 blokkeert verdere verwerking.

## Voorbeelden

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID) // Niet zelfschade
    {
        new
            infoString[128],
            weaponName[24],
            victimName[MAX_PLAYER_NAME],
            attackerName[MAX_PLAYER_NAME];

        GetPlayerName(playerid, victimName, sizeof (victimName));
        GetPlayerName(issuerid, attackerName, sizeof (attackerName));

        GetWeaponName(weaponid, weaponName, sizeof (weaponName));

        format(infoString, sizeof(infoString), "%s has made %.0f damage to %s, weapon: %s, bodypart: %d", attackerName, amount, victimName, weaponName, bodypart);
        SendClientMessageToAll(-1, infoString);
    }
    return 1;
}
```

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)
    {
        // Eén headshot met sniper killt
        SetPlayerHealth(playerid, 0.0);
    }
    return 1;
}
```

## Notities

:::tip

- weaponid is 37 (flamethrower) voor vuurbronnen (bijv. molotov, 18).
- weaponid is 51 voor wapens die explosies veroorzaken (bijv. RPG, granaat).
- **playerid** is de enige die de callback kan aanroepen.
- amount is altijd de maximale schade die weaponid kan doen, zelfs als er minder health over is (zie uitleg bij Desert Eagle 46.2).

:::

:::warning

- [GetPlayerHealth](../functions/GetPlayerHealth) en [GetPlayerArmour](../functions/GetPlayerArmour) geven de oude waarden terug vóór deze callback.
- Controleer altijd of issuerid geldig is voordat je het als array-index gebruikt.

:::

## Gerelateerde Callbacks

- [OnPlayerGiveDamage](OnPlayerGiveDamage): Deze callback wordt aangeroepen wanneer een speler schade toebrengt.
- [OnPlayerWeaponShot](OnPlayerWeaponShot): Deze callback wordt aangeroepen wanneer een speler een wapen afvuurt.

## Gerelateerde Resources

- [Body Parts](../resources/bodyparts)
