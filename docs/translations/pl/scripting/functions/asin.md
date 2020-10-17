---
id: asin
title: asin
description: .
tags: []
---

import T from '../../../../../src/components/templates.js'

<T.LowercaseNote />

## Opis

Podaje odwróconą wartość arcus sinusa w radianach.

| Nazwa       | Opis        |
| ----------- | ----------- |
| Float:value | Arcus sinus |

## Zwracane wartości

Wartość, której arcus sinus został obliczony, w przedziale [-1,+1]. Jeżeli argument jest spoza tego przedziału, występuje błąd.

## Przykłady

```c
//Arcus sinus dla 0.500000 wynosi 30.000000 stopni.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = asin (param) * 180.0 / PI;
    printf ("Arcus sinus dla %f wynosi %f stopni\n", param, result);
    return 0;
}
```

## Related Functions

- [floatsin](floatsin.md): Podaje sinus dla określonego kąta.
- [floatcos](floatcos.md): Podaje cosinus dla określonego kąta.
- [floattan](floattan.md): Podaje tangens dla określonego kąta.
