---
id: acos
title: acos
description: .
tags: []
---

import T from '../../../../../src/components/templates.js'

<T.LowercaseNote />

## Opis

Podaje odwróconą wartość arcus cosinusa w radianach.

| Nazwa       | Opis          |
| ----------- | ------------- |
| Float:value | Arcus cosinus |

## Zwracane wartości

Główny arcus cosinus z x w przedziale [0, π] radianów. Jeden radian jest równy 180/π stopni.

## Przykłady

```c
//Arcus cosinus dla 0.500000 wynosi 60.000000 stopni.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = acos (param) * 180.0 / PI;
    printf ("Arcus cosinus dla %f wynosi %f stopni.\n", param, result);
    return 0;
}
```

## Powiązane funkcje

- [floatsin](floatsin.md): Podaje sinus dla określonego kąta.
- [floatcos](floatcos.md): Podaje cosinus dla określonego kąta.
- [floattan](floattan.md): Podaje tangens dla określonego kąta.
