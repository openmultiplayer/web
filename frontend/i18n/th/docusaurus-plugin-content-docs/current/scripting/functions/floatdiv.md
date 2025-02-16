---
title: floatdiv
sidebar_label: floatdiv
description: Divide one float by another one.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Divide one float by another one. Redundant as the division operator (/) does the same thing.

| Name           | Description                               |
| -------------- | ----------------------------------------- |
| Float:dividend | First float.                              |
| Float:divisor  | Second float (dividates the first float.) |

## ส่งคืน

The quotient of the two given floats.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    new Float:Number1 = 8.05, Float:Number2 = 3.5; //Declares two floats, Number1 (8.05) and Number2 (3.5)
    new Float:Quotient;
    Quotient = floatdiv(Number1, Number2);       //Saves the quotient(=8.05/3.5 = 2.3) of Number1 and Number2 in the float "Quotient"
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [floatadd](../functions/floatadd): Adds two floats together.
- [floatsub](../functions/floatsub): Subtract a float from another float.
- [floatmul](../functions/floatmul): Multiply two floats.
