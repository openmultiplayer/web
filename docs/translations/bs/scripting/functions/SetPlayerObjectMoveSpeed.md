---
title: SetPlayerObjectMoveSpeed
description: Postavi brzinu kretanja player-objekta.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Deskripcija

Postavi brzinu kretanja player-objekta.

| Ime         | Deskripcija                                               |
|-------------|-----------------------------------------------------------|
| playerid    | ID igrača.                                                |
| objectid    | ID player-objekta kojem se seta brzina kretanja.          |
| Float:speed | Brzina kojom će se objekat kretati (jedinica u sekundi).  |

## Returnovi

`true` - Funkcija uspješno izvršena.

`false` - Funkcija neuspješno izvršena. Navedeni objekat ne postoji.

## Primjeri

```c
new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);

SetPlayerObjectMoveSpeed(playerid, playerobjectid, 1.5);
// Brzina kretanja je promijenjena sa 0.8 na 1.5
```

## Srodne Funkcije

- [MovePlayerObject](MovePlayerObject): Pomjeri player objekat na novu poziciju zadanom brzinom.
- [GetPlayerObjectMoveSpeed](GetPlayerObjectMoveSpeed): Dobij brzinu kretanja player-objekta.
- [SetObjectMoveSpeed](SetObjectMoveSpeed): Postavi brzinu kretanja objekta.
