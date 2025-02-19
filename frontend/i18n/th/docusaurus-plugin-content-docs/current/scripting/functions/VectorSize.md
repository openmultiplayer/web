---
title: VectorSize
sidebar_label: VectorSize
description: Returns the norm (length) of the provided vector.
tags: []
---

## คำอธิบาย

Returns the norm (length) of the provided vector.

| Name    | Description                           |
| ------- | ------------------------------------- |
| Float:X | The vector's magnitude on the X axis. |
| Float:Y | The vector's magnitude on the Y axis. |
| Float:Z | The vector's magnitude on the Z axis. |

## ส่งคืน

The norm (length) of the provided vector as a float.

## ตัวอย่าง

```c
stock Float:GetDistanceBetweenPoints(Float:x1, Float:y1, Float:z1, Float:x2, Float:y2, Float:z2)
{
    return VectorSize(x1-x2, y1-y2, z1-z2);
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetPlayerDistanceFromPoint](../functions/GetPlayerDistanceFromPoint.md): Get the distance between a player and a point.
- [GetVehicleDistanceFromPoint](../functions/GetVehicleDistanceFromPoint.md): Get the distance between a vehicle and a point.
- [floatsqroot](../functions/floatsqroot.md): Calculate the square root of a floating point value.
