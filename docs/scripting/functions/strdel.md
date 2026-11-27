---
title: "strdel | open.mp"
description: "Delete part of a string."
canonical: https://open.mp/docs/scripting/functions/strdel
language: en
---

# strdel

## Description

Delete part of a string.

| Name | Description |
| --- | --- |
| string\[\] | The string to delete part of. |
| start | The position of the first character to delete. |
| end | The position of the last character to delete. |

## Returns

This function does not return any specific values.

## Examples

```c
new string[42] = "We will delete everything apart from this";
strdel(string, 0, 37); // string is now "this"
```

## Related Functions

-   [strcmp](https://open.mp/docs/scripting/functions/strcmp): Compare two strings to check if they are the same.
-   [strfind](https://open.mp/docs/scripting/functions/strfind): Search for a string in another string.
-   [strins](https://open.mp/docs/scripting/functions/strins): Insert text into a string.
-   [strlen](https://open.mp/docs/scripting/functions/strlen): Get the length of a string.
-   [strmid](https://open.mp/docs/scripting/functions/strmid): Extract part of a string into another string.
-   [strpack](https://open.mp/docs/scripting/functions/strpack): Pack a string into a destination string.
-   [strval](https://open.mp/docs/scripting/functions/strval): Convert a string into an integer.
-   [strcat](https://open.mp/docs/scripting/functions/strcat): Concatenate two strings into a destination reference.
