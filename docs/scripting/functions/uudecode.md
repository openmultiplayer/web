---
title: uudecode
description: Decode an UU-encoded string.
tags: ["string", "encryption"]
---

<LowercaseNote />

## Description

Decode an UU-encoded string.

| Name                      | Description                                   |
| ------------------------- | --------------------------------------------- |
| dest[]                    | The destination for the decoded string array. |
| const source[]            | The UU-encoded source string.                 |
| maxlength = sizeof (dest) | The maximum length of dest that can be used.  |

## Returns

This function does not return any specific values.

## Examples

```c
uudecode(normalString, encodedString);
```

## Related Functions

- [uuencode](uuencode): Encode a string to an UU-decoded string.
- [memcpy](memcpy): Copy bytes from one location to another.
