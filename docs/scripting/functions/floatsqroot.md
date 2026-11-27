---
title: "floatsqroot | open.mp"
description: "Calculates the square root of given value."
canonical: https://open.mp/docs/scripting/functions/floatsqroot
language: en
---

# floatsqroot

## Description

Calculates the [square root](https://en.wikipedia.org/wiki/Square_root) of given value.

| Name | Description |
| --- | --- |
| Float:value | The value to calculate the square root of. |

## Returns

The square root of the input value, as a float.

## Examples

```c
new Float:sqroot = floatsqroot(25.0); // Returns 5.0, because 5x5 = 25
```

## Notes

note

This function raises a “domain” error if the input value is negative. You may use [floatabs](https://open.mp/docs/scripting/functions/floatabs) to get the absolute (positive) value.

## Related Functions

-   [floatpower](https://open.mp/docs/scripting/functions/floatpower): Raises given value to a power of exponent.
-   [floatlog](https://open.mp/docs/scripting/functions/floatlog): Get the logarithm of the float value.
