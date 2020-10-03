---
id: strmid
title: strmid
description: Extract a range of characters from a string.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Extract a range of characters from a string.

| Name                  | Description                                                          |
| --------------------- | -------------------------------------------------------------------- |
| dest[]                | The string to store the extracted characters in.                     |
| const source[]        | The string from which to extract characters.                         |
| start                 | The position of the first character.                                 |
| end                   | The position of the last character.                                  |
| maxlength=sizeof dest | The length of the destination. (Will be the size of dest by default) |

## Returns

The number of characters stored in dest[]

## Examples

```c
strmid(string, "Extract 'HELLO' without the !!!!: HELLO!!!!", 34, 39); //string contains "HELLO"
```

## Related Functions

- [strcmp](../functions/strcmp.md): Compare two strings to check if they are the same.
- [strfind](../functions/strfind.md): Search for a string in another string.
- [strtok](../functions/strtok.md): Get the next 'token' (word/parameter) in a string.
- [strdel](../functions/strdel.md): Delete part of a string.
- [strins](../functions/strins.md): Insert text into a string.
- [strlen](../functions/strlen.md): Get the length of a string.
- [strpack](../functions/strpack.md): Pack a string into a destination string.
- [strval](../functions/strval.md): Convert a string into an integer.
- [strcat](../functions/strcat.md): Concatenate two strings into a destination reference.
