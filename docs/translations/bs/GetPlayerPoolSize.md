---
title: GetPlayerPoolSize
description: Dobija najviši playerid koji se trenutno koristi na serveru.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Dobija najviši playerid koji se trenutno koristi na serveru.

## Primjeri

```c
FreezeAll()
{
    // imajte na umu da vraćanu vrijednost dodjeljujemo novoj varijabli (j) kako bismo izbjegli pozivanje funkcije sa svakom iteracijom
    for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
    {
        TogglePlayerControllable(i, 0);
    }
}
```

## Srodne Funkcije

- [GetVehiclePoolSize](GetVehiclePoolSize): Dobiva najveći id vozila koji se trenutno koristi na serveru.
- [GetMaxPlayers](GetMaxPlayers): Dobiva maksimalan broj igrača koji se mogu pridružiti serveru.
