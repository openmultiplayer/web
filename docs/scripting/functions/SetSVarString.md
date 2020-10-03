---
id: SetSVarString
title: SetSVarString
description: Set a string server variable.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

:::

## Description

Set a string server variable.

| Name           | Description                      |
| -------------- | -------------------------------- |
| varname[]      | The name of the server variable. |
| string_value[] | The string to be set.            |

## Returns

1: The function executed successfully.

0: The function failed to execute. The variable name is null or over 40 characters.

## Examples

```c
// set "Version"
SetSVarString("Version", "0.3.7");
// will print version that server has
new string[5 + 1];
GetSVarString("Version", string, sizeof(string));
printf("Version: %s", string);
```

## Related Functions

- [SetSVarInt](functions/SetSVarInt.md): Set an integer for a server variable.
- [GetSVarInt](functions/GetSVarInt.md): Get a player server as an integer.
- [GetSVarString](functions/GetSVarString.md): Get the previously set string from a server variable.
- [SetSVarFloat](functions/SetSVarFloat.md): Set a float for a server variable.
- [GetSVarFloat](functions/GetSVarFloat.md): Get the previously set float from a server variable.
- [DeleteSVar](functions/DeleteSVar.md): Delete a server variable.
