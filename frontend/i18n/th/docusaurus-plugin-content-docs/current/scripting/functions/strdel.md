---
title: strdel
sidebar_label: strdel
description: Delete part of a string.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Delete part of a string.

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| string[] | The string to delete part of.                  |
| start    | The position of the first character to delete. |
| end      | The position of the last character to delete.  |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new string[42] = "We will delete everything apart from this";
strdel(string, 0, 37); // string is now "this"
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- strcmp: Compare two strings to check if they are the same.
- strfind: Search for a string in another string.
- strtok: Get the next 'token' (word/parameter) in a string.
- strins: Insert text into a string.
- strlen: Get the length of a string.
- strmid: Extract part of a string into another string.
- strpack: Pack a string into a destination string.
- strval: Convert a string into an integer.
- strcat: Concatenate two strings into a destination reference.
