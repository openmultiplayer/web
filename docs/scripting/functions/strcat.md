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

- [strcmp](../functions/strcmp): Compare two strings to check if they are the same.
- [strfind](../functions/strfind): Search for a string in another string.
- [strtok](../functions/strtok): Get the next 'token' (word/parameter) in a string.
- [strdel](../functions/strdel): Delete part of a string.
- [strins](../function/strins): Insert text into a string.
- [strlen](../function/strlen): Get the length of a string.
- [strmid](../functions/strmid): Extract part of a string into another string.
- [strpack](../functions/strpack): Pack a string into a destination string.
- [strval](../functions/strval): Convert a string into an integer.
