---
title: "memcpy | open.mp"
description: "Copy bytes from one location to another."
canonical: https://open.mp/docs/scripting/functions/memcpy
language: en
---

# memcpy

## Description

Copy bytes from one location to another.

| Name | Description |
| --- | --- |
| dest\[\] | An array into which the bytes from source are copied in. |
| const source\[\] | The source array. |
| index = 0 | The start index in bytes in the destination array where the data should be copied to. |
| numbytes | The number of bytes (not cells) to copy. |
| maxlength = sizeof (dest) | The maximum number of cells that fit in the destination buffer. |

## Returns

**true** on success, **false** on failure.

## Examples

```c
// Concatenate two strings with memcpy
new
	destination[64] = "This is ",
	source[] = "a string in a 32 Bit Array";

memcpy(destination, source, strlen(destination) * 4, sizeof source * 4, sizeof destination);
print(destination);
// Output: This is a string in a 32 Bit Array
```

## Related Functions

-   [strcmp](https://open.mp/docs/scripting/functions/strcmp): Compare two strings to see if they are the same.
-   [strfind](https://open.mp/docs/scripting/functions/strfind): Search for a substring in a string.
-   [strdel](https://open.mp/docs/scripting/functions/strdel): Delete part/all of a string.
-   [strins](https://open.mp/docs/scripting/functions/strins): Put a string into another string.
-   [strlen](https://open.mp/docs/scripting/functions/strlen): Check the length of a string.
-   [strmid](https://open.mp/docs/scripting/functions/strmid): Extract characters from a string.
-   [strpack](https://open.mp/docs/scripting/functions/strpack): Pack a string into a destination.
-   [strval](https://open.mp/docs/scripting/functions/strval): Find the value of a string.
-   [strcat](https://open.mp/docs/scripting/functions/strcat): Concatenate two strings.
