---
title: "GetSVarFloat | open.mp"
description: "Gets a float server variable's value."
canonical: https://open.mp/docs/scripting/functions/GetSVarFloat
language: en
---

# GetSVarFloat

warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

## Description

Gets a float server variable's value.

| Name | Description |
| --- | --- |
| const svar\[\] | The name of the server variable (case-insensitive).  
Assigned in [SetSVarFloat](https://open.mp/docs/scripting/functions/SetSVarFloat). |

## Returns

The float value of the specified server variable.

It will still return **0.0** if the variable is not set.

## Examples

```c
// set "Version"
SetSVarFloat("Version", 0.37);

// will print version that server has
printf("Version: %.2f", GetSVarFloat("Version"));
```

## Related Functions

-   [SetSVarInt](https://open.mp/docs/scripting/functions/SetSVarInt): Set an integer for a server variable.
-   [GetSVarInt](https://open.mp/docs/scripting/functions/GetSVarInt): Get a player server as an integer.
-   [SetSVarString](https://open.mp/docs/scripting/functions/SetSVarString): Set a string for a server variable.
-   [GetSVarString](https://open.mp/docs/scripting/functions/GetSVarString): Get the previously set string from a server variable.
-   [SetSVarFloat](https://open.mp/docs/scripting/functions/SetSVarFloat): Set a float for a server variable.
-   [DeleteSVar](https://open.mp/docs/scripting/functions/DeleteSVar): Delete a server variable.
