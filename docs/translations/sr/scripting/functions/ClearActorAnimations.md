---
title: ClearActorAnimations
description: Prekine sve animacije aktivne na actoru.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3d i ne radi u nizim verzijama!

:::

## Opis

Prekine sve animacije aktivne na actoru.

| Ime     | Opis                                                           |
| ------- | -------------------------------------------------------------- |
| actorid | ID actora (vracen od CreateActor) za koga prekidamo animaciju. |

## Vraca

1: Funkcija je uspesno izvrsena.

0: Funkcija nije uspesno izvrsena. Dati actor ne postoji.

## Primeri

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(...);
}

// Somewhere else
ApplyActorAnimation(gMyActor, ...);

// Somewhere else
ClearActorAnimations(gMyActor);
```

## Srodne Funkcije

- [ApplyActorAnimation](ApplyActorAnimation.md): Postavlja animaciju na actora.
