---
title: floattan
description: Get the tangent from a given angle.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Get the tangent from a given angle. The input angle may be in radians, degrees or grades.

| Name        | Description                                            |
| ----------- | ------------------------------------------------------ |
| Float:value | The angle from which to get the tangent.               |
| anglemode   | The angle mode to use, depending on the value entered. |

## ส่งคืน

The tangent from the value entered.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    printf("The tangent from 30° is %f", floattan(30.0, degrees));
    // Output: 1
    return 1;
}
```

## บันทึก

:::warning

GTA/SA-MP use degrees for angles in most circumstances, for example GetPlayerFacingAngle. Therefore, it is most likely you'll want to use the 'degrees' angle mode, not radians. Also note that angles in GTA are counterclockwise; 270° is East and 90° is West. South is still 180° and North still 0°/360°.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [floatsin](../functions/floatsin): Get the sine from a specific angle.
- [floatcos](../functions/floatcos): Get the cosine from a specific angle.
