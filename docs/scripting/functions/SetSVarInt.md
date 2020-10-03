---
id: SetSVarInt
title: SetSVarInt
description: Set an integer server variable.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

:::

## Description

Set an integer server variable.

| Name      | Description                      |
| --------- | -------------------------------- |
| varname[] | The name of the server variable. |
| int_value | The integer to be set.           |

## Returns

1: The function executed successfully.

0: The function failed to execute. The variable name is null or over 40 characters.

## Examples

```c
// set "Version"
SetSVarInt("Version", 37);
// will print version that server has
printf("Version: %d", GetSVarInt("Version"));
```

## Related Functions

- [GetSVarInt](../../scripting/functions/GetSVarInt.md): Get a player server as an integer.
- [SetSVarString](../../scripting/functions/SetSVarString.md): Set a string for a server variable.
- [GetSVarString](../../scripting/functions/GetSVarString.md): Get the previously set string from a server variable.
- [SetSVarFloat](../../scripting/functions/SetSVarFloat.md): Set a float for a server variable.
- [GetSVarFloat](../../scripting/functions/GetSVarFloat.md): Get the previously set float from a server variable.
- [DeleteSVar](../../scripting/functions/DeleteSVar.md): Delete a server variable.
