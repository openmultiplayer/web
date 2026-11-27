---
title: "floatpower | open.mp"
description: "Raises the given value to the power of the exponent."
canonical: https://open.mp/docs/scripting/functions/floatpower
language: en
---

# floatpower

## Description

Raises the given value to the power of the exponent.

| Name | Description |
| --- | --- |
| Float:value | The value to raise to a power, as a floating-point number. |
| Float:exponent | The exponent is also a floating-point number. It may be zero or negative. |

## Returns

The result of 'value' to the power of 'exponent'.

## Examples

```c
printf("2 to the power of 8 is %.1f", floatpower(2.0, 8.0));
// Result: 256.0
```

## Related Functions

-   [floatsqroot](https://open.mp/docs/scripting/functions/floatsqroot): Calculate the square root of a floating point value.
-   [floatlog](https://open.mp/docs/scripting/functions/floatlog): Get the logarithm of the float value.
