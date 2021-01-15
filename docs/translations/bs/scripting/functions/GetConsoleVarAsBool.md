---
title: GetConsoleVarAsBool
description: Dobijte logičku vrijednost varijable konzole.
tags: []
---

## Deskripcija

Dobijte logičku vrijednost varijable konzole.

| Ime             | Deskripcija                                     |
| --------------- | ----------------------------------------------- |
| const varname[] | Ime logičke varijable za dobivanje vrijednosti. |

## Returns

Vrijednost navedene varijable konzole. 0 ako navedena varijabla konzole nije logička ili ne postoji.

## Primjeri

```c
public OnGameModeInit()
{
    new queryEnabled = GetConsoleVarAsBool("query");
    if (!queryEnabled)
    {
        print("WARNING: Upit je onemogućen. Server će se pojaviti van mreže u pretraživaču servera.");
    }
    return 1;
}
```

## Zabilješke

:::tip

Utipkajte 'varlist' u konzolu poslužitelja da biste prikazali listu dostupnih varijabli konzole i njihovih tipova.

:::

## Srodne Funkcije

- [GetConsoleVarAsString](GetConsoleVarAsString): Dohvatite server varijablu kao string.
- [GetConsoleVarAsInt](GetConsoleVarAsInt): Dohvatite server varijablu kao cijeli broj.
