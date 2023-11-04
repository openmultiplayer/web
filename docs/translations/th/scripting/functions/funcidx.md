---
title: funcidx
description: This function returns the ID of a public function by its name.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

This function returns the ID of a public function by its name.

| Name         | Description                                       |
| ------------ | ------------------------------------------------- |
| const name[] | The name of the public function to get the ID of. |

## ส่งคืน

The ID of the function (IDs start at 0). -1 if the function doesn't exist.

## ตัวอย่าง

```c
public OnFilterScriptInit()
{
    printf("ID of OnFilterScriptInit: %d", funcidx("OnFilterScriptInit"));
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CallLocalFunction](CallLocalFunction): Call a function in the script.
- [CallRemoteFunction](CallRemoteFunction): Call a function in any loaded script.
