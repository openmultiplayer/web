---
id: atan
title: atan
description: Get the inversed value of an arc tangent in radians.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Get the inversed value of an arc tangent in radians.

| Name        | Description                |
| ----------- | -------------------------- |
| Float:value | the input in arc tangents. |

## ส่งคืน

The radiant of the angle in radians.

## ตัวอย่าง

```c
//This function returns radiants. Because most SA-MP functions use degrees, it is advised to convert them using the formula: result = atan (param) * 180 / PI

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 1.0;
    result = atan(param) * 180 / 3.14159265; //1 radian equals 180 degrees. 3.14... is used to define PI.
    printf ("The arc tangent of %f is %f degrees\n", param, result );
    return 0;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [floatsin](../../scripting/functions/floatsin.md): Get the sine from a specific angle.
- [floatcos](../../scripting/functions/floatcos.md): Get the cosine from a specific angle.
- [floattan](../../scripting/functions/floattan.md): Get the tangent from a specific angle.
