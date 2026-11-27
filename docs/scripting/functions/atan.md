---
title: "atan | open.mp"
description: "Get the inversed value of a tangent in degrees."
canonical: https://open.mp/docs/scripting/functions/atan
language: en
---

# atan

## Description

Get the inversed value of a [tangent](https://en.wikipedia.org/wiki/Trigonometric_functions) in degrees. In trigonometrics, arc tangent is the inverse operation of tangent. Notice that because of the sign ambiguity, the function cannot determine with certainty in which quadrant the angle falls only by its tangent value. See [atan2](https://open.mp/docs/scripting/functions/atan2) for an alternative that takes a fractional argument instead.

| Name | Description |
| --- | --- |
| Float:value | value whose arc tangent is computed. |

## Returns

The angle in degrees, in the interval \[-90.0,+90.0\].

## Examples

```c
//The arc tangent of 1.000000 is 45.000000 degrees.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 1.0;
    result = atan(param);
    printf("The arc tangent of %f is %f degrees.", param, result);
    return 1;
}
```

## Related Functions

-   [floatsin](https://open.mp/docs/scripting/functions/floatsin): Get the sine from a specific angle.
-   [floatcos](https://open.mp/docs/scripting/functions/floatcos): Get the cosine from a specific angle.
-   [floattan](https://open.mp/docs/scripting/functions/floattan): Get the tangent from a specific angle.
-   [asin](https://open.mp/docs/scripting/functions/asin): Get the inversed value of a sine in degrees.
-   [acos](https://open.mp/docs/scripting/functions/acos): Get the inversed value of a cosine in degrees.
-   [atan2](https://open.mp/docs/scripting/functions/atan2): Get the multi-valued inversed value of a tangent in degrees.
