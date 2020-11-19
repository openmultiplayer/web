---
title: toupper
description: This function changes a single character to uppercase.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

This function changes a single character to uppercase.

| Name | Description                           |
| ---- | ------------------------------------- |
| c    | The character to change to uppercase. |

## ส่งคืน

The ASCII value of the character provided, but in uppercase.

## ตัวอย่าง

```c
public OnPlayerText(playerid, text[])
{
    text[0] = toupper(text[0]);
    //This sets the first character to upper case.
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [tolower](../functions/tolower.md)
