---
title: "floatcos | open.mp"
description: "Get the cosine from a given angle."
canonical: https://open.mp/docs/scripting/functions/floatcos
language: en
---

# floatcos

## Description

Get the [cosine](https://en.wikipedia.org/wiki/Sine_and_cosine) from a given angle. The input angle may be in radians, degrees or grades.

| Name | Description |
| --- | --- |
| Float:value | The angle from which to get the cosine. |
| anglemode:mode | The [angle mode](https://open.mp/docs/scripting/resources/anglemodes) to use, depending on the value entered. (default: radian) |

## Returns

The cosine of the value entered.

## Examples

```c
public OnGameModeInit()
{
    printf("The cosine from 90° is %.0f", floatcos(90.0, degrees));
    // Output: 0
    return 1;
}
```

## Notes

warning

-   GTA/SA-MP use **degrees** for angles in most circumstances, for example [GetPlayerFacingAngle](https://open.mp/docs/scripting/functions/GetPlayerFacingAngle). Therefore, it is most likely you'll want to use the '**degrees**' angle mode, _not_ radians.
-   Also note that angles in GTA are counterclockwise; 270° is East and 90° is West. South is still 180° and North still 0°/360°.

## Related Functions

-   [floatsin](https://open.mp/docs/scripting/functions/floatsin): Get the sine from a specific angle.
-   [floattan](https://open.mp/docs/scripting/functions/floattan): Get the tangent from a specific angle.

## Related Resources

-   [Angle Modes](https://open.mp/docs/scripting/resources/anglemodes): SI unit constants for measuring angles.
