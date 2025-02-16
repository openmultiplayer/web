---
title: GetSVarInt
sidebar_label: GetSVarInt
description: Gets an integer server variable's value.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

:::

## คำอธิบาย

Gets an integer server variable's value.

| Name    | Description                                                                 |
| ------- | --------------------------------------------------------------------------- |
| varname | The name of the server variable (case-insensitive). Assigned in SetSVarInt. |

## ส่งคืน

The integer value of the specified server variable. It will still return 0 if the variable is not set.

## ตัวอย่าง

```c
// set "Version"
SetSVarInt("Version", 37);
// will print version that server has
printf("Version: %d", GetSVarInt("Version"));
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetSVarInt: Set an integer for a server variable.
- SetSVarString: Set a string for a server variable.
- GetSVarString: Get the previously set string from a server variable.
- SetSVarFloat: Set a float for a server variable.
- GetSVarFloat: Get the previously set float from a server variable.
- DeleteSVar: Delete a server variable.
