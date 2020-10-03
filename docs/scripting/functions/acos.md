---
id: acos
title: acos
description: .
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Get the inversed value of an arc cosine in radians.

| Name        | Description              |
| ----------- | ------------------------ |
| Float:value | the input in arc cosine. |

## Returns

Principal arc cosine of x, in the interval [0,pi] radians. One radian is
equivalent to 180/PI degrees.

## Examples

```c
//The arc cosine of 0.500000 is 60.000000 degrees.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = acos (param) * 180.0 / PI;
    printf ("The arc cosine of %f is %f degrees.\n", param, result);
    return 0;
}
```

## Related Functions

- [floatsin](../functions/floatsin.md): Get the sine from a
  specific angle.
- [floatcos](../functions/floatcos.md): Get the cosine from a
  specific angle.
- [floattan](../functions/floattan.md): Get the tangent from a
  specific angle.
