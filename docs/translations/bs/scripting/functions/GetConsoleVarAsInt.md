---
title: GetConsoleVarAsInt
description: Dobij vrijednost integer-a console varijable.
tags: []
---

## Deskripcija

Dobij vrijednost integer-a console varijable.

| Ime             | Deskripcija                                           |
| --------------- | ----------------------------------------------------- |
| const varname[] | Ime integer varijable za dobijanje vrijednosti.       |

## Returns

Vrijednost navedene console varijable. 0 ako navedena console varijabla nije cijeli broj (integer) ili ne postoji.

## Primjeri

```c
new serverPort = GetConsoleVarAsInt("port");
printf("Server Port: %i", serverPort);
```

## Bilješke

:::tip

Upišite 'varlist' u konzolu servera da biste prikazali listu dostupnih console varijabli i njihove tipove.

:::

## Povezane Funkcije

- [GetConsoleVarAsString](GetConsoleVarAsString): Postavi server varijablu kao string.
- [GetConsoleVarAsBool](GetConsoleVarAsBool): Postavi server varijablu kao boolean.
