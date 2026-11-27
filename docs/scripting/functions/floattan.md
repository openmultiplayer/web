---
title: "floattan | open.mp"
description: "Get the tangent from a given angle."
canonical: https://open.mp/docs/scripting/functions/floattan
language: en
---

# floattan

## Description

Get the [tangent](https://en.wikipedia.org/wiki/Trigonometric_functions) from a given angle. The input angle may be in radians, degrees or grades.

| Name | Description |
| --- | --- |
| Float:value | The angle from which to get the tangent. |
| anglemode | The [angle mode](https://open.mp/docs/scripting/resources/anglemodes) to use, depending on the value entered. (default: radian) |

## Returns

The tangent from the value entered.

## Examples

```c
public OnGameModeInit()
{
    printf("The tangent from 30° is %.0f", floattan(30.0, degrees));
    // Output: 1
    return 1;
}
```

## Notes

warning

-   GTA/SA-MP use **degrees** for angles in most circumstances, for example [GetPlayerFacingAngle](https://open.mp/docs/scripting/functions/GetPlayerFacingAngle). Therefore, it is most likely you'll want to use the '**degrees**' angle mode, _not_ radians.
-   Also note that angles in GTA are counterclockwise; 270° is East and 90° is West. South is still 180° and North still 0°/360°.

## Related Functions

-   [floatsin](https://open.mp/docs/scripting/functions/floatsin): Get the sine from a specific angle.
-   [floatcos](https://open.mp/docs/scripting/functions/floatcos): Get the cosine from a specific angle.

## Related Resources

-   [Angle Modes](https://open.mp/docs/scripting/resources/anglemodes): SI unit constants for measuring angles.
