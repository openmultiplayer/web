---
title: "strlen | open.mp"
description: "Get the length of a string."
canonical: https://open.mp/docs/scripting/functions/strlen
language: en
---

# strlen

## Description

Get the length of a string.

| Name | Description |
| --- | --- |
| const string\[\] | The string to get the length of. |

## Returns

The length of the string as an integer.

## Examples

```c
new stringLength = strlen("This is an example string."); // stringLength is now set to 26
```

## Related Functions

-   [strcmp](https://open.mp/docs/scripting/functions/strcmp): Compare two strings to check if they are the same.
-   [strfind](https://open.mp/docs/scripting/functions/strfind): Search for a string in another string.
-   [strins](https://open.mp/docs/scripting/functions/strins): Insert text into a string.
-   [strmid](https://open.mp/docs/scripting/functions/strmid): Extract part of a string into another string.
-   [strpack](https://open.mp/docs/scripting/functions/strpack): Pack a string into a destination string.
-   [strval](https://open.mp/docs/scripting/functions/strval): Convert a string into an integer.
-   [strcat](https://open.mp/docs/scripting/functions/strcat): Concatenate two strings into a destination reference.
-   [strdel](https://open.mp/docs/scripting/functions/strdel): Delete part of a string.
