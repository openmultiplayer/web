---
title: SetSVarString
sidebar_label: SetSVarString
description: Set a string server variable.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

:::

## คำอธิบาย

Set a string server variable.

| Name           | Description                      |
| -------------- | -------------------------------- |
| varname[]      | The name of the server variable. |
| string_value[] | The string to be set.            |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The variable name is null or over 40 characters.

## ตัวอย่าง

```c
// set "Version"
SetSVarString("Version", "0.3.7");
// will print version that server has
new string[5 + 1];
GetSVarString("Version", string, sizeof(string));
printf("Version: %s", string);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetSVarInt: Set an integer for a server variable.
- GetSVarInt: Get a player server as an integer.
- GetSVarString: Get the previously set string from a server variable.
- SetSVarFloat: Set a float for a server variable.
- GetSVarFloat: Get the previously set float from a server variable.
- DeleteSVar: Delete a server variable.
