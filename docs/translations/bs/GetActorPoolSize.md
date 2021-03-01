---
title: GetActorPoolSize
description: Dobij najveći actorid na serveru.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Dobij najveći actorid na serveru.

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

- [CreateActor](CreateActor): Kreiraj aktora (statičnog NPC-a).
- [IsValidActor](isValidActor): Provjeri da li je id aktora validan.
- [SetActorHealth](SetActorHealth): Postavi zdravlje aktoru.
