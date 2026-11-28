---
title: deleteproperty
sidebar_label: deleteproperty
description: Izbriši prethodno postavljenu imovinu (setproperty).
tags: []
---

## Deskripcija

Izbriši prethodno postavljenu imovinu ([setproperty](setproperty)).

| Ime    | Deskripcija                                                                                                       |
| ------ | ----------------------------------------------------------------------------------------------------------------- |
| id     | Virtualna [mašina](https://en.wikipedia.org/wiki/Virtual_machine) za upotrebu. Trebali biste ovo držati kao nulu. |
| name[] | Ime imovine, trebali biste ovo ostaviti prazno ("").                                                              |
| value  | Jedinstveni ID imovine. Upotrijebite hash-funkciju za izračunavanje iz niza.                                      |

## Returns

Vrijednost imovine. Ako imovina ne postoji, funkcija returna/vrača 0.

## Primjeri

```c
deleteproperty(0, "", 123984334);
```

## Zabilješke

:::tip

Preporučljivo je da koristite PVars/SVars ili GVar plugin umjesto ovih native-a zbog njihove brzine (spori su).

:::

## Srodne Funkcije

- [setproperty](setproperty): Postavi imovinu.
- [getproperty](getproperty): Dobij vrijednost imovine.
- [existproperty](existproperty): Provjeri da li imovina postoji.
