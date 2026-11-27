---
title: "floatmul | open.mp"
description: "Multiplies two floats with each other."
canonical: https://open.mp/docs/scripting/functions/floatmul
language: en
---

# floatmul

## Description

Multiplies two floats with each other.

| Name | Description |
| --- | --- |
| Float:oper1 | First Float. |
| Float:oper2 | Second Float, the first one gets multiplied with. |

## Returns

The product of the two given floats

## Examples

```c
public OnGameModeInit()
{
    new Float:Number1 = 2.3, Float:Number2 = 3.5; // Declares two floats, Number1 (2.3) and Number2 (3.5)
    new Float:Product;
    Product = floatmul(Number1, Number2); // Saves the product(=2.3*3.5 = 8.05) of Number1 and Number2 in the float "Product"
    return 1;
}
```

## Notes

note

This function is rather redundant, for it is no different than the conventional multiplication operator (\*).

## Related Functions

-   [floatadd](https://open.mp/docs/scripting/functions/floatadd): Adds two floats.
-   [floatsub](https://open.mp/docs/scripting/functions/floatsub): Subtracts two floats.
-   [floatdiv](https://open.mp/docs/scripting/functions/floatdiv): Divides a float by another.
