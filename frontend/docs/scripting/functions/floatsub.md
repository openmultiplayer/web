---
title: floatsub
sidebar_label: floatsub
description: Subtracts one float from another one.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

Subtracts one float from another one. Note that this function has no real use, as one can simply use the standard operator (-) instead.

| Name        | Description                                         |
| ----------- | --------------------------------------------------- |
| Float:oper1 | First Float.                                        |
| Float:oper2 | Second Float (gets subtracted from the first float) |

## Returns

The difference of the two given floats.

## Examples

```c
public OnGameModeInit()
{
    new Float:Number1 = 5, Float:Number2 = 2; // Declares two floats, Number1 (5) and Number2 (2)
    new Float:Difference;
    Difference = floatsub(Number1, Number2); // Saves the Difference(5-2 = 3) of Number1 and Number2 in the float "Difference"
    return 1;
}
```

## Related Functions

- [floatadd](floatadd): Adds two floats.
- [floatmul](floatmul): Multiplies two floats.
- [floatdiv](floatdiv): Divides a float by another.
