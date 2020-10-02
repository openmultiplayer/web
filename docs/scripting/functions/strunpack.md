---
id: strunpack
title: strunpack
description: This function can be used to unpack a string.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

This function can be used to unpack a string.

| Name                    | Description                                                                 |
| ----------------------- | --------------------------------------------------------------------------- |
| dest[]                  | The destination string to save the unpacked string in, passed by reference. |
| const source[]          | The source, original packed string.                                         |
| maxlength=sizeof string | The maximum size to insert.                                                 |

## Returns

The number of characters packed.

## Examples

```c
new string[17];
new pstring[17 char] = !"Hi, how are you?";
strunpack(string, pstring);
```

## Related Functions

- [ispacked](../functions/ispacked): Check if the given string is packed.
- [strpack](../functions/strpack): This function can be used to pack a string.
- [strcmp](../functions/strcmp): Compare two strings to check if they are the same.
- [strfind](../functions/strfind): Search for a string in another string.
- [strtok](../functions/strtok): Get the next 'token' (word/parameter) in a string.
- [strins](../function/strins): Insert text into a string.
- [strlen](../function/strlen): Get the length of a string.
- [strmid](../functions/strmid): Extract part of a string into another string.
- [strpack](../functions/strpack): Pack a string into a destination string.
- [strval](../functions/strval): Convert a string into an integer.
- [strcat](../functions/strcat): Concatenate two strings into a destination reference.
- [strdel](../functions/strdel): Delete part of a string.