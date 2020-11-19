---
title: floatpower
description: Raises the given value to the power of the exponent.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Raises the given value to the power of the exponent.

| Name     | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| value    | The value to raise to a power, as a floating-point number.                |
| exponent | The exponent is also a floating-point number. It may be zero or negative. |

## ส่งคืน

The result of 'value' to the power of 'exponent'.

## ตัวอย่าง

```c
printf("2 to the power of 8 is %f", floatpower(2.0, 8.0));
// Result: 256.0
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [floatsqroot](../functions/floatsqroot): Calculate the square root of a floating point value.
- [floatlog](../functions/floatlog): Get the logarithm of the float value.
