---
title: strcmp
sidebar_label: strcmp
description: Compares two strings to see if they are the same.
tags: ["string"]
---

<LowercaseNote />

## Description

Compares two strings to see if they are the same.

| Name                         | Description                                                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| const string1[]              | The first string to compare.                                                                                                                |
| const string2[]              | The second string to compare.                                                                                                               |
| bool:ignorecase _(optional)_ | When set to **true**, the case doesn't matter - HeLLo is the same as Hello. When **false**, they're not the same.                           |
| length _(optional)_          | When this length is set, the first x chars will be compared - doing "Hello" and "Hell No" with a length of 4 will say it's the same string. |

## Returns

**0** if strings match each other on given length.

**1** or **-1** if some character do not match: `string1[i] - string2[i]` ('`i`' represents character index starting from 0)

**difference in number of characters** if one string matches only part of another string.

## Examples

```c
new string1[] = "Hello World";
new string2[] = "Hello World";

// Check if the strings are the same
if (!strcmp(string1, string2))

new string3[] = "Hell";

// Check if the first 4 characters match
if (!strcmp(string2, string3, false, 4))

// Check for null strings with isnull()
if (!strcmp(string1, string2) && !isnull(string1) && !isnull(string2))

// Definition for isnull():
#if !defined isnull
    #define isnull(%1) ((!(%1[0])) || (((%1[0]) == '\1') && (!(%1[1]))))
#endif
```

## Notes

:::warning

- This function returns **0** if either string is empty. Check for null strings with `isnull()`.

- If you compare strings from a text file, you should take in to account the 'carriage return' and 'new line' special characters (`\r` `\n`), as they are included, when using [fread](fread).

:::

## Related Functions

- [strfind](strfind): Search for a string in another string.
- [strequal](strequal): Compares two strings to see if they are the same.
- [strdel](strdel): Delete part of a string.
- [strins](strins): Insert text into a string.
- [strlen](strlen): Get the length of a string.
- [strmid](strmid): Extract part of a string into another string.
- [strpack](strpack): Pack a string into a destination string.
- [strval](strval): Convert a string into an integer.
- [strcat](strcat): Concatenate two strings into a destination reference.

## Tutorials

- [String Manipulation](../../tutorials/stringmanipulation)
