---
title: floatadd
sidebar_label: floatadd
description: Adds two floats together.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

Adds two floats together. This function is redundant as the standard operator (+) does the same thing.

| Name          | Description   |
| ------------- | ------------- |
| Float:Number1 | First float.  |
| Float:Number2 | Second float. |

## Returns

The sum of the two given floats.

## Examples

```c
public OnGameModeInit()
{
    new Float:Number1 = 2, Float:Number2 = 3; // Declares two floats, Number1 (2) and Number2 (3)
    new Float:Sum;
    Sum = floatadd(Number1, Number2); // Saves the Sum(=2+3 = 5) of Number1 and Number2 in the float "Sum"
    return 1;
}
```

## Related Functions

- [floatsub](floatsub): Subtracts two floats.
- [floatmul](floatmul): Multiplies two floats.
- [floatdiv](floatdiv): Divides a float by another.
