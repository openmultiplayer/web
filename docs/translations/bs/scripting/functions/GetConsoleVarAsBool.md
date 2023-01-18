---
title: GetConsoleVarAsBool
description: Dobij boolean value console varijable.
tags: []
---

## Deskripcija

Dobij boolean value console varijable.

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

## Bilješke

:::tip

Upišite 'varlist' u konzolu servera da biste prikazali listu dostupnih console varijabli i njihove tipove.

:::

## Povezane Funkcije

- [GetConsoleVarAsString](GetConsoleVarAsString): Postavi server varijablu kao string.
- [GetConsoleVarAsInt](GetConsoleVarAsInt): Postavi server varijablu kao cijeli broj (integer).
