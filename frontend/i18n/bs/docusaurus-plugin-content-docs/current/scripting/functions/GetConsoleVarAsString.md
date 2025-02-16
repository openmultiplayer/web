---
title: GetConsoleVarAsString
sidebar_label: GetConsoleVarAsString
description: Dobij string vrijednost varijable iz konzole.
tags: []
---

## Deskripcija

Dobij string vrijednost varijable iz konzole.

| Ime             | Deskripcija                                                     |
| --------------- | --------------------------------------------------------------- |
| const varname[] | Ime string varijable za dobijanje vrijednosti.                  |
| buffer[]        | Array u koji se pohranjuje vrijednost, proslijeđena referencom. |
| len             | Dužina stringa koju treba pohraniti.                            |

## Returns

Dužina returnanog stringa. 0 ako navedena console varijabla nije string ili ne postoji.

## Primjeri

```c
public OnGameModeInit()
{
    new hostname[64];
    GetConsoleVarAsString("hostname", hostname, sizeof(hostname));
    printf("Hostname: %s", hostname);
}
```

## Zabilješke

:::tip

Kada su filterskripte ili plugini specificirani kao varname, ova funkcija returna samo ime prve specificirane filterskripte ili plugina.
:::

:::tip

Upišite 'varlist' u konzolu servera da biste prikazali listu dostupnih console varijabli i njihove tipove.

:::

:::warning

Korištenje ove funkcije s bilo čim drugim osim stringom (integerom, booleanom ili floatom) će uzrokovati pad vašeg servera. Korištenje s nepostojećom console varijablom također će uzrokovati pad vašeg servera.

:::

## Srodne Funkcije

- [GetConsoleVarAsInt](GetConsoleVarAsInt): Dobij cjelobrojnu (integer) vrijednost varijable iz konzole.
- [GetConsoleVarAsBool](GetConsoleVarAsBool): Dobij bool(ean) vrijednost varijable iz konzole.
