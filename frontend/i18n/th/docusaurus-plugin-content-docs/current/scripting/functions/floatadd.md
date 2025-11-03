---
title: floatadd
sidebar_label: floatadd
description: Adds two floats together.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Adds two floats together. This function is redundant as the standard operator (+) does the same thing.

| Name          | Description   |
| ------------- | ------------- |
| Float:Number1 | First float.  |
| Float:Number2 | Second float. |

## ส่งคืน

The sum of the two given floats.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    new Float:Number1 = 2, Float:Number2 = 3; //Declares two floats, Number1 (2) and Number2 (3)
    new Float:Sum;
    Sum = floatadd(Number1, Number2);       //Saves the Sum(=2+3 = 5) of Number1 and Number2 in the float "Sum"
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [floatsub](floatsub): Subtracts two floats.
- [floatmul](floatmul): Multiplies two floats.
- [floatdiv](floatdiv): Divides a float by another.
