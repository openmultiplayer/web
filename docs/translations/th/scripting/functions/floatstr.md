---
title: floatstr
description: Converts a string to a float.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Converts a string to a float.

| Name   | Description                         |
| ------ | ----------------------------------- |
| string | The string to convert into a float. |

## ส่งคืน

The requested float value.

## ตัวอย่าง

```c
new before[4] = "6.9"; // A STRING holding a FLOAT.
SetPlayerPos(playerid, 0, 0, floatstr(before));
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [floatround](floatround): Convert a float to an integer (rounding).
- [float](float): Convert an integer to a float.
