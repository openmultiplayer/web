---
title: GetPlayerObjectRot
description: Koristite ovu funkciju za dobivanje trenutne rotacije objekta.
tags: ["player"]
---

## Deskripcija

Koristite ovu funkciju za dobivanje trenutne rotacije objekta. Rotacija se sprema referencom u tri varijable RotX / RotY / RotZ.

| Ime      | Deskripcija                                               |
| -------- | --------------------------------------------------------- |
| playerid | Igrač kojem ste pridružili ovaj objekt.                   |
| objectid | ID objekta iz kojeg želite dobiti rotaciju.               |
| &Float:X | Varijabla za pohranu X rotacije, proslijeđeno referencom. |
| &Float:Y | Varijabla za pohranu Y rotacije, proslijeđeno referencom. |
| &Float:Z | Varijabla za pohranu Z rotacije, proslijeđeno referencom. |

## Returns

Rotacija objekta pohranjena je u navedenim varijablama.

## Primjeri

```c
GetPlayerObjectRot(playerid, objectid, RotX, RotY, RotZ);
```

## Srodne Funkcije

- [CreatePlayerObject](CreatePlayerObject): Kreiraj objekat za samo jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player objekat.
- [IsValidPlayerObject](IsValidPlayerObject): Provjeri da li je određeni player objekat validan.
- [MovePlayerObject](MovePlayerObject): Pomjeri player objekat.
- [StopPlayerObject](StopPlayerObject): Zaustavi player objekat od kretanja.
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player objekta.
- [SetPlayerObjectRot](SetPlayerObjectRot): Postavi rotaciju player objekta.
- [GetPlayerObjectPos](GetPlayerObjectPos): Lociraj player objekat.
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
