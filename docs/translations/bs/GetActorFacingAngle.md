---
title: GetActorFacingAngle
description: Dobij smjer gledanja aktora.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Dobij smjer gledanja aktora.

| Ime        | Deskripcija                                                                               |
| ---------- | ----------------------------------------------------------------------------------------- |
| actorid    | ID aktora za dobiti smjer gledanja. Returnovan/vraćen od CreateActor.                     |
| &Float:ang | Float varijabla, proslijeđena referencom, u koju će biti pohranjen smjer gledanja aktora. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni aktor ne postoji.

Smjer gledanja aktora pohranjen je u navedenoj varijabli.

## Primjeri

```c
new Float:facingAngle;
GetActorFacingAngle(actorid, facingAngle);
```

## Srodne Funkcije

- [SetActorFacingAngle](SetActorFacingAngle): Postavi smjer gledanja aktora.
- [GetActorPos](GetActorPos): Dobij poziciju aktora.
