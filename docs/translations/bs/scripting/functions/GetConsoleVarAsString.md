---
title: GetConsoleVarAsString
description: Dobijte vrijednost stringa varijable konzole.
tags: []
---

## Deskripcija

Dobijte vrijednost stringa varijable konzole.

| Ime             | Deskripcija                                                          |
| --------------- | -------------------------------------------------------------------- |
| const varname[] | Ime varijable stringa za dobivanje vrijednosti.                      |
| buffer[]        | Array(niz) u koji treba pohraniti vrijednost prosljeđenu referencom. |
| len             | Dužina stringa koji treba pohraniti.                                 |

## Returns

Dužina vraćenog niza. 0 ako navedena varijabla konzole nije niz ili ne postoji.

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

Kad su filterskripte ili plugini navedeni kao varname (ime varijable), ova funkcija vraća samo ime prve navedene filterskripte ili plugina.

:::

:::tip

Utipkajte 'varlist' u konzolu poslužitelja da biste prikazali listu dostupnih varijabli konzole i njihovih tipova.

:::

:::warning

Korištenje ove funkcije s bilo čime osim sa stringom (cijeli broj, logička vrijednost ili float) uzrokovat će pad vašeg servera. Korištenje s nepostojećom varijablom konzole također će uzrokovati pad vašeg servera.

:::

## Srodne Funkcije

- [GetConsoleVarAsInt](GetConsoleVarAsInt): Dohvatite server varijablu kao cijeli broj.
- [GetConsoleVarAsBool](GetConsoleVarAsBool): Dohvaćanje varijable poslužitelja kao logičke vrijednosti (boolean).
