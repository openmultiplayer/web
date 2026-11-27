---
title: "strfloat | open.mp"
description: "Converts a string to a float."
canonical: https://open.mp/docs/scripting/functions/strfloat
language: en
---

# strfloat

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Converts a string to a float.

| Name | Description |
| --- | --- |
| const string\[\] | The string to convert into a float. |

## Returns

The requested float value.

## Examples

```c
new string[4] = "6.9"; // A STRING holding a FLOAT.

new Float:value = strfloat(string);

SetPlayerPos(playerid, 0.0, 0.0, value);
```

## Notes

note

This function is the same as [floatstr](https://open.mp/docs/scripting/functions/floatstr).

## Related Functions

-   [floatround](https://open.mp/docs/scripting/functions/floatround): Convert a float to an integer (rounding).
-   [float](https://open.mp/docs/scripting/functions/float): Convert an integer to a float.
