---
title: GetSVarString
description: Gets a string server variable's value.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

:::

## คำอธิบาย

Gets a string server variable's value.

| Name          | Description                                                                    |
| ------------- | ------------------------------------------------------------------------------ |
| varname       | The name of the server variable (case-insensitive). Assigned in SetSVarString. |
| string_return | The array in which to store the string value in, passed by reference.          |
| len           | The maximum length of the returned string.                                     |

## ส่งคืน

The length of the string.

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
- SetSVarString: Set a string for a server variable.
- SetSVarFloat: Set a float for a server variable.
- GetSVarFloat: Get the previously set float from a server variable.
- DeleteSVar: Delete a server variable.
