---
title: memcpy
description: Copy bytes from one location to another.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Copy bytes from one location to another.

| Name                  | Description                                                                           |
| --------------------- | ------------------------------------------------------------------------------------- |
| dest[]                | An array into which the bytes from source are copied in.                              |
| const source[]        | The source array.                                                                     |
| index                 | The start index in bytes in the destination array where the data should be copied to. |
| numbytes              | The number of bytes (not cells) to copy.                                              |
| maxlength=sizeof dest | The maximum number of cells that fit in the destination buffer.                       |

## ส่งคืน

True on success, false on failure.

## ตัวอย่าง

```c
//Concatenate two strings with memcpy
new destination[64] = "This is ";
new source[] = "a string in a 32 Bit Array";
memcpy(destination, source, strlen(destination) * 4, sizeof source * 4, sizeof destination);
print(destination);
//Output: This is a string in a 32 Bit Array
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [strcmp](../functions/strcmp.md): Compare two strings to see if they are the same.
- [strfind](../functions/strfind.md): Search for a substring in a string.
- [strdel](../functions/strdel.md): Delete part/all of a string.
- [strins](../functions/strins.md): Put a string into another string.
- [strlen](../functions/strlen.md): Check the length of a string.
- [strmid](../functions/strmid.md): Extract characters from a string.
- [strpack](../functions/strpack.md): Pack a string into a destination.
- [strval](../functions/strval.md): Find the value of a string.
- [strcat](../functions/strcat.md): Concatenate two strings.
