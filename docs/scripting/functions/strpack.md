---
id: strpack
title: strpack
description: Pack a string.
tags: []
---

<TagLinks />

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

- strcmp: Compare two strings to see if they are the same.
- strfind: Search for a substring in a string.
- strtok: Search for a variable typed after a space.
- strdel: Delete part/all of a string.
- strins: Put a string into another string.
- strlen: Check the length of a string.
- strmid: Extract characters from a string.
- strval: Find the value of a string.
- strcat: Contact two strings into a destination reference.
