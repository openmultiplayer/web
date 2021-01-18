---
title: GetObjectModel
description: Dobij ID modela objekta (CreateObject).
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Dobij ID modela objekta (CreateObject).

| Ime      | Deskripcija                 |
| -------- | --------------------------- |
| objectid | ID objekta za dobiti model. |

## Returns

ID modela objekta. -1 ako objekat ne postoji.

## Primjeri

```c
new objectid = CreateObject(1234, 0, 0, 0, 0, 0, 0);
new modelid = GetObjectModel(objectid);
```

## Srodne Funkcije

- [GetPlayerObjectModel](GetPlayerObjectModel): Dobij ID modela player-object-a.
