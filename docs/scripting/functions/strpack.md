---
id: strpack
title: strpack
description: Pack a string.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Pack a string. Packed strings use 75% less memory.

| Name                    | Description                                                               |
| ----------------------- | ------------------------------------------------------------------------- |
| dest[]                  | The destination string to save the packed string in, passed by reference. |
| const source[]          | The source, original string.                                              |
| maxlength=sizeof string | The maximum size to insert.                                               |

## Returns

The number of characters packed.

## Examples

```c
new string[32 char];
strpack(string, "Hi, how are you?");
```

## Related Functions

- [strcmp](../functions/strcmp.md): Compare two strings to see if they are the same.
- [strfind](../functions/strfind.md): Search for a substring in a string.
- [strtok](../functions/strtok.md): Search for a variable typed after a space.
- [strdel](../functions/strdel.md): Delete part/all of a string.
- [strins](../functions/strins.md): Put a string into another string.
- [strlen](../functions/strlen.md): Check the length of a string.
- [strmid](../functions/strmid.md): Extract characters from a string.
- [strval](../functions/strval.md): Find the value of a string.
- [strcat](../functions/strcat.md): Contact two strings into a destination reference.
