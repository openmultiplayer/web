---
title: VectorSize
description: Returns the norm (length) of the provided vector.
tags: ["math"]
---

## Description

Returns the norm (length) of the provided vector.

| Name    | Description                           |
| ------- | ------------------------------------- |
| Float:x | The vector's magnitude on the X axis. |
| Float:y | The vector's magnitude on the Y axis. |
| Float:z | The vector's magnitude on the Z axis. |

## Returns

The norm (length) of the provided vector as a float.

## Examples

```c
stock Float:GetDistanceBetweenPoints(Float:x1, Float:y1, Float:z1, Float:x2, Float:y2, Float:z2)
{
    return VectorSize(x1-x2, y1-y2, z1-z2);
}
```

## Related Functions

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): Get the distance between a player and a point.
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): Get the distance between a vehicle and a point.
- [floatsqroot](floatsqroot): Calculate the square root of a floating point value.
