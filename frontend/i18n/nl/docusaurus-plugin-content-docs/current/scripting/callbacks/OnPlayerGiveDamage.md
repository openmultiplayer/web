---
title: OnPlayerGiveDamage
sidebar_label: OnPlayerGiveDamage
description: Deze callback wordt aangeroepen wanneer een speler schade toebrengt aan een andere speler.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler schade toebrengt aan een andere speler.

| Naam            | Beschrijving                                                |
| --------------- | ---------------------------------------------------------- |
| playerid        | Het ID van de speler die schade toebracht.                 |
| damagedid       | Het ID van de speler die schade ontving.                   |
| Float:amount    | De hoeveelheid health/armor die damagedid verloor (gecombineerd). |
| WEAPON:weaponid | De reden/het wapen dat de schade veroorzaakte.             |
| bodypart        | Het [lichaamsdeel](../resources/bodyparts) dat geraakt werd. |

## Returns

1 - Callback wordt niet in andere filterscripts aangeroepen.

0 - Staat toe dat deze callback in andere filterscripts wordt aangeroepen.

Wordt altijd als eerste aangeroepen in filterscripts; return 1 blokkeert verdere verwerking.

## Voorbeelden

```c
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetPlayerName(damagedid, victim, sizeof (victim));

    GetWeaponName(weaponid, weaponname, sizeof (weaponname));
    format(string, sizeof(string), "%s has made %.0f damage to %s, weapon: %s, bodypart: %d", attacker, amount, victim, weaponname, bodypart);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notities

:::tip

- Houd er rekening mee dat deze functie in sommige gevallen onnauwkeurig kan zijn.
- Als je bepaalde spelers wilt voorkomen elkaar te beschadigen, gebruik [SetPlayerTeam](../functions/SetPlayerTeam).
- weaponid is 37 (flamethrower) voor vuurbronnen (bijv. molotov, 18).
- weaponid is 51 voor wapens die explosies veroorzaken (bijv. RPG, granaat).
- **playerid** is de enige die de callback kan aanroepen.
- amount is altijd de maximale schade die weaponid kan doen, zelfs als er minder health over is. Bijv. Desert Eagle met 46.2 schade: 3 schoten tonen 46.2, ook al is de laatste effectief lager.

:::

## Gerelateerde Callbacks

- [OnPlayerTakeDamage](OnPlayerTakeDamage): Deze callback wordt aangeroepen wanneer een speler schade ontvangt.
- [OnPlayerWeaponShot](OnPlayerWeaponShot): Deze callback wordt aangeroepen wanneer een speler een wapen afvuurt.

## Gerelateerde Resources

- [Body Parts](../resources/bodyparts)
