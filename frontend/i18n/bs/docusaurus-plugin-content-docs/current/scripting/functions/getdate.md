---
title: getdate
sidebar_label: getdate
description: Dobij trenutni datum servera koji će biti pohranjen u varijablama &year, &month i &day.
tags: []
---

<LowercaseNote />

## Deskripcija

Dobij trenutni datum servera koji će biti pohranjen u varijablama &year, &month i &day.

| Ime     | Deskripcija                                                 |
| ------- | ----------------------------------------------------------- |
| year=0  | Varijabla za pohranjivanje godine, proslijeđena referencom. |
| month=0 | Varijabla za pohranjivanje mjeseca, proslijeđena referencom.|
| day=0   | Varijabla za pohranjivanje dana, proslijeđena referencom.   |

## Returns

Broj dana od početka godine.

## Primjeri

```c
new Year, Month, Day, Days;
Days = getdate(Year, Month, Day);
printf("%02d/%02d/%d", Day, Month, Year);
printf("Broj dana od početka godine: %d", Days);
```

## Srodne Funkcije

- [gettime](gettime): Dobij trenutno vrijeme servera kao unix timestamp.
