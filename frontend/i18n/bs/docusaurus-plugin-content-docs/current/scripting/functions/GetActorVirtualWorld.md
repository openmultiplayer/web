---
title: GetActorVirtualWorld
sidebar_label: GetActorVirtualWorld
description: Dobij id virtual world-a određenog actora.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Deskripcija

Dobij id virtual world-a određenog actora.

| Ime     | Deskripcija                                      |
| ------- | ------------------------------------------------ |
| actorid | ID actora za dobijanje id-a virtual world-a.     |

## Returns

Virtual World actora. Po defaultu je ovo 0. Također on uvijek returna 0 ako navedeni actor ne postoji.

## Primjeri

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(...);
    SetActorVirtualWorld(MyActor, 69);
    return 1;
}

// Negdje drugdje
if (GetActorVirtualWorld(MyActor) == 69)
{
    // Odradi nešto
}
```

## Srodne Funkcije

- [SetActorVirtualWorld](SetActorVirtualWorld): Postavi wirtual world actoru.
