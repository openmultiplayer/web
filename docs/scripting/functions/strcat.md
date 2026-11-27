---
title: "strcat | open.mp"
description: "This function concatenates (joins together) two strings into the destination string."
canonical: https://open.mp/docs/scripting/functions/strcat
language: en
---

# strcat

## Description

This function [concatenates](https://en.wikipedia.org/wiki/Concatenation) (joins together) two strings into the destination string.

| Name | Description |
| --- | --- |
| dest\[\] | The string to store the two concatenated strings in. |
| const source\[\] | The source string. |
| maxlength = sizeof (dest) | The maximum length of the destination. |

## Returns

The length of the new destination string.

## Examples

```c
new string[40] = "Hello";
strcat(string, " World!");

// The string is now 'Hello World!'
```

## Related Functions

-   [strcmp](https://open.mp/docs/scripting/functions/strcmp): Compare two strings to check if they are the same.
-   [strfind](https://open.mp/docs/scripting/functions/strfind): Search for a string in another string.
-   [strdel](https://open.mp/docs/scripting/functions/strdel): Delete part of a string.
-   [strins](https://open.mp/docs/scripting/functions/strins): Insert text into a string.
-   [strlen](https://open.mp/docs/scripting/functions/strlen): Get the length of a string.
-   [strmid](https://open.mp/docs/scripting/functions/strmid): Extract part of a string into another string.
-   [strpack](https://open.mp/docs/scripting/functions/strpack): Pack a string into a destination string.
-   [strval](https://open.mp/docs/scripting/functions/strval): Convert a string into an integer.
