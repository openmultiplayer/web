---
title: max
sidebar_label: max
description: Return the highest of two numbers.
tags: ["core"]
---

<LowercaseNote />

## Description

Function used to compare the values.

| Name   | Description             |
| ------ | ----------------------- |
| value1 | Value 1 (a) to compare. |
| value2 | Value 2 (b) to compare. |

## Returns

The higher value of `value1` and `value2`

If both are equivalent, `value1` is returned.

## Examples

```c
public OnGameModeInit()
{
    new a, b, result;

    a = 5;
    b = 10;
    result = max(a, b);

    printf("max(%d, %d) = %d", a, b, result);
    // Since b is bigger than a so result will be 10.

    return 1;
}
```

## Related Functions

- [min](min): Compare and get the minimum value.
