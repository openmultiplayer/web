---
id: heapspace
title: heapspace
description: Returns the amount of memory available for the heap/stack in bytes.
tags: []
---

import T from '../../../src/components/templates.js'

<T.LowercaseNote />

## Description

Returns the amount of memory available for the heap/stack in bytes.

## Examples

```c
public OnGameModeInit()
{
    printf("Heapspace: %i kilobytes", heapspace() / 1024);
    return 1;
}
```

## Related Functions
