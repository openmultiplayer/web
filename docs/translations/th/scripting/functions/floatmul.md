---
title: floatmul
description: Multiplies two floats with each other.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Multiplies two floats with each other.

| Name  | Description                                       |
| ----- | ------------------------------------------------- |
| oper1 | First Float.                                      |
| oper2 | Second Float, the first one gets multiplied with. |

## ส่งคืน

The product of the two given floats

## ตัวอย่าง

```c
public OnGameModeInit()
{
    new Float:Number1 = 2.3, Float:Number2 = 3.5; //Declares two floats, Number1 (2.3) and Number2 (3.5)
    new Float:Product;
    Product = floatmul(Number1, Number2);       //Saves the product(=2.3*3.5 = 8.05) of Number1 and Number2 in the float "Product"
    return 1;
}
```

## บันทึก

:::tip

This function is rather redundant, for it is no different than the conventional multiplication operator (\*).

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [Floatadd](../functions/Floatadd): Adds two floats.
- [Floatsub](../functions/Floatsub): Subtracts two floats.
- [Floatdiv](../functions/Floatdiv): Divides a float by another.
