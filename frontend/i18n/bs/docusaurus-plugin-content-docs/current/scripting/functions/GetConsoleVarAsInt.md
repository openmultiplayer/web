---
title: GetConsoleVarAsInt
sidebar_label: GetConsoleVarAsInt
description: Dobij cjelobrojnu (integer) vrijednost varijable iz konzole.
tags: []
---

## Deskripcija

Dobij cjelobrojnu (integer) vrijednost varijable iz konzole.

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

## Zabilješke

:::tip

Upišite 'varlist' u konzolu servera da biste prikazali listu dostupnih console varijabli i njihove tipove.

:::

## Srodne Funkcije

- [GetConsoleVarAsString](GetConsoleVarAsString): Dobij string vrijednost varijable iz konzole.
- [GetConsoleVarAsBool](GetConsoleVarAsBool): Dobij bool(ean) vrijednost varijable iz konzole.
