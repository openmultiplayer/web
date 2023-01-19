---
title: GetObjectPos
description: Dobij poziciju objekta.
tags: []
---

## Deskripcija

Dobij poziciju objekta.

| Ime      | Deskripcija                                                            |
| -------- | ---------------------------------------------------------------------- |
| objectid | ID objekta za dobivanje pozicije..                                     |
| &Float:X | Varijabla u kojoj se pohranjuju X koordinate, proslijeđena referencom. |
| &Float:Y | Varijabla u kojoj se pohranjuju Y koordinate, proslijeđena referencom. |
| &Float:Z | Varijabla u kojoj se pohranjuju Z koordinate, proslijeđena referencom. |

## Returns

1: Funkcija je uspješno izvršena.

0: Funkcija nije uspjela da se izvrši. Navedeni objekt ne postoji.

## Primjeri

```c
new Float:x, Float:y, Float:z;
GetObjectPos(objectid, x, y, z);
```

## Srodne Funkcije

- [CreateObject](CreateObject): Kreiraj objekt.
- [DestroyObject](DestroyObject): Uništi objekt
- [IsValidObject](IsValidObject): Provjerava da li je određeni objekt validan.
- [MoveObject](MoveObject): Pomjeri objekt.
- [StopObject](StopObject): Zaustavi pomjeranje objekta.
- [SetObjectPos](SetObjectPos): Postavi poziciju objektu.
- [SetObjectRot](SetObjectRot): Postavi rotaciju objektu.
- [GetObjectRot](GetObjectRot): Provjeri rotaciju objekta.
- [AttachObjectToPlayer](AttachObjectToPlayer): Postavi objekt na igrača.
- [CreatePlayerObject](CreatePlayerObject): Kreiraj objekt samo za jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player-objekt
- [IsValidPlayerObject](IsValidPlayerObject): Provjerava da li je određeni player-objekt validan.
- [MovePlayerObject](MovePlayerObject): Pomjeri player-objekt
- [StopPlayerObject](StopPlayerObject): Zaustavi pomjeranje player-objekta
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player-objektu
- [SetPlayerObjectRot](SetPlayerObjectRot): Postavi rotaciju player-objektu
- [GetPlayerObjectPos](GetPlayerObjectPos): Pronađi player-objekt
- [GetPlayerObjectRot](GetPlayerObjectRot): Provjeri rotaciju player-objekta
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Postavi player-objekt na igrača.
