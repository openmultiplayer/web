---
title: strmid
description: Extract a range of characters from a string.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Extract a range of characters from a string.

| Name                  | Description                                                          |
| --------------------- | -------------------------------------------------------------------- |
| dest[]                | The string to store the extracted characters in.                     |
| const source[]        | The string from which to extract characters.                         |
| start                 | The position of the first character.                                 |
| end                   | The position of the last character.                                  |
| maxlength=sizeof dest | The length of the destination. (Will be the size of dest by default) |

## ส่งคืน

The number of characters stored in dest[]

## ตัวอย่าง

```c
strmid(string, "Extract 'HELLO' without the !!!!: HELLO!!!!", 34, 39); //string contains "HELLO"
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- strcmp: Compare two strings to check if they are the same.
- strfind: Search for a string in another string.
- strtok: Get the next 'token' (word/parameter) in a string.
- strdel: Delete part of a string.
- strins: Insert text into a string.
- strlen: Get the length of a string.
- strpack: Pack a string into a destination string.
- strval: Convert a string into an integer.
- strcat: Concatenate two strings into a destination reference.
