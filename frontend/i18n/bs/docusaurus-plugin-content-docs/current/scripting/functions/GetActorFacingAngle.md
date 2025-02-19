---
title: GetActorFacingAngle
sidebar_label: GetActorFacingAngle
description: Dobij ugao posmatranja actora.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Deskripcija

Pogledaj ugao posmatranja actora

| Ime        | Deskripcija                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------- |
| actorid    | ID actora za dobivanje ugla posmatranja. Returnan (vraćen) od CreateActor funkcije.         |
| &Float:ang | Float varijabla proslijeđena referencom, u kojoj će biti pohranjen ugao gledanja actora.   |

## Returns

1: Funkcija je uspješno izvršena.

0: Funkcija nije uspjela da se izvrši. Navedeni actor ne postoji.

Ugao gledanja actora je pohranjen u navedenoj varijabli.

## Primjeri

```c
new Float:facingAngle;
GetActorFacingAngle(actorid, facingAngle);
```

## Povezane Funkcije

- [SetActorFacingAngle](SetActorFacingAngle): Postaviti ugao gledanja actora.
- [GetActorPos](GetActorPos): Dobiti poziciju actora.
