---
title: floatlog
sidebar_label: floatlog
description: This function allows you to get the logarithm of a float value.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

This function allows you to get the logarithm of a float value.

| Name        | Description                              |
| ----------- | ---------------------------------------- |
| Float:value | The value of which to get the logarithm. |
| Float:base  | The logarithm base.                      |

## ส่งคืน

The logarithm as a float value.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    printf("The logarithm of 15.0 with the base 10.0 is %f", floatlog( 15.0, 10.0 ));
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [floatsqroot](../functions/floatsqroot): Calculate the square root of a floating point value.
- [floatpower](../functions/floatpower): Raises given value to a power of exponent.
