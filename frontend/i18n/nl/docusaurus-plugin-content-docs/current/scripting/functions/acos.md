---
title: acos
sidebar_label: acos
description: Arc‑cosinus (in graden) teruggeven.
tags: ["math"]
---

<LowercaseNote />

## Beschrijving

Geef de arc‑cosinus (inverse van cosinus) in graden.

| Naam        | Beschrijving                                                  |
| ----------- | ------------------------------------------------------------- |
| Float:value | waarde waarvan de arc‑cosinus wordt berekend, in [-1,+1].     |

## Retourneert

De hoek in graden, in het interval [0.0, 180.0].

## Voorbeeld

```c
//De arc‑cosinus van 0.500000 is 60.000000 graden.
public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = acos(param);
    printf("The arc cosine of %f is %f degrees.", param, result);
    return 1;
}
```

## Gerelateerd

- [floatsin](../functions/floatsin)
- [floatcos](../functions/floatcos)
- [floattan](../functions/floattan)
- [asin](../functions/asin)
- [atan](../functions/atan)
- [atan2](../functions/atan2)


