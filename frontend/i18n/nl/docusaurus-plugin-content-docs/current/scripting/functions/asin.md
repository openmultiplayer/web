---
title: asin
sidebar_label: asin
description: Arc‑sinus (in graden) teruggeven.
tags: ["math"]
---

<LowercaseNote />

## Beschrijving

Geef de arc‑sinus (inverse van sinus) in graden.

| Naam        | Beschrijving                                                |
| ----------- | ----------------------------------------------------------- |
| Float:value | waarde waarvan de arc‑sinus wordt berekend, in [-1,+1].     |

## Retourneert

De hoek in graden, in het interval [-90.0, +90.0].

## Voorbeeld

```c
//De arc‑sinus van 0.500000 is 30.000000 graden.
public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = asin(param);
    printf("The arc sine of %f is %f degrees.", param, result);
    return 1;
}
```

## Gerelateerd

- [floatsin](../functions/floatsin)
- [floatcos](../functions/floatcos)
- [floattan](../functions/floattan)
- [acos](../functions/acos)
- [atan](../functions/atan)
- [atan2](../functions/atan2)


