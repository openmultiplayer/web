---
title: GetObjectModel
sidebar_label: GetObjectModel
description: Dobij ID modela određenog objekta (CreateObject).
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Deskripcija

Dobij ID modela određenog objekta (CreateObject).

| Ime      | Deskripcija                              |
| -------- | ---------------------------------------- |
| objectid | ID objekta za dobivanje modela           |

## Returns

Model ID određenog objekta. -1 ako objekt ne postoji.

## Primjeri

```c
new objectid = CreateObject(1234, 0, 0, 0, 0, 0, 0);
new modelid = GetObjectModel(objectid);
```

## Srodne Funkcije

- [GetPlayerObjectModel](GetPlayerObjectModel): Dobij ID modela odeđenog player-objekta.
