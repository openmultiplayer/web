---
title: floatfract
description: Get the fractional part of a float.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Get the fractional part of a float. This means the value of the numbers after the decimal point.

| Name  | Description                              |
| ----- | ---------------------------------------- |
| value | The float to get the fractional part of. |

## ส่งคืน

The fractional part of the float, as a float value.

## ตัวอย่าง

```c
new Float:fFract = floatfract(3.14159); // returns 0.14159
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [floatround](floatround): Convert a float to an integer (rounding).
