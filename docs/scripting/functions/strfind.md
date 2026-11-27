---
title: "strfind | open.mp"
description: "Search for a sub string in a string."
canonical: https://open.mp/docs/scripting/functions/strfind
language: en
---

# strfind

## Description

Search for a sub string in a string.

| Name | Description |
| --- | --- |
| const string\[\] | The string you want to search in (haystack). |
| const sub\[\] | The string you want to search for (needle). |
| bool:ignorecase _(optional)_ | When set to true, the case doesn't matter - HeLLo is the same as Hello. When false, they're not the same. |
| Position _(optional)_ | The offset to start searching from. |

## Returns

The number of characters before the sub string (the sub string's start position) or -1 if it's not found.

## Examples

```c
if (strfind("Are you in here?", "you", true) != -1) // Returns 4, because the start of 'you' (y) is at index 4 in the string
{
    SendClientMessageToAll(0xFFFFFFFF, "I found you!");
}
```

## Related Functions

-   [strcmp](https://open.mp/docs/scripting/functions/strcmp): Compare two strings to check if they are the same.
-   [strdel](https://open.mp/docs/scripting/functions/strdel): Delete part of a string.
-   [strins](https://open.mp/docs/scripting/functions/strins): Insert text into a string.
-   [strlen](https://open.mp/docs/scripting/functions/strlen): Get the length of a string.
-   [strmid](https://open.mp/docs/scripting/functions/strmid): Extract part of a string into another string.
-   [strpack](https://open.mp/docs/scripting/functions/strpack): Pack a string into a destination string.
-   [strval](https://open.mp/docs/scripting/functions/strval): Convert a string into an integer.
-   [strcat](https://open.mp/docs/scripting/functions/strcat): Concatenate two strings into a destination reference.
