---
id: strval
title: strval
description: Convert a string to an integer.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Convert a string to an integer.

| Name           | Description                                   |
| -------------- | --------------------------------------------- |
| const string[] | The string you want to convert to an integer. |

## Returns

The integer value of the string. '0 if the string is not numeric.

## Examples

```c
new string[4] = "250";
new iValue = strval(string); // iValue is now '250'
```

## Related Functions

- [strcmp](../functions/strcmp.md): Compare two strings to see if they are the same.
- [strfind](../functions/strfind.md): Search for a substring in a string.
- [strtok](../functions/strtok.md): Search for a variable typed after a space.
- [strdel](../functions/strdel.md): Delete part/all of a string.
- [strins](../functions/strins.md): Put a string into another string.
- [strlen](../functions/strlen.md): Check the length of a string.
- [strmid](../functions/strmid.md): Extract characters from a string.
- [strpack](../functions/strpack.md): Pack a string into a destination.
- [strcat](../functions/strcat.md): Concatenate two strings into a destination reference.
