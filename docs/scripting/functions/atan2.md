---
id: atan2
title: atan2
description: .
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Get the inversed value of an arc tangent of y/x, expressed in radians.

| Name    | Description                                            |
| ------- | ------------------------------------------------------ |
| Float:x | Value representing the proportion of the y-coordinate. |
| Float:y | Value representing the proportion of the x-coordinate. |

## Returns

Returns the principal value of the arc tangent of y/x, expressed in radians.

To compute the value, the function takes into account the sign of both arguments
in order to determine the quadrant.

## Examples

```c
//The arc tangent for (x=-10.000000, y=10.000000) is 135.000000 degrees.

public OnGameModeInit()
{
    new Float:x, Float:y, Float:result;
    x = -10.0;
    y = 10.0;
    result = atan2 (y,x) * 180 / PI;
    printf ("The arc tangent for (x=%f, y=%f) is %f degrees\n", x, y, result );
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
