---
title: atan
sidebar_label: atan
description: Podaje odwróconą wartość arcus tangensa w radianach.
tags: []
---

<LowercaseNote />

## Opis

Podaje odwróconą wartość arcus tangensa w radianach.

| Nazwa       | Opis          |
| ----------- | ------------- |
| Float:value | Arcus tangens |

## Zwracane wartości

Odwrócona wartość arcus tangensa w radianach.

## Examples

```c
public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 1.0;
    result = atan(param);
    printf("Arcus tangens dla %f wynosi %f stopni.", param, result);
    return 1;
}
```

## Related Functions

- [floatsin](floatsin): Podaje sinus dla konkretnego kąta.
- [floatcos](floatcos): Podaje cosinus dla konkretnego kąta.
- [floattan](floattan): Podaje tangens dla konkretnego kąta.
