---
title: uudecode
description: Decode an UU-encoded string.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Decode an UU-encoded string.

| Name           | Description                                   |
| -------------- | --------------------------------------------- |
| dest[]         | The destination for the decoded string array. |
| const source[] | The UU-encoded source string.                 |
| maxlength      | The maximum length of dest that can be used.  |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
uudecode(normalString, encodedString);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน
