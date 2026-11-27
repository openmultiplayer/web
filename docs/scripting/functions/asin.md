---
title: "asin | open.mp"
description: "Get the inversed value of a sine in degrees."
canonical: https://open.mp/docs/scripting/functions/asin
language: en
---

# asin

## Description

Get the inversed value of a sine in degrees. In trigonometrics, arc sine is the inverse operation of sine.

| Name | Description |
| --- | --- |
| Float:value | value whose arc sine is computed, in the interval \[-1,+1\]. |

## Returns

The angle in degrees, in the interval \[-90.0,+90.0\].

## Examples

```c
//The arc sine of 0.500000 is 30.000000 degrees.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = asin(param);
    printf("The arc sine of %f is %f degrees.", param, result);
    return 1;
}
```

## Related Functions

-   [floatsin](https://open.mp/docs/scripting/functions/floatsin): Get the sine from a specific angle.
-   [floatcos](https://open.mp/docs/scripting/functions/floatcos): Get the cosine from a specific angle.
-   [floattan](https://open.mp/docs/scripting/functions/floattan): Get the tangent from a specific angle.
-   [acos](https://open.mp/docs/scripting/functions/acos): Get the inversed value of a cosine in degrees.
-   [atan](https://open.mp/docs/scripting/functions/atan): Get the inversed value of a tangent in degrees.
-   [atan2](https://open.mp/docs/scripting/functions/atan2): Get the multi-valued inversed value of a tangent in degrees.
