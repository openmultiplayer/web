---
title: GetActorVirtualWorld
description: Dobij virtualni svijet aktora.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Dobij virtualni svijet aktora.

| Ime     | Deskripcija                           |
| ------- | ------------------------------------- |
| actorid | ID aktora za dobiti virtualni svijet. |

## Returns

Virtualni svijet aktora. Po zadanim postavkama ovo je 0. Također returna/vraća 0 ako navedeni aktor ne postoji.

## Primjeri

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(...);
    SetActorVirtualWorld(MyActor, 69);
    return 1;
}

// Negdje drugo
if (GetActorVirtualWorld(MyActor) == 69)
{
    // Radi nešto
}
```

## Srodne Funkcije

- [SetActorVirtualWorld](SetActorVirtualWorld): Postavi virtualni svijet za aktora.
