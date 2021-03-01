---
title: getdate
description: Nabavite trenutni datum servera koji će biti pohranjen u varijable &year, &month i &day.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Get the current server date, which will be stored in the variables &year, &month and &day.

| Ime     | Deskripcija                                                      |
| ------- | ---------------------------------------------------------------- |
| year=0  | Varijabla u kojoj se pohranjuje godina, proslijeđena referencom. |
| month=0 | Varijabla u kojoj se pohranjuje mjesec, proslijeđena referencom. |
| day=0   | Varijabla u kojoj se pohranjuje dan, proslijeđena referencom.    |

## Returns

Broj dana od početka godine.

## Primjeri

```c
new Year, Month, Day, Days;
Days = getdate(Year, Month, Day);
printf("%02d/%02d/%d", Day, Month, Year);
printf("Dana od početka godine: %d", Days);
```

## Srodne Funkcije

- [gettime](gettime): Dobijte trenutno vrijeme servera kao unix vremensku oznaku.
