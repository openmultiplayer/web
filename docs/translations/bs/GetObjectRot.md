---
title: GetObjectRot
description: Koristi ovu funkciju da dobijete trenutnu rotaciju objekta.
tags: []
---

## Deskripcija

Koristi ovu funkciju da dobijete trenutnu rotaciju objekta. Rotacija se sprema referencom u tri varijable RotX/RotY/RotZ.

| Ime      | Deskripcija                                                   |
| -------- | ------------------------------------------------------------- |
| objectid | The objectid of the object you want to get the rotation from. |
| &Float:X | Varijabla za pohranu X rotacije, proslijeđeno referencom.     |
| &Float:Y | Varijabla za pohranu Y rotacije, proslijeđeno referencom.     |
| &Float:Z | Varijabla za pohranu Z rotacije, proslijeđeno referencom.     |

## Returns

Rotacija objekta pohranjena je u referenciranim varijablama, a ne u povratnoj vrijednosti.

## Primjeri

```c
new Float:RotX,Float:RotY,Float:RotZ;
GetObjectRot(objectid, RotX, RotY, RotZ);
```

## Srodne Funkcije

- [GetObjectPos](GetObjectPos): Lociraj objekat.
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
