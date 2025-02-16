---
title: strcat
sidebar_label: strcat
description: This function concatenates (joins together) two strings into the destination string.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

This function concatenates (joins together) two strings into the destination string.

| Name                  | Description                                          |
| --------------------- | ---------------------------------------------------- |
| dest[]                | The string to store the two concatenated strings in. |
| const source[]        | The source string.                                   |
| maxlength=sizeof dest | The maximum length of the destination.               |

## ส่งคืน

The length of the new destination string.

## ตัวอย่าง

```c
new string[40] = "Hello";
strcat(string, " World!");

// The string is now 'Hello World!'
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- strcmp: Compare two strings to check if they are the same.
- strfind: Search for a string in another string.
- strtok: Get the next 'token' (word/parameter) in a string.
- strdel: Delete part of a string.
- strins: Insert text into a string.
- strlen: Get the length of a string.
- strmid: Extract part of a string into another string.
- strpack: Pack a string into a destination string.
- strval: Convert a string into an integer.
