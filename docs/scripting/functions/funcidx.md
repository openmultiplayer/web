---
title: "funcidx | open.mp"
description: "This function returns the ID of a public function by its name."
canonical: https://open.mp/docs/scripting/functions/funcidx
language: en
---

# funcidx

## Description

This function returns the ID of a public function by its name.

| Name | Description |
| --- | --- |
| const name\[\] | The name of the public function to get the ID of. |

## Returns

The ID of the function (IDs start at **0**).

**\-1** if the function doesn't exist.

## Examples

```c
public OnFilterScriptInit()
{
    printf("ID of OnFilterScriptInit: %d", funcidx("OnFilterScriptInit"));
    return 1;
}
```

## Related Functions

-   [CallLocalFunction](https://open.mp/docs/scripting/functions/CallLocalFunction): Call a function in the script.
-   [CallRemoteFunction](https://open.mp/docs/scripting/functions/CallRemoteFunction): Call a function in any loaded script.
