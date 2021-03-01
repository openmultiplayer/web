---
title: GetPlayerObjectModel
description: Dohvatite ID modela player-objekta.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Dohvatite ID modela player-objekta.

| Ime      | Deskripcija                                          |
| -------- | ---------------------------------------------------- |
| playerid | ID igrača od čijeg se player-objekta uzima ID modela |
| objectid | ID player-objekta za uzeti ID modela                 |

## Returns

ID modela palyer-objekta. Ako igrač ili objekt ne postoje, vratit će -1 ili 0 ako igrač ili objekt ne postoji.

## Primjeri

```c
new objectId = CreatePlayerObject(playerid, 1234, 0, 0, 0, 0, 0, 0);
new modelId = GetPlayerObjectModel(playerid, objectId);
```

## Srodne Funkcije

- [GetObjectModel](GetObjectModel): Dobij ID modela objekta.
