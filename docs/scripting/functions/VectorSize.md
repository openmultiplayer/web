---
title: "VectorSize | open.mp"
description: "Returns the norm (length) of the provided vector."
canonical: https://open.mp/docs/scripting/functions/VectorSize
language: en
---

# VectorSize

## Description

Returns the norm (length) of the provided vector.

| Name | Description |
| --- | --- |
| Float:x | The vector's magnitude on the X axis. |
| Float:y | The vector's magnitude on the Y axis. |
| Float:z | The vector's magnitude on the Z axis. |

## Returns

The norm (length) of the provided vector as a **float**.

## Examples

```c
stock Float:GetDistanceBetweenPoints(Float:x1, Float:y1, Float:z1, Float:x2, Float:y2, Float:z2)
{
    return VectorSize(x1 - x2, y1 - y2, z1 - z2);
}
```

## Related Functions

-   [GetPlayerDistanceFromPoint](https://open.mp/docs/scripting/functions/GetPlayerDistanceFromPoint): Get the distance between a player and a point.
-   [GetVehicleDistanceFromPoint](https://open.mp/docs/scripting/functions/GetVehicleDistanceFromPoint): Get the distance between a vehicle and a point.
-   [floatsqroot](https://open.mp/docs/scripting/functions/floatsqroot): Calculate the square root of a floating point value.
