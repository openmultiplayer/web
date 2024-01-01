---
title: floatsub
description: Subtracts one float from another one.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Subtracts one float from another one. Note that this function has no real use, as one can simply use the standard operator (-) instead.

| Name  | Description                                          |
| ----- | ---------------------------------------------------- |
| oper1 | First Float.                                         |
| oper2 | Second Float (gets subtracted from the first float.) |

## ส่งคืน

The difference of the two given floats.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    new Float:Number1 = 5, Float:Number2 = 2; //Declares two floats, Number1 (5) and Number2 (2)
    new Float:Difference;
    Difference = floatsub(Number1, Number2);//Saves the Difference(5-2 = 3) of Number1 and Number2 in the float "Difference"
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [floatadd](floatadd): Adds two floats.
- [floatmul](floatmul): Multiplies two floats.
- [floatdiv](floatdiv): Divides a float by another.
