---
title: atan
description: Dobijte obrnutu vrijednost tangente luka u radijanima.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Dobijte obrnutu vrijednost tangente luka u radijanima.

| Ime         | Deskripcija                |
| ----------- | -------------------------- |
| Float:value | Unos u tangentama luka.    |

## Returns

Radijant ugla u radijanima.

## Primjeri

```c
public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 1.0;
    result = atan(param);
    printf("Tangent luka od %f je %f stepeni.", param, result);
    return 1;
}
```

## Srodne Funkcije

- [floatsin](floatsin): Uzmite sinus iz određenog ugla.
- [floatcos](floatcos): Uzmite kosinus iz određenog ugla.
- [floattan](floattan): Uzmite tangentu pod određenim uglom.
