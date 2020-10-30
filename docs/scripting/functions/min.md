---
title: min
description: .
tags: []
---

import T from '../../../src/components/templates.js'

<T.LowercaseNote />

## Description

Function used to compare the values.

| Name | Description         |
| ---- | ------------------- |
| a    | Value a to compare. |
| b    | Value b to compare. |

## Returns

Returns the smallest of a and b. If both are equivalent, a is returned.

## Examples

```c
//Since a is smaller than b so result will be 5.

public OnGameModeInit()
{
    new a, b, result;
    a = 5;
    b = 10;
    result = min(a,b);
    printf ("min(a,b) =", param, result);
    return 0;
}
```

## Related Functions

- [min](min.md): Compare and get the minimum value .
- [max](max.md): Compare and get the maximum value .
