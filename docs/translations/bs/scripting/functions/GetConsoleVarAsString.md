---
title: GetConsoleVarAsString
description: Dobij vrijednost string-a console varijable.
tags: []
---

## Deskripcija

Dobij vrijednost string-a console varijable.

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

## Bilješke

:::tip

Kada su filterskripte ili plugini specificirani kao varname, ova funkcija returna samo ime prve specificirane filterskripte ili plugina.
:::

:::tip

Upišite 'varlist' u konzolu servera da biste prikazali listu dostupnih console varijabli i njihove tipove.

:::

:::upozorenje

Korištenje ove funkcije s bilo čim drugim osim stringom (integerom, booleanom ili floatom) će uzrokovati pad vašeg servera. Korištenje s nepostojećom console varijablom također će uzrokovati pad vašeg servera.

:::

## Povezane Funkcije

- [GetConsoleVarAsInt](GetConsoleVarAsInt): Postavi server varijablu kao integer.
- [GetConsoleVarAsBool](GetConsoleVarAsBool): Postavi server varijablu kao booleaan.
