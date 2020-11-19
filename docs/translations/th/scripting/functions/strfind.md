---
title: strfind
description: Search for a sub string in a string.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Search for a sub string in a string.

| Name                  | Description                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------- |
| const string[]        | The string you want to search in (haystack).                                                              |
| const sub[]           | The string you want to search for (needle).                                                               |
| ignorecase (optional) | When set to true, the case doesn't matter - HeLLo is the same as Hello. When false, they're not the same. |
| Position (optional)   | The offset to start searching from.                                                                       |

## ส่งคืน

The number of characters before the sub string (the sub string's start position) or -1 if it's not found.

## ตัวอย่าง

```c
if (strfind("Are you in here?", "you", true) != -1) //returns 4, because the start of 'you' (y) is at index 4 in the string
{
    SendClientMessageToAll(0xFFFFFFFF, "I found you!");
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- strcmp: Compare two strings to check if they are the same.
- strtok: Get the next 'token' (word/parameter) in a string.
- strdel: Delete part of a string.
- strins: Insert text into a string.
- strlen: Get the length of a string.
- strmid: Extract part of a string into another string.
- strpack: Pack a string into a destination string.
- strval: Convert a string into an integer.
- strcat: Concatenate two strings into a destination reference.
