---
title: GetActorPos
description: Dobij poziciju actora.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Deskripcija

Dobij poziciju actora.

| Ime     | Deskripcija                                                                             |
| ------- | --------------------------------------------------------------------------------------- |
| actorid | ID actora koji će dobiti poziciju. Returnan od funkcije CreateActor.                    |
| X       | Float varijabla proslijeđena referencom u kojoj se pohranjuje X koordinata actora.      |
| Y       | Float varijabla proslijeđena referencom u kojoj se pohranjuje Y koordinata actora.      |
| Z       | Float varijabla proslijeđena referencom u kojoj se pohranjuje Z koordinata actora.      |

## Returns

1: Funkcija je uspješno izvršena.

0: Funkcija nije uspjela da se izvrši. Navedeni actor ne postoji.

Pozicija actora je pohranjena u navedenim varijablama.

## Primjeri

```c
new Float:x, Float:y, Float:z;
GetActorPos(actorid, x, y, z);
```

## Srodne Funkcije

- [SetActorPos](SetActorPos): Postavi poziciju actora.
