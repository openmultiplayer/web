---
title: "uuencode | open.mp"
description: "Encode a string to an UU-decoded string."
canonical: https://open.mp/docs/scripting/functions/uuencode
language: en
---

# uuencode

## Description

Encode a string to an UU-decoded string.

| Name | Description |
| --- | --- |
| dest\[\] | The destination string for the encoded stream. |
| const source\[\] | The source, non-encoded string. |
| numbytes | The number of bytes to encode, this should not exceed 45. |
| maxlength = sizeof (dest) | The maximum length of the dest\[\] array. |

## Returns

This function does not return any specific values.

## Examples

```c
uuencode(encodedString, normalString, 45);
```

## Related Functions

-   [uudecode](https://open.mp/docs/scripting/functions/uudecode): Decode an UU-encoded string.
-   [memcpy](https://open.mp/docs/scripting/functions/memcpy): Copy bytes from one location to another.
