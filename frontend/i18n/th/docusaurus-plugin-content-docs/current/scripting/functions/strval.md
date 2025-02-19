---
title: strval
sidebar_label: strval
description: Convert a string to an integer.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Convert a string to an integer.

| Name           | Description                                   |
| -------------- | --------------------------------------------- |
| const string[] | The string you want to convert to an integer. |

## ส่งคืน

The integer value of the string. '0 if the string is not numeric.

## ตัวอย่าง

```c
new string[4] = "250";
new iValue = strval(string); // iValue is now '250'
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- strcmp: Compare two strings to see if they are the same.
- strfind: Search for a substring in a string.
- strtok: Search for a variable typed after a space.
- strdel: Delete part/all of a string.
- strins: Put a string into another string.
- strlen: Check the length of a string.
- strmid: Extract characters from a string.
- strpack: Pack a string into a destination.
- strcat: Concatenate two strings into a destination reference.
