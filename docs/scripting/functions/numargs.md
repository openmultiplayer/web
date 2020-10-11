---
id: numargs
title: numargs
description: Get the number of arguments passed to a function.
tags: []
---

import T from '../../../src/components/templates.js'

<T.LowercaseNote />

## Description

Get the number of arguments passed to a function.

## Examples

```c
SomeFunction(...)
{
    printf("numargs(): %i", numargs());
}

public OnFilterScriptInit()
{
    SomeFunction(1, 2, 3);
}

// Output: "numargs(): 3"
// Because 3 parameters (1, 2, 3) were passed.
```

## Related Functions

- [getarg](getarg.md): Retrieve an argument from a variable argument list.
- [setarg](setarg.md): Set an argument.
