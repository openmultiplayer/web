---
title: strunpack
sidebar_label: strunpack
description: This function can be used to unpack a string.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

This function can be used to unpack a string.

| Name                    | Description                                                                 |
| ----------------------- | --------------------------------------------------------------------------- |
| dest[]                  | The destination string to save the unpacked string in, passed by reference. |
| const source[]          | The source, original packed string.                                         |
| maxlength=sizeof string | The maximum size to insert.                                                 |

## ส่งคืน

The number of characters packed.

## ตัวอย่าง

```c
new string[17];
new pstring[17 char] = !"Hi, how are you?";
strunpack(string, pstring);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- ispacked: Check if the given string is packed.
- strpack: This function can be used to pack a string.
- strcmp: Compare two strings to see if they are the same.
- strfind: Search for a substring in a string.
- strtok: Search for a variable typed after a space.
- strdel: Delete part/all of a string.
- strins: Put a string into another string.
- strlen: Check the length of a string.
- strmid: Extract characters from a string.
- strval: Find the value of a string.
- strcat: Contact two strings into a destination reference.
