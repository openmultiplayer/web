---
title: ClearActorAnimations
description: Прекине све анимације активне на актору.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Опис

Прекине све анимације активне на актору.

| Име     | Опис                                                           |
| ------- | -------------------------------------------------------------- |
| actorid | Ид актора (враћен од [CreateActor](CreateActor)) за кога прекидамо анимацију. |

## Враћа

**true**: Функција је успешно извршена

**false**: Функција није успешно извршења. Дати актор не постоји.

## Примери

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(...);
}

// Негде другде
ApplyActorAnimation(gMyActor, ...);

// Негде другде
ClearActorAnimations(gMyActor);
```

## Повезане функције

- [ApplyActorAnimation](ApplyActorAnimation.md): Поставља анимацију актору.
