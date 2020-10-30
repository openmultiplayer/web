---
title: atan
description: Get the inversed value of an arc tangent in radians.
tags: []
---

import T from '../../../src/components/templates.js'

<T.LowercaseNote />

## Description

Get the inversed value of an arc tangent in radians.

| Name        | Description                |
| ----------- | -------------------------- |
| Float:value | the input in arc tangents. |

## Returns

The radiant of the angle in radians.

## Examples

```c
//This function returns radiants. Because most SA-MP functions use degrees, it is advised to convert them using the formula: result = atan (param) * 180 / PI

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 1.0;
    result = atan(param) * 180 / 3.14159265; //1 radian equals 180 degrees. 3.14... is used to define PI.
    printf ("The arc tangent of %f is %f degrees\n", param, result );
    return 0;
}
```

## Related Functions

- [floatsin](floatsin.md): Get the sine from a specific angle.
- [floatcos](floatcos.md): Get the cosine from a specific angle.
- [floattan](floattan.md): Get the tangent from a specific angle.
