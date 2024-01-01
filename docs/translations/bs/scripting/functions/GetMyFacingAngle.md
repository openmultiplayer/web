---
title: GetMyFacingAngle
description: Dobij trenutni ugao posmatranja NPC-a.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Deskripcija

Dobij trenutni ugao posmatranja NPC-a.

| Ime                  | Deskripcija                                                      |
| -------------------- | ---------------------------------------------------------------- |
| &Float:Angle         | Float za spremanje ugla, proslijeđen referencom.                 |

## Returns

Ugao posmatranja je pohranjen u navedenoj varijabli.

## Primjeri

```c
public OnPlayerText(playerid, text[])
{
new Float:Angle;
GetMyFacingAngle(Angle);
printf("Trenutno posmatram %f!", Angle);

```

## Srodne Funkcije

- [SetMyFacingAngle](SetMyFacingAngle): Postavi ugao posmatranja NPC-u.
