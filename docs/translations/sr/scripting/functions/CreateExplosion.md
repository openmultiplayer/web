---
title: CreateExplosion
description: Креира се експлозија на одређеним координатама.
tags: []
---

## Опис

Креира се експлозија на одређеним координатама.

| Име          | Опис                                          |
| ------------ | --------------------------------------------- |
| Float:X      | X координата експлозије                       |
| Float:Y      | Y координата експлозије                       |
| Float:Z      | Z координата експлозије                       |
| type         | [тип](../resources/explosionlist) експлозије. |
| Float:radius | Величина експлозије                           |

## Враћа

Ова функција увек враћа 1, иако су тип експлозије или вечичина неправилни.

## Primeri

```c
public OnPlayerEnterCheckpoint(playerid)
{
    // Узима позицију играча
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z);

    // Креира експлозију на координатама играча
    CreateExplosion(x, y, z, 12, 10.0);

    return 1;
}
```

## Белешке

:::tip

Постоји лимит који ограничава колико играч може видети експлозија одједном. То је 10.

:::

## Сличне функције

- [CreateExplosionForPlayer](CreateExplosionForPlayer): Креира експлозију која је видљива само једном играчу.

## Види такође

- [Explosion Types](../resources/explosionlist): Листа свих типова експлозија.
