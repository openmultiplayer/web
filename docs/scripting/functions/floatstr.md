---
title: floatstr
description: Converts a string to a float.
tags: ["string", "floating-point"]
---

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

new Float:value = floatstr(string);

SetPlayerPos(playerid, 0.0, 0.0, value);
```

## Related Functions

- [floatround](floatround): Convert a float to an integer (rounding).
- [float](float): Convert an integer to a float.
