---
title: getarg
description: Get an argument that was passed to a function.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Get an argument that was passed to a function.

| Name  | Description                                             |
| ----- | ------------------------------------------------------- |
| arg   | The argument sequence number. Use 0 for first argument. |
| index | The index (in case the argument is an array).           |

## ส่งคืน

The value of the argument.

## ตัวอย่าง

```c
SomeFunc(...)
{
    printf("%i", getarg(3));
}

public OnFilterScriptInit()
{
    SomeFunc(1, 3, 3, 7);
}

// Output: 7. The fourth argument (index 3) is 7.
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [numargs](../functions/numargs): Return the number of arguments.
- [setarg](../functions/setarg): Set an argument.
