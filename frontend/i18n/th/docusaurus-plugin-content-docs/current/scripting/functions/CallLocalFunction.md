---
title: CallLocalFunction
sidebar_label: CallLocalFunction
description: Calls a public function from the script in which it is used.
tags: []
---

## คำอธิบาย

Calls a public function from the script in which it is used.

| Name           | Description                                 |
| -------------- | ------------------------------------------- |
| function[]     | Public function's name.                     |
| format[]       | Tag/format of each variable                 |
\ \{Float, _}:... | 'Indefinite' number of arguments of any tag |

## ส่งคืน

If the function exists, returns the same as the called function. If the function does not exist, returns 0.

## ตัวอย่าง

```c
forward publicFunc(number, Float:flt, const string[]);
public publicFunc(number, Float:flt, const string[])
{
    printf("Received integer %i, float %f, string %s", number, flt, string);
    return 1;
}

CallLocalFunction("publicFunc", "ifs", 420, 68.999999999, "Hello world");
```

## บันทึก

:::warning

CallLocalFunction crashes the server if it's passing an empty string.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CallRemoteFunction](CallRemoteFunction): Call a function in any loaded script.
