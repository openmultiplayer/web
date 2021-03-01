---
title: GetPlayerObjectPos
description: Dobij poziciju player-objekta (CreatePlayerObject).
tags: ["player"]
---

## Deskripcija

Dobij poziciju player-objekta (CreatePlayerObject).

| Ime      | Deskripcija                                                        |
| -------- | ------------------------------------------------------------------ |
| playerid | ID igrača od čijeg player-objekta se uzima pozicija.               |
| objectid | Id objekta za koji želite trenutnu lokaciju.                       |
| &Float:X | Float varijabla za pohraniti X kordinatu, proslijeđeno referencom. |
| &Float:Y | Float varijabla za pohraniti Y kordinatu, proslijeđeno referencom. |
| &Float:Z | Float varijabla za pohraniti Z kordinatu, proslijeđeno referencom. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Igrač i/ili objekat ne postoje.

Pozicija objekta pohranjen je u navedenim varijablama.

## Primjeri

```c
new Float:x, Float:y, Float:z;
GetPlayerObjectPos(playerid, objectid, x, y, z);
```

## Srodne Funkcije

- [CreatePlayerObject](CreatePlayerObject): Kreiraj objekat za samo jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player objekat.
- [IsValidPlayerObject](IsValidPlayerObject): Provjeri da li je određeni player objekat validan.
- [MovePlayerObject](MovePlayerObject): Pomjeri player objekat.
- [StopPlayerObject](StopPlayerObject): Zaustavi player objekat od kretanja.
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player objekta.
- [SetPlayerObjectRot](SetPlayerObjectRot): Postavi rotaciju player objekta.
- [GetPlayerObjectRot](GetPlayerObjectRot): Provjeri rotaciju player objekta.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Prikvači player objekat za igrača.
- [CreateObject](CreateObject): Kreiraj objekat.
- [DestroyObject](DestroyObject): Uništi objekat.
- [IsValidObject](IsValidObject): Provjeri da li je određeni objekat validan.
- [MoveObject](MoveObject): Pomjeri objekat.
- [StopObject](StopObject): Zaustavi objekat od kretanja.
- [SetObjectPos](SetObjectPos): Postavi poziciju objekta.
- [SetObjectRot](SetObjectRot): Postavi rotaciju objekta.
- [GetObjectPos](GetObjectPos): Lociraj objekat.
- [GetObjectRot](GetObjectRot): Provjeri rotaciju objekta.
- [AttachObjectToPlayer](AttachObjectToPlayer): Prikvači objekat za igrača.
