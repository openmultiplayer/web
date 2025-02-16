---
title: SetSVarFloat
sidebar_label: SetSVarFloat
description: Set a float server variable.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

:::

## คำอธิบาย

Set a float server variable.

| Name        | Description                      |
| ----------- | -------------------------------- |
| varname[]   | The name of the server variable. |
| float_value | The float to be set.             |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The variable name is null or over 40 characters.

## ตัวอย่าง

```c
// set "Version"
SetSVarFloat("Version", 0.37);
// will print version that server has
printf("Version: %f", GetSVarFloat("Version"));
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetSVarInt: Set an integer for a server variable.
- GetSVarInt: Get a player server as an integer.
- SetSVarString: Set a string for a server variable.
- GetSVarString: Get the previously set string from a server variable.
- GetSVarFloat: Get the previously set float from a server variable.
- DeleteSVar: Delete a server variable.
