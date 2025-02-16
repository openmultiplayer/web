---
title: strequal
description: Compares two strings to see if they are the same.
tags: ["string"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Description

Compares two strings to see if they are the same.

| Name                         | Description                                                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| const string1[]              | The first string to compare.                                                                                                                |
| const string2[]              | The second string to compare.                                                                                                               |
| bool:ignorecase *(optional)* | When set to **true**, the case doesn't matter - HeLLo is the same as Hello. When **false**, they're not the same.                           |
| length *(optional)*          | When this length is set, the first x chars will be compared - doing "Hello" and "Hell No" with a length of 4 will say it's the same string. |

## Returns

**true** if the strings match each other on given length, **false** otherwise.

## Examples

```c
new string1[] = "Hello World";
new string2[] = "Hello World";

// Check if the strings are the same
if (strequal(string1, string2))
{
    print("Strings are equal.");
}
else
{
    print("Strings are not equal.");
}
```

## Notes

:::tip

This is a conveniece function that depends on [strcmp](strcmp).

:::

## Related Functions

- [strcmp](strcmp): Search for a string in another string.
