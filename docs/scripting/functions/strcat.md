---
id: strcat
title: strcat
description: This function concatenates (joins together) two strings into the destination string.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

This function concatenates (joins together) two strings into the destination string.

| Name                  | Description                                          |
| --------------------- | ---------------------------------------------------- |
| dest[]                | The string to store the two concatenated strings in. |
| const source[]        | The source string.                                   |
| maxlength=sizeof dest | The maximum length of the destination.               |

## Returns

The length of the new destination string.

## Examples

```c
new string[40] = "Hello";
strcat(string, " World!");

// The string is now 'Hello World!'
```

## Related Functions

- [strcmp](../functions/strcmp.md): Compare two strings to check if they are the same.
- [strfind](../functions/strfind.md): Search for a string in another string.
- [strtok](../functions/strtok.md): Get the next 'token' (word/parameter) in a string.
- [strdel](../functions/strdel.md): Delete part of a string.
- [strins](../functions/strins.md): Insert text into a string.
- [strlen](../functions/strlen.md): Get the length of a string.
- [strmid](../functions/strmid.md): Extract part of a string into another string.
- [strpack](../functions/strpack.md): Pack a string into a destination string.
- [strval](../functions/strval.md): Convert a string into an integer.
