---
title: "numargs | open.mp"
description: "Get the number of arguments passed to a function."
canonical: https://open.mp/docs/scripting/functions/numargs
language: en
---

# numargs

## Description

Get the number of arguments passed to a function.

## Returns

The number of arguments passed.

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

-   [getarg](https://open.mp/docs/scripting/functions/getarg): Retrieve an argument from a variable argument list.
-   [setarg](https://open.mp/docs/scripting/functions/setarg): Set an argument.
