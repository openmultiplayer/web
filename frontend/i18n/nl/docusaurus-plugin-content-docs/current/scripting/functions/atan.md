---
title: atan
sidebar_label: atan
description: Arc‑tangens (in graden) teruggeven.
tags: ["math"]
---

<LowercaseNote />

## Beschrijving

Geef de arc‑tangens (inverse van tangens) in graden. Door tekenambiguïteit kan de kwadrant niet eenduidig bepaald worden; zie [atan2](../functions/atan2) voor een alternatief met y/x.

| Naam        | Beschrijving                           |
| ----------- | -------------------------------------- |
| Float:value | waarde waarvan de arc‑tangens wordt berekend. |

## Retourneert

De hoek in graden, in het interval [-90.0, +90.0].

## Voorbeeld

```c
//De arc‑tangens van 1.000000 is 45.000000 graden.
public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 1.0;
    result = atan(param);
    printf("The arc tangent of %f is %f degrees.", param, result);
    return 1;
}
```

## Gerelateerd

- [floatsin](../functions/floatsin)
- [floatcos](../functions/floatcos)
- [floattan](../functions/floattan)
- [asin](../functions/asin)
- [acos](../functions/acos)
- [atan2](../functions/atan2)


