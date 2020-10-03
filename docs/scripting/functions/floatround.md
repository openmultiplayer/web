---
id: floatround
title: floatround
description: Round a floating point number to an integer value.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Round a floating point number to an integer value.

| Name   | Description                   |
| ------ | ----------------------------- |
| value  | The value to round.           |
| method | The floatround method to use. |

## Returns

The rounded value as an integer.

## Examples

```c
floatround(3.3, floatround_ceil);
```

## Related Functions

- [float](float): Convert an integer to a float.
- [floatstr](floatstr): Convert an string to a float.
