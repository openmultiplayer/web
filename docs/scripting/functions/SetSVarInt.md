---
title: "SetSVarInt | open.mp"
description: "Set an integer server variable."
canonical: https://open.mp/docs/scripting/functions/SetSVarInt
language: en
---

# SetSVarInt

warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

## Description

Set an integer server variable.

| Name | Description |
| --- | --- |
| const svar\[\] | The name of the server variable. |
| value | The integer to be set. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The variable name is null or over 40 characters.

## Examples

```c
// set "Version"
SetSVarInt("Version", 37);

// will print version that server has
printf("Version: %d", GetSVarInt("Version"));
```

## Related Functions

-   [GetSVarInt](https://open.mp/docs/scripting/functions/GetSVarInt): Get a player server as an integer.
-   [SetSVarString](https://open.mp/docs/scripting/functions/SetSVarString): Set a string for a server variable.
-   [GetSVarString](https://open.mp/docs/scripting/functions/GetSVarString): Get the previously set string from a server variable.
-   [SetSVarFloat](https://open.mp/docs/scripting/functions/SetSVarFloat): Set a float for a server variable.
-   [GetSVarFloat](https://open.mp/docs/scripting/functions/GetSVarFloat): Get the previously set float from a server variable.
-   [DeleteSVar](https://open.mp/docs/scripting/functions/DeleteSVar): Delete a server variable.
