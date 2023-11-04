---
title: floatsqroot
description: Calculates the square root of given value.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Calculates the square root of given value.

| Name  | Description                                |
| ----- | ------------------------------------------ |
| value | The value to calculate the square root of. |

## ส่งคืน

The square root of the input value, as a float.

## ตัวอย่าง

```c
floatsqroot(25.0); // Returns 5, because 5x5 = 25
```

## บันทึก

:::tip

This function raises a “domain” error if the input value is negative. You may use floatabs to get the absolute (positive) value.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [floatpower](floatpower): Raises given value to a power of exponent.
- [floatlog](floatlog): Get the logarithm of the float value.
