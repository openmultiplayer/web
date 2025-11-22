---
title: existproperty
sidebar_label: existproperty
description: Check if a property exist.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Check if a property exist.

| Name   | Description                                                                    |
| ------ | ------------------------------------------------------------------------------ |
| id     | The virtual machine to use, you should keep this zero.                         |
| name[] | The property's name, you should keep this "".                                  |
| value  | The property's unique ID. Use the hash-function to calculate it from a string. |

## ส่งคืน

True if the property exists and false otherwise.

## ตัวอย่าง

```c
if ( existproperty(0, "", 123984334) )
{
    //the property exists, do something
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [setProperty](setProperty): Set a property.
- [getProperty](getProperty): Get the value of a property.
- [deleteProperty](deleteProperty): Delete a property.
