---
title: tolower
description: This function changes a single character to lowercase.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

This function changes a single character to lowercase.

| Name | Description                           |
| ---- | ------------------------------------- |
| c    | The character to change to lowercase. |

## ส่งคืน

The ASCII value of the character provided as lowercase.

## ตัวอย่าง

```c
public OnPlayerText(playerid, text[])
{
    text[0] = tolower(text[0]);
    //This sets the first character to lowercase.
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [toupper](../functions/toupper.md)
