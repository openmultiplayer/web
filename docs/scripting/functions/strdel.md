---
id: strdel
title: strdel
description: Delete part of a string.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Delete part of a string.

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| string[] | The string to delete part of.                  |
| start    | The position of the first character to delete. |
| end      | The position of the last character to delete.  |

## Returns

This function does not return any specific values.

## Examples

```c
new string[42] = "We will delete everything apart from this";
strdel(string, 0, 37); // string is now "this"
```

## Related Functions

- [strcmp](../functions/strcmp): Compare two strings to check if they are the same.
- [strfind](../functions/strfind): Search for a string in another string.
- [strtok](../functions/strtok): Get the next 'token' (word/parameter) in a string.
- [strins](../function/strins): Insert text into a string.
- [strlen](../function/strlen): Get the length of a string.
- [strmid](../functions/strmid): Extract part of a string into another string.
- [strpack](../functions/strpack): Pack a string into a destination string.
- [strval](../functions/strval): Convert a string into an integer.
- [strcat](../functions/strcat): Concatenate two strings into a destination reference.
