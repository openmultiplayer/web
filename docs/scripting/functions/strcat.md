---
title: strcat
description: This function concatenates (joins together) two strings into the destination string.
tags: []
---

import T from '../../../src/components/templates.js'

<T.LowercaseNote />

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

- [strcmp](strcmp.md): Compare two strings to check if they are the same.
- [strfind](strfind.md): Search for a string in another string.
- [strdel](strdel.md): Delete part of a string.
- [strins](strins.md): Insert text into a string.
- [strlen](strlen.md): Get the length of a string.
- [strmid](strmid.md): Extract part of a string into another string.
- [strpack](strpack.md): Pack a string into a destination string.
- [strval](strval.md): Convert a string into an integer.
