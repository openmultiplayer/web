---
id: numargs
title: numargs
description: Get the number of arguments passed to a function.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Get the number of arguments passed to a function.


| Name | Description |
|------|-------------|


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


-  getarg: Retrieve an argument from a variable argument list.
-  setarg: Set an argument.