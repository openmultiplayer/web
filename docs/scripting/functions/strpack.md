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

- [strcmp](../functions/strcmp): Compare two strings to check if they are the same.
- [strfind](../functions/strfind): Search for a string in another string.
- [strtok](../functions/strtok): Get the next 'token' (word/parameter) in a string.
- [strins](../function/strins): Insert text into a string.
- [strlen](../function/strlen): Get the length of a string.
- [strmid](../functions/strmid): Extract part of a string into another string.
- [strval](../functions/strval): Convert a string into an integer.
- [strcat](../functions/strcat): Concatenate two strings into a destination reference.
- [strdel](../functions/strdel): Delete part of a string.