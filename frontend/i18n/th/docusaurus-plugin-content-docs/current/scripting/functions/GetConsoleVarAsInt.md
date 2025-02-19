---
title: GetConsoleVarAsInt
sidebar_label: GetConsoleVarAsInt
description: Get the integer value of a console variable.
tags: []
---

## คำอธิบาย

Get the integer value of a console variable.

| Name            | Description                                           |
| --------------- | ----------------------------------------------------- |
| const varname[] | The name of the integer variable to get the value of. |

## ส่งคืน

The value of the specified console variable. 0 if the specified console variable is not an integer or doesn't exist.

## ตัวอย่าง

```c
new serverPort = GetConsoleVarAsInt("port");
printf("Server Port: %i", serverPort);
```

## บันทึก

:::tip

Type 'varlist' in the server console to display a list of available console variables and their types.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetConsoleVarAsString](../functions/GetConsoleVarAsString): Retreive a server variable as a string.
- [GetConsoleVarAsBool](../functions/GetConsoleVarAsBool): Retreive a server variable as a boolean.
