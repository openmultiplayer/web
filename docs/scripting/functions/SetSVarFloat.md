---
title: "SetSVarFloat | open.mp"
description: "Set a float server variable."
canonical: https://open.mp/docs/scripting/functions/SetSVarFloat
language: en
---

# SetSVarFloat

warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

## Description

Set a float server variable.

| Name | Description |
| --- | --- |
| const svar\[\] | The name of the server variable. |
| Float:value | The float to be set. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The variable name is null or over 40 characters.

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
-   [GetSVarFloat](https://open.mp/docs/scripting/functions/GetSVarFloat): Get the previously set float from a server variable.
-   [DeleteSVar](https://open.mp/docs/scripting/functions/DeleteSVar): Delete a server variable.
