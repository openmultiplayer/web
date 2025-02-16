---
title: uuencode
sidebar_label: uuencode
description: Encode a string to an UU-decoded string.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Encode a string to an UU-decoded string.

| Name           | Description                                               |
| -------------- | --------------------------------------------------------- |
| dest[]         | The destination string for the encoded stream.            |
| const source[] | The source, non-encoded string.                           |
| numbytes       | The number of bytes to encode, this should not exceed 45. |
| maxlength      | The maximum length of the dest[] array.                   |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
uuencode(encodedString, normalString, 45);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- Uudecode: Decode an UU-encoded stream.
- Memcpy: Copy bytes from one location to another.
