---
title: "float | open.mp"
description: "Converts an integer into a float."
canonical: https://open.mp/docs/scripting/functions/float
language: en
---

# float

## Description

Converts an integer into a float.

| Name | Description |
| --- | --- |
| value | Integer value to convert to a float |

## Returns

The given integer as a float

## Examples

```c
new Float:FloatValue;
new Value = 52;
FloatValue = float(Value);   // Converts Value(52) into a float and stores it in 'FloatValue' (52.0)
```

## Related Functions

-   [floatround](https://open.mp/docs/scripting/functions/floatround): Convert a float to an integer (rounding).
-   [floatstr](https://open.mp/docs/scripting/functions/floatstr): Convert an string to a float.
