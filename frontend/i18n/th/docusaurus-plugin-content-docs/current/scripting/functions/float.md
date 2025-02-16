---
title: float
description: Converts an integer into a float.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Converts an integer into a float.

| Name  | Description                         |
| ----- | ----------------------------------- |
| value | Integer value to convert to a float |

## ส่งคืน

The given integer as a float

## ตัวอย่าง

```c
new Float:FloatValue;
new Value = 52;
FloatValue = float(Value);   // Converts Value(52) into a float and stores it in 'FloatValue' (52.0)
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [floatround](../functions/floatround): Convert a float to an integer (rounding).
- [floatstr](../functions/floatstr): Convert an string to a float.
