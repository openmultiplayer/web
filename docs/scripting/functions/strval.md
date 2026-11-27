---
title: "strval | open.mp"
description: "Convert a string to an integer."
canonical: https://open.mp/docs/scripting/functions/strval
language: en
---

# strval

## Description

Convert a string to an integer.

| Name | Description |
| --- | --- |
| const string\[\] | The string you want to convert to an integer. |

## Returns

The integer value of the string. **0** if the string is not numeric.

## Examples

```c
new string[4] = "250";
new iValue = strval(string); // iValue is now '250'
```

## Related Functions

-   [strcmp](https://open.mp/docs/scripting/functions/strcmp): Compare two strings to see if they are the same.
-   [strfind](https://open.mp/docs/scripting/functions/strfind): Search for a substring in a string.
-   [strdel](https://open.mp/docs/scripting/functions/strdel): Delete part/all of a string.
-   [strins](https://open.mp/docs/scripting/functions/strins): Put a string into another string.
-   [strlen](https://open.mp/docs/scripting/functions/strlen): Check the length of a string.
-   [strmid](https://open.mp/docs/scripting/functions/strmid): Extract characters from a string.
-   [strpack](https://open.mp/docs/scripting/functions/strpack): Pack a string into a destination.
-   [strcat](https://open.mp/docs/scripting/functions/strcat): Concatenate two strings into a destination reference.
