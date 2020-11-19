---
title: floatcos
description: Get the cosine from a given angle.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Get the cosine from a given angle. The input angle may be in radians, degrees or grades.

| Name        | Description                                            |
| ----------- | ------------------------------------------------------ |
| Float:value | The angle from which to get the cosine.                |
| anglemode   | The angle mode to use, depending on the value entered. |

## ส่งคืน

The cosine of the value entered.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    printf("The cosine from 90° is %f", floatcos(90.0, degrees));
    // Output: 0
    return 1;
}
```

## บันทึก

:::warning

GTA/SA-MP use degrees for angles in most circumstances, for example GetPlayerFacingAngle. Therefore, it is most likely you'll want to use the 'degrees' angle mode, not radians. Also note that angles in GTA are counterclockwise; 270° is East and 90° is West. South is still 180° and North still 0°/360°.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [floatsin](../functions/floatsin): Get the sine from a specific angle.
- [floattan](../functions/floattan): Get the tangent from a specific angle.
