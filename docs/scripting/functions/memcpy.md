---
id: memcpy
title: memcpy
description: Copy bytes from one location to another.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Copy bytes from one location to another.

| Name                  | Description                                                                           |
| --------------------- | ------------------------------------------------------------------------------------- |
| dest[]                | An array into which the bytes from source are copied in.                              |
| const source[]        | The source array.                                                                     |
| index                 | The start index in bytes in the destination array where the data should be copied to. |
| numbytes              | The number of bytes (not cells) to copy.                                              |
| maxlength=sizeof dest | The maximum number of cells that fit in the destination buffer.                       |

## Returns

True on success, false on failure.

## Examples

```c
//Concatenate two strings with memcpy
new destination[64] = "This is ";
new source[] = "a string in a 32 Bit Array";
memcpy(destination, source, strlen(destination) * 4, sizeof source * 4, sizeof destination);
print(destination);
//Output: This is a string in a 32 Bit Array
```

## Related Functions

- [strcmp](strcmp.md): Compare two strings to see if they are the same.
- [strfind](strfind.md): Search for a substring in a string.
- [strtok](strtok.md): Search for a variable typed after a space.
- [strdel](strdel.md): Delete part/all of a string.
- [strins](strins.md): Put a string into another string.
- [strlen](strlen.md): Check the length of a string.
- [strmid](strmid.md): Extract characters from a string.
- [strpack](strpack.md): Pack a string into a destination.
- [strval](strval.md): Find the value of a string.
- [strcat](strcat.md): Concatenate two strings.
