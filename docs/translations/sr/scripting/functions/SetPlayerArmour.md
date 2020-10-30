---
title: SetPlayerArmour
description: Podesava pancir igraca.
tags: ["player"]
---

## Description

Podesava pancir igraca.

| Name         | Description                                                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| playerid     | ID igraca kome se podesava pancir                                                                                                    |
| Float:armour | Kolicina pancira koja se daje, u procentima(float). Vrednosti vece od 100 mogu da se postave, ali se nece prikazivati u HUD-u igraca |

## Returns

1: Funkcija je uspesno izvrsena.

0: Funkcija nije uspesno izvrsena. To znaci da ID igraca koji smo uneli ne postoji.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    // Daje igracu maksimalan pancir (100%) na spawnu
    SetPlayerArmour(playerid, 100.0);
    return 1;
}
```

## Notes

:::tip

Ime funkcije je armour, ne armor (Americki).

:::

:::warning

Pancir se dobija zaokruzen na integer: postavi 50.15, ali dobijes 50.0

:::

## Related Functions

- [GetPlayerArmour](GetPlayerArmour.md): Dobija se vrednost pancira koju igrac trenutno ima.
- [SetPlayerHealth](SetPlayerHealth.md): Podesava health igracu.
- [GetPlayerHealth](GetPlayerHealth.md): Dobija se vrednost health-a koju igrac trenutno ima.
