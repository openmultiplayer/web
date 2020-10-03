---
id: asin
title: asin
description: .
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Get the inversed value of an arc sine in radians.

| Name        | Description            |
| ----------- | ---------------------- |
| Float:value | the input in arc sine. |

## Returns

Value whose arc sine is computed, in the interval [-1,+1]. If the argument is
out of this interval, a domain error occurs.

## Examples

```c
//The arc sine of 0.500000 is 30.000000 degrees.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = asin (param) * 180.0 / PI;
    printf ("The arc sine of %f is %f degrees\n", param, result);
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
