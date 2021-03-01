---
title: GetActorPos
description: Dobij poziciju aktora.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Dobij poziciju aktora.

| Ime     | Deskripcija                                                                        |
| ------- | ---------------------------------------------------------------------------------- |
| actorid | ID actor to get the position of. Returned by CreateActor.                          |
| X       | Float varijabla, proslijeđena referencom, u kojoj će se čuvati X kordinata aktora. |
| Y       | Float varijabla, proslijeđena referencom, u kojoj će se čuvati Y kordinata aktora. |
| Z       | Float varijabla, proslijeđena referencom, u kojoj će se čuvati Z kordinata aktora. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeni aktor ne postoji..

Pozicija aktora je pohranjena u navedenim varijablama.

## Primjeri

```c
new Float:x, Float:y, Float:z;
GetActorPos(actorid, x, y, z);
```

## Srodne Funkcije

- [SetActorPos](SetActorPos): Postavi poziciju aktora.
