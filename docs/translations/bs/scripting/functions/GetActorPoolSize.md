---
title: GetActorPoolSize
description: Dobij najviši actorid kreiran na serveru.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Deskripcija

Dobij najviši actorid kreiran na serveru. Imajte na umu da je u SA:MP-u ova funkcija pokvarena i da će returnati `0` čak i kada nema actora. fixes.inc i open.mp ispravljaju ovo te returnaju (vraćaju) `-1`, ali također odbijaju funkciju u korist `MAX_ACTORS` ili `foreach` plugina.

## Primjeri

```c
SetAllActorsHealth(Float:health)
{
    for(new i = 0, j = GetActorPoolSize(); i <= j; i++)
    {
        if (IsValidActor(i))
        {
            SetActorHealth(i, health);
        }
    }
}
```

## Srodne Funkcije

- [CreateActor](CreateActor): Kreiraj actora (statički NPC).
- [IsValidActor](isValidActor): Provjerite da li je ID actora validan.
- [SetActorHealth](SetActorHealth): Postavite health actoru.
