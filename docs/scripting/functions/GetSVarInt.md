---
id: GetSVarInt
title: GetSVarInt
description: Gets an integer server variable's value.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

:::

## Description

Gets an integer server variable's value.


| Name | Description |
|------|-------------|
|varname | The name of the server variable (case-insensitive). Assigned in SetSVarInt.|


## Returns

The integer value of the specified server variable. It will still return 0 if the variable is not set.


## Examples


```c
// set "Version"
SetSVarInt("Version", 37);
// will print version that server has
printf("Version: %d", GetSVarInt("Version"));
```


## Related Functions


-  [SetSVarInt](../functions/SetSVarInt.md): Set an integer for a server variable.
-  [SetSVarString](../functions/SetSVarString.md): Set a string for a server variable.
-  [GetSVarString](../functions/GetSVarString.md): Get the previously set string from a server variable.
-  [SetSVarFloat](../functions/SetSVarFloat.md): Set a float for a server variable.
-  [GetSVarFloat](../functions/GetSVarFloat.md): Get the previously set float from a server variable.
-  [DeleteSVar](../functions/DeleteSVar.md): Delete a server variable.