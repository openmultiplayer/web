---
title: "strunpack | open.mp"
description: "This function can be used to unpack a string."
canonical: https://open.mp/docs/scripting/functions/strunpack
language: en
---

# strunpack

## Description

This function can be used to unpack a string.

| Name | Description |
| --- | --- |
| dest\[\] | The destination string to save the unpacked string in, passed by reference. |
| const source\[\] | The source, original packed string. |
| maxlength = sizeof (dest) | The maximum size to insert. |

## Returns

The number of characters packed.

## Examples

```c
new string[17];
new pstring[17 char] = !"Hi, how are you?";
strunpack(string, pstring);
```

## Related Functions

-   [ispacked](https://open.mp/docs/scripting/functions/ispacked): Check if the given string is packed.
-   [strpack](https://open.mp/docs/scripting/functions/strpack): This function can be used to pack a string.
-   [strcmp](https://open.mp/docs/scripting/functions/strcmp): Compare two strings to check if they are the same.
-   [strfind](https://open.mp/docs/scripting/functions/strfind): Search for a string in another string.
-   [strins](https://open.mp/docs/scripting/functions/strins): Insert text into a string.
-   [strlen](https://open.mp/docs/scripting/functions/strlen): Get the length of a string.
-   [strmid](https://open.mp/docs/scripting/functions/strmid): Extract part of a string into another string.
-   [strpack](https://open.mp/docs/scripting/functions/strpack): Pack a string into a destination string.
-   [strval](https://open.mp/docs/scripting/functions/strval): Convert a string into an integer.
-   [strcat](https://open.mp/docs/scripting/functions/strcat): Concatenate two strings into a destination reference.
-   [strdel](https://open.mp/docs/scripting/functions/strdel): Delete part of a string.
