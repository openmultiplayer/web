---
title: clamp
description: Forsira vrijednost da bude unutar raspona.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Forsira vrijednost da bude unutar raspona.

| Ime   | Deskripcija                    |
| ----- | ------------------------------ |
| value | Vrijednost koja se forsira     |
| min   | Donja granica raspona          |
| max   | Visoka granica raspona         |

## Returns

Vrijednost, ukoliko se nalazi u rasponu min-max, min, ako je vrijednost manja od min ili max, ako je vrijednost veća od max.

## Primjeri

```c
new
    valueA = 3,
    valueB = 7,
    valueC = 100
;
printf("Vrijednost: %d", clamp(valueA, 5, 10)); // ispis: "Vrijednost je: 5" zato što je 3 manje od 5
printf("Vrijednost: %d", clamp(valueB, 5, 10)); // ispis: "Vrijednost je: 7" zato što je 7 između 5 i 10
printf("Vrijednost: %d", clamp(valueC, 5, 10)); // ispis: "Vrijednost je: 10" zato što je 100 veće od 10
```

## Srodne Funkcije
