---
title: SetSVarInt
description: Set an integer server variable.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

:::

## คำอธิบาย

Set an integer server variable.

| Name      | Description                      |
| --------- | -------------------------------- |
| varname[] | The name of the server variable. |
| int_value | The integer to be set.           |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The variable name is null or over 40 characters.

## ตัวอย่าง

```c
// set "Version"
SetSVarInt("Version", 37);
// will print version that server has
printf("Version: %d", GetSVarInt("Version"));
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetSVarInt: Get a player server as an integer.
- SetSVarString: Set a string for a server variable.
- GetSVarString: Get the previously set string from a server variable.
- SetSVarFloat: Set a float for a server variable.
- GetSVarFloat: Get the previously set float from a server variable.
- DeleteSVar: Delete a server variable.
