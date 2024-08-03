---
title: uuencode
description: Encode a string to an UU-decoded string.
tags: ["string", "encryption"]
---

<LowercaseNote />

## Description

Encode a string to an UU-decoded string.

| Name                      | Description                                               |
| ------------------------- | --------------------------------------------------------- |
| dest[]                    | The destination string for the encoded stream.            |
| const source[]            | The source, non-encoded string.                           |
| numbytes                  | The number of bytes to encode, this should not exceed 45. |
| maxlength = sizeof (dest) | The maximum length of the dest[] array.                   |

## Returns

This function does not return any specific values.

## Examples

```c
uuencode(encodedString, normalString, 45);
```

## Related Functions

- [uudecode](uudecode): Decode an UU-encoded string.
- [memcpy](memcpy): Copy bytes from one location to another.
