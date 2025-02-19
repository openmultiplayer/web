---
title: ispacked
sidebar_label: ispacked
description: Checks if the given string is packed.
tags: ["string"]
---

<LowercaseNote />

## Description

Checks if the given string is packed.

| Name           | Description          |
| -------------- | -------------------- |
| const string[] | The string to check. |

## Returns

**1** if the string is packed, **0** if it's unpacked.

## Examples

```c
// Create a packed string
new string[24 char];

if (ispacked(string))
{
   print("The string is packed.");
}
```

## Related Functions

- [strpack](strpack): Pack a string.
- [strunpack](strunpack): This function can be used to unpack a string.
