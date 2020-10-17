---
id: atan
title: atan
description: Podaje odwróconą wartość arcus tangensa w radianach.
tags: []
---

import T from '../../../../../src/components/templates.js'

<T.LowercaseNote />

## Opis

Podaje odwróconą wartość arcus tangensa w radianach.

| Nazwa       | Opis          |
| ----------- | ------------- |
| Float:value | Arcus tangens |

## Zwracane wartości

Odwrócona wartość arcus tangensa w radianach.

## Examples

```c
//Ta funkcja zwraca radiany. Większość funkcji SA-MP używa stopni, dlatego zaleca się skonwertować je używając wzoru: result = atan (param) * 180 / PI

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 1.0;
    result = atan(param) * 180 / 3.14159265; //1 radian to 180 stopni. 3.14... to liczba Pi.
    printf ("Arcus tangens dla %f wynosi %f stopni\n", param, result );
    return 0;
}
```

## Related Functions

- [floatsin](floatsin.md): Podaje sinus dla konkretnego kąta.
- [floatcos](floatcos.md): Podaje cosinus dla konkretnego kąta.
- [floattan](floattan.md): Podaje tangens dla konkretnego kąta.
