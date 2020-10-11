---
id: strval
title: strval
description: Convert a string to an integer.
tags: []
---

import T from '../../../src/components/templates.js'

<T.LowercaseNote />

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

- [strcmp](strcmp.md): Compare two strings to see if they are the same.
- [strfind](strfind.md): Search for a substring in a string.
- [strtok](strtok.md): Search for a variable typed after a space.
- [strdel](strdel.md): Delete part/all of a string.
- [strins](strins.md): Put a string into another string.
- [strlen](strlen.md): Check the length of a string.
- [strmid](strmid.md): Extract characters from a string.
- [strpack](strpack.md): Pack a string into a destination.
- [strcat](strcat.md): Concatenate two strings into a destination reference.
