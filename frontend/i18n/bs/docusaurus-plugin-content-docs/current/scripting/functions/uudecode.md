---
title: uudecode
sidebar_label: uudecode
description: Dekodirajte UU kodirani string.
tags: []
---

## Deskripcija

Dekodirajte UU kodirani string.

| Ime            | Deskripcija                                         |
| -------------- | --------------------------------------------------- |
| dest[]         | Odredište za niz dekodiranog stringa.               |
| const source[] | Izvorni string kodiran UU.                          |
| maxlength      | Maksimalna dužina odredišta koja se može koristiti. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
uudecode(normalString, encodedString);
```

## Srodne Funkcije

- [uuencode](uuencode): Kodirajte string u UU dekodirani string.
