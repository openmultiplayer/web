---
title: "getarg | open.mp"
description: "Get an argument that was passed to a function."
canonical: https://open.mp/docs/scripting/functions/getarg
language: en
---

# getarg

## Description

Get an argument that was passed to a function.

| Name | Description |
| --- | --- |
| arg | The argument sequence number. Use 0 for first argument. |
| index | The index (in case the argument is an array) _(optional=0)_ |

## Returns

The value of the argument.

## Examples

```c
SomeFunc(...)
{
    printf("%i", getarg(3));
}

public OnFilterScriptInit()
{
    SomeFunc(1, 3, 3, 7);
}

// Output: 7. The fourth argument (index 3) is 7.
```

## Related Functions

-   [numargs](https://open.mp/docs/scripting/functions/numargs): Return the number of arguments.
-   [setarg](https://open.mp/docs/scripting/functions/setarg): Set an argument.
