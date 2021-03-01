---
title: GetPlayerHealth
description: Funkcija GetPlayerHealth omogućava vam da povratite zdravlje igrača.
tags: ["player"]
---

## Deskripcija

Funkcija GetPlayerHealth omogućava vam da povratite zdravlje igrača. Korisno za otkrivanje čitova, između ostalog.

| Ime           | Deskripcija                                        |
| ------------- | -------------------------------------------------- |
| playerid      | ID igrača.                                         |
| &Float:health | Float za pohraniti helte, proslijeđeno referencom. |

## Returns

1 - uspješno

1 - greška (tj. igrač nije povezan).

Helt igrača pohranjeno je u navedenoj varijabli.

## Primjeri

```c
// Postavlja helte igraču na 50 ako je manje
// od 50, čim je otkucao /doctor

if (strcmp(cmdtext, "/doctor", true) == 0)
{
    new Float:health;
    GetPlayerHealth(playerid,health);
    if (health < 50.0)
    {
        SetPlayerHealth(playerid, 50.0);
    }
    return 1;
}
```

## Zabilješke

:::warning

Iako se zdravstveno stanje može postaviti na gotovo beskonačne vrijednosti na strani servera, pojedinačni klijenti prijavit će vrijednosti samo do 255. Sve veće će se omotati; 256 postaje 0, 257 postaje 1 itd. Zdravlje se dobiva zaokruženo na cijele brojeve: postavite 50,15, ali dobijte 50,0

:::

## Srodne Funkcije

- [SetPlayerHealth](SetPlayerHealth): Postavlja igraču helte.
- [GetVehicleHealth](GetVehicleHealth): Provjeri helte vozila.
- [GetPlayerArmour](GetPlayerArmour): Otkrijte koliko armora ima igrač.
