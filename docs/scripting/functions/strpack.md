---
title: "strpack | open.mp"
description: "Pack a string."
canonical: https://open.mp/docs/scripting/functions/strpack
language: en
---

# strpack

## Description

Pack a string. Packed strings use 75% less memory.

| Name | Description |
| --- | --- |
| dest\[\] | The destination string to save the packed string in, passed by reference. |
| const source\[\] | The source, original string. |
| maxlength = sizeof (dest) | The maximum size to insert. |

## Returns

The number of characters packed.

## Examples

```c
new string[32 char];
strpack(string, "Hi, how are you?");
```

## Related Functions

-   [strcmp](https://open.mp/docs/scripting/functions/strcmp): Compare two strings to check if they are the same.
-   [strfind](https://open.mp/docs/scripting/functions/strfind): Search for a string in another string.
-   [strins](https://open.mp/docs/scripting/functions/strins): Insert text into a string.
-   [strlen](https://open.mp/docs/scripting/functions/strlen): Get the length of a string.
-   [strmid](https://open.mp/docs/scripting/functions/strmid): Extract part of a string into another string.
-   [strval](https://open.mp/docs/scripting/functions/strval): Convert a string into an integer.
-   [strcat](https://open.mp/docs/scripting/functions/strcat): Concatenate two strings into a destination reference.
-   [strdel](https://open.mp/docs/scripting/functions/strdel): Delete part of a string.
