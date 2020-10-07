---
id: uuencode
title: uuencode
description: Encode a string to an UU-decoded string.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Encode a string to an UU-decoded string.

| Name           | Description                                               |
| -------------- | --------------------------------------------------------- |
| dest[]         | The destination string for the encoded stream.            |
| const source[] | The source, non-encoded string.                           |
| numbytes       | The number of bytes to encode, this should not exceed 45. |
| maxlength      | The maximum length of the dest[] array.                   |

## Returns

This function does not return any specific values.

## Examples

```c
uuencode(encodedString, normalString, 45);
```

## Related Functions

- [Uudecode](Undecode): Decode an UU-encoded stream.
- [Memcpy](Memcpy): Copy bytes from one location to another.
