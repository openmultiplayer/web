---
title: "floatstr | open.mp"
description: "Converts a string to a float."
canonical: https://open.mp/docs/scripting/functions/floatstr
language: en
---

# floatstr

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

new Float:value = floatstr(string);

SetPlayerPos(playerid, 0.0, 0.0, value);
```

## Related Functions

-   [floatround](https://open.mp/docs/scripting/functions/floatround): Convert a float to an integer (rounding).
-   [float](https://open.mp/docs/scripting/functions/float): Convert an integer to a float.
