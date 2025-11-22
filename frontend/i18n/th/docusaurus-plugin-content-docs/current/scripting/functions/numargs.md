---
title: numargs
sidebar_label: numargs
description: Get the number of arguments passed to a function.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Get the number of arguments passed to a function.

| Name | Description |
| ---- | ----------- |


## ตัวอย่าง

```c
SomeFunction(...)
{
    printf("numargs(): %i", numargs());
}

public OnFilterScriptInit()
{
    SomeFunction(1, 2, 3);
}

// Output: "numargs(): 3"
// Because 3 parameters (1, 2, 3) were passed.
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [getarg](getarg): Retrieve an argument from a variable argument list.
- [setarg](setarg): Set an argument.
