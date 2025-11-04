---
title: atan2
sidebar_label: atan2
description: Arc‑tangens met y,x (in graden) teruggeven.
tags: ["math"]
---

<LowercaseNote />

:::warning
De y‑waarde is de eerste parameter en x de tweede (y/x‑notatie).
:::

## Beschrijving

Geef de arc‑tangens in graden, rekening houdend met het teken van beide argumenten om de kwadrant te bepalen.

| Naam    | Beschrijving                                     |
| ------- | ------------------------------------------------- |
| Float:y | aandeel van de y‑coördinaat                      |
| Float:x | aandeel van de x‑coördinaat                      |

## Retourneert

De hoek in graden, in het interval [-180.0, +180.0].

## Voorbeeld

```c
//De arc‑tangens voor (x=-10.000000, y=10.000000) is 135.000000 graden.
public OnGameModeInit()
{
    new Float:x, Float:y, Float:result;
    x = -10.0;
    y = 10.0;
    result = atan2(y, x);
    printf("The arc tangent for (x=%f, y=%f) is %f degrees.", x, y, result);
    return 1;
}
```

## Gerelateerd

- [floatsin](../functions/floatsin)
- [floatcos](../functions/floatcos)
- [floattan](../functions/floattan)
- [asin](../functions/asin)
- [acos](../functions/acos)
- [atan](../functions/atan)


