---
title: atan2
description: Get the inversed value of an arc tangent of y/x, expressed in radians.
tags: ["math"]
---

<LowercaseNote />

:::warning

Notice that the y-value is the first parameter and the x-value is the second parameter.

:::

## Description

Get the inversed value of an arc tangent of y/x, expressed in radians.

| Name    | Description                                            |
| ------- | ------------------------------------------------------ |
| Float:y | Value representing the proportion of the y-coordinate. |
| Float:x | Value representing the proportion of the x-coordinate. |

## Returns

Returns the principal value of the arc tangent of y/x, expressed in radians.

To compute the value, the function takes into account the sign of both arguments in order to determine the quadrant.

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

- [floatsin](floatsin): Get the sine from a specific angle.
- [floatcos](floatcos): Get the cosine from a specific angle.
- [floattan](floattan): Get the tangent from a specific angle.
