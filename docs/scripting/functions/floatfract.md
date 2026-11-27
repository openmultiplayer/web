---
title: "floatfract | open.mp"
description: "Get the fractional part of a float."
canonical: https://open.mp/docs/scripting/functions/floatfract
language: en
---

# floatfract

## Description

Get the fractional part of a float. This means the value of the numbers after the decimal point.

| Name | Description |
| --- | --- |
| Float:value | The float to get the fractional part of. |

## Returns

The fractional part of the float, as a float value.

## Examples

```c
new Float:fFract = floatfract(3.14159); // returns 0.14159
```

## Related Functions

-   [floatround](https://open.mp/docs/scripting/functions/floatround): Convert a float to an integer (rounding).
