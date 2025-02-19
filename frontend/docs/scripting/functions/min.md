---
title: min
sidebar_label: min
description: Return the lowest of two numbers.
tags: ["core"]
---

<LowercaseNote />

## Description

Function used to compare the values.

| Name   | Description             |
| ------ | ----------------------- |
| value1 | Value 1 (a) to compare. |
| value1 | Value 2 (b) to compare. |

## Returns

The lower value of `value1` and `value2`

If both are equivalent, `value1` is returned.

## Examples

```c

public OnGameModeInit()
{
    new a, b, result;

    a = 5;
    b = 10;
    result = min(a, b);

    printf("min(%d, %d) = %d", a, b, result);
    // Since a is smaller than b so result will be 5.
    
    return 1;
}
```

## Related Functions

- [max](max): Compare and get the maximum value.
