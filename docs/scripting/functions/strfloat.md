---
title: strfloat
description: Converts a string to a float.
tags: ["string", "floating-point"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Description

Converts a string to a float.

| Name           | Description                         |
| -------------- | ----------------------------------- |
| const string[] | The string to convert into a float. |

## Returns

The requested float value.

## Examples

```c
new string[4] = "6.9"; // A STRING holding a FLOAT.

new Float:value = strfloat(string);

SetPlayerPos(playerid, 0.0, 0.0, value);
```

## Notes

:::tip

This function is the same as [floatstr](floatstr).

:::

## Related Functions

- [floatround](floatround): Convert a float to an integer (rounding).
- [float](float): Convert an integer to a float.
