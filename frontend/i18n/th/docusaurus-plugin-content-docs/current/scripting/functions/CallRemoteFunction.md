---
title: CallRemoteFunction
description: Calls a public function in any script that is loaded.
tags: []
---

## คำอธิบาย

Calls a public function in any script that is loaded.

| Name           | Description                                 |
| -------------- | ------------------------------------------- |
| function[]     | Public function's name.                     |
| format[]       | Tag/format of each variable                 |
\ \{Float, _}:... | 'Indefinite' number of arguments of any tag |

## ส่งคืน

The value that the last public function returned.

## ตัวอย่าง

```c
forward CallMe(number, const string[]);
public CallMe(number, const string[])
{
    printf("CallMe called. Int: %i  String: %s.", number, string);
    return 1;
}

// Somewhere... in another file perhaps?
CallRemoteFunction("CallMe", "is", 69, "this is a string");
```

## บันทึก

:::warning

CallRemoteFunction crashes the server if it's passing an empty string.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CallLocalFunction](../../scripting/functions/CallLocalFunction.md): Call a function in the script.
