---
title: GetObjectPos
description: Dobij poziciju objekta.
tags: []
---

## Deskripcija

Dobij poziciju objekta.

| Ime      | Deskripcija                                                       |
| -------- | ----------------------------------------------------------------- |
| objectid | ID objekta za dobiti poziciju.                                    |
| &Float:X | A varijabla u kojoj se čuva X kordinata, proslijeđeno referencom. |
| &Float:Y | A varijabla u kojoj se čuva Y kordinata, proslijeđeno referencom. |
| &Float:Z | A varijabla u kojoj se čuva Z kordinata, proslijeđeno referencom. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni objekat ne postoji.

## Primjeri

```c
new Float:x, Float:y, Float:z;
GetObjectPos(objectid, x, y, z);
```

## Srodne Funkcije

- [CreateObject](CreateObject): Kreiraj objekat.
- [DestroyObject](DestroyObject): Uništi objekat.
- [IsValidObject](IsValidObject): Provjeri da li je određeni objekat validan.
- [MoveObject](MoveObject): Pomjeri objekat.
- [StopObject](StopObject): Zaustavi objekat od kretanja.
- [SetObjectPos](SetObjectPos): Postavi poziciju objekta.
- [SetObjectRot](SetObjectRot): Postavi rotaciju objekta.
- [GetObjectRot](GetObjectRot): Provjeri rotaciju objekta.
- [AttachObjectToPlayer](AttachObjectToPlayer): Prikvači objekat za igrača.
- [CreatePlayerObject](CreatePlayerObject): Kreiraj objekat za samo jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player objekat.
- [IsValidPlayerObject](IsValidPlayerObject): Provjeri da li je određeni player objekat validan.
- [MovePlayerObject](MovePlayerObject): Pomjeri player objekat.
- [StopPlayerObject](StopPlayerObject): Zaustavi player objekat od kretanja.
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player objekta.
- [SetPlayerObjectRot](SetPlayerObjectRot): Postavi rotaciju player objekta.
- [GetPlayerObjectPos](GetPlayerObjectPos): Lociraj player objekat.
- [GetPlayerObjectRot](GetPlayerObjectRot): Provjeri rotaciju player objekta.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Prikvači player objekat za igrača.
