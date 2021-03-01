---
title: GetConsoleVarAsInt
description: Dobijte cjelobrojnu vrijednost varijable konzole.
tags: []
---

## Deskripcija

Dobijte cjelobrojnu vrijednost varijable konzole.

| Ime             | Deskripcija                                         |
| --------------- | --------------------------------------------------- |
| const varname[] | Ime cjelobrojne varijable za dobivanje vrijednosti. |

## Returns

Vrijednost navedene varijable konzole. 0 ako navedena varijabla konzole nije cijeli broj ili ne postoji.

## Primjeri

```c
new serverPort = GetConsoleVarAsInt("port");
printf("Server Port: %i", serverPort);
```

## Zabilješke

:::tip

Utipkajte 'varlist' u konzolu poslužitelja da biste prikazali listu dostupnih varijabli konzole i njihovih tipova.

:::

## Srodne Funkcije

- [GetConsoleVarAsString](GetConsoleVarAsString): Dohvatite server varijablu kao string.
- [GetConsoleVarAsBool](GetConsoleVarAsBool): Dohvaćanje varijable poslužitelja kao logičke vrijednosti (boolean).
