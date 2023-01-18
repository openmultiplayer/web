---
title: GetConsoleVarAsBool
description: Dobij bool(ean) vrijednost varijable iz konzole.
tags: []
---

## Deskripcija

Dobij bool(ean) vrijednost varijable iz konzole.

| Ime             | Deskripcija                                           |
| --------------- | ----------------------------------------------------- |
| const varname[] | Ime boolean varijable za dobijanje vrijednosti.       |

## Returns

Vrijednost navedene console varijable. 0 ako navedena console varijabla nije boolean ili ne postoji.

## Primjeri

```c
public OnGameModeInit()
{
    new queryEnabled = GetConsoleVarAsBool("query");
    if (!queryEnabled)
    {
        print("UPOZORENJE: Querying je onemogućen. Server će biti van mreže (offline) u pretraživaču servera.");
    }
    return 1;
}
```

## Zabilješke

:::tip

Upišite 'varlist' u konzolu servera da biste prikazali listu dostupnih console varijabli i njihove tipove.

:::

## Srodne Funkcije

- [GetConsoleVarAsString](GetConsoleVarAsString): Dobij string vrijednost varijable iz konzole.
- [GetConsoleVarAsInt](GetConsoleVarAsInt): Dobij cjelobrojnu (integer) vrijednost varijable iz konzole.
