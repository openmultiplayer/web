---
title: "strmid | open.mp"
description: "Extract a range of characters from a string."
canonical: https://open.mp/docs/scripting/functions/strmid
language: en
---

# strmid

## Description

Extract a range of characters from a string.

| Name | Description |
| --- | --- |
| dest\[\] | The string to store the extracted characters in. |
| const source\[\] | The string from which to extract characters. |
| start | The position of the first character. |
| end | The position of the last character. |
| maxlength = sizeof (dest) | The length of the destination. (Will be the size of dest by default) |

## Returns

The number of characters stored in `dest[]`

## Examples

```c
new string[6];
strmid(string, "Extract 'HELLO' without the !!!!: HELLO!!!!", 34, 39); // string contains "HELLO"
```

## Related Functions

-   [strcmp](https://open.mp/docs/scripting/functions/strcmp): Compare two strings to check if they are the same.
-   [strfind](https://open.mp/docs/scripting/functions/strfind): Search for a string in another string.
-   [strins](https://open.mp/docs/scripting/functions/strins): Insert text into a string.
-   [strlen](https://open.mp/docs/scripting/functions/strlen): Get the length of a string.
-   [strpack](https://open.mp/docs/scripting/functions/strpack): Pack a string into a destination string.
-   [strval](https://open.mp/docs/scripting/functions/strval): Convert a string into an integer.
-   [strcat](https://open.mp/docs/scripting/functions/strcat): Concatenate two strings into a destination reference.
-   [strdel](https://open.mp/docs/scripting/functions/strdel): Delete part of a string.
