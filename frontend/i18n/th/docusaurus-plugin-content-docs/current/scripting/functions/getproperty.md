---
title: getproperty
sidebar_label: getproperty
description: Get a specific property from the memory, the string is returned as a packed string!.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Get a specific property from the memory, the string is returned as a packed string!

| Name     | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
| id       | The virtual machine to use, you should keep this zero.                         |
| name[]   | The property's name, you should keep this "".                                  |
| value    | The property's unique ID, Use the hash-function to calculate it from a string. |
| string[] | The variable to store the result in, passed by reference.                      |

## ส่งคืน

The value of a property when the name is passed in; fills in the string argument when the value is passed in. If the property does not exist, this function returns zero.

## ตัวอย่าง

```c
new value[16];

getproperty(0, "", 123984334, value);

strunpack(value, value, sizeof(value));

print(value);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- setproperty: Set a property.
- deleteproperty: Delete a property.
- existproperty: Check if a property exists.
