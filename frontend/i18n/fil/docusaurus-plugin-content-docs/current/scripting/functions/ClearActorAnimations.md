---
title: ClearActorAnimations
sidebar_label: ClearActorAnimations
description: I-clear ang anumang mga animation na inilapat sa isang aktor.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

I-clear ang anumang mga animation na inilapat sa isang aktor.

| Name    | Description                                                                |
| ------- | -------------------------------------------------------------------------- |
| actorid | Ang ID ng aktor (ni-return ni CreateActor) para i-clear ang mga animation. |

## Returns

1: Matagumpay na naisakatuparan ang function.

0: Nabigo ang function na isagawa. Ang aktor na tinukoy ay wala.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(...);
}

// Sa ibang lugar
ApplyActorAnimation(gMyActor, ...);

// Sa ibang lugar
ClearActorAnimations(gMyActor);
```

## Related Functions

- [ApplyActorAnimation](ApplyActorAnimation): Mag-apply ng animation sa isang actor.