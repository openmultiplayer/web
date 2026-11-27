---
title: "GetSVarInt | open.mp"
description: "Gets an integer server variable's value."
canonical: https://open.mp/docs/scripting/functions/GetSVarInt
language: en
---

# GetSVarInt

warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

## Description

Gets an integer server variable's value.

| Name | Description |
| --- | --- |
| const svar\[\] | The name of the server variable (case-insensitive).  
Assigned in [SetSVarInt](https://open.mp/docs/scripting/functions/SetSVarInt). |

## Returns

The integer value of the specified server variable.

It will still return **0** if the variable is not set.

## Examples

```c
// set "Version"
SetSVarInt("Version", 37);

// will print version that server has
printf("Version: %d", GetSVarInt("Version"));
```

## Related Functions

-   [SetSVarInt](https://open.mp/docs/scripting/functions/SetSVarInt): Set an integer for a server variable.
-   [SetSVarString](https://open.mp/docs/scripting/functions/SetSVarString): Set a string for a server variable.
-   [GetSVarString](https://open.mp/docs/scripting/functions/GetSVarString): Get the previously set string from a server variable.
-   [SetSVarFloat](https://open.mp/docs/scripting/functions/SetSVarFloat): Set a float for a server variable.
-   [GetSVarFloat](https://open.mp/docs/scripting/functions/GetSVarFloat): Get the previously set float from a server variable.
-   [DeleteSVar](https://open.mp/docs/scripting/functions/DeleteSVar): Delete a server variable.
