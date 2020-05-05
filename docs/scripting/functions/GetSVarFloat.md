---
id: GetSVarFloat
title: GetSVarFloat
description: Gets a float server variable's value.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

:::

## Description

Gets a float server variable's value.


| Name | Description |
|------|-------------|
|varname | The name of the server variable (case-insensitive). Assigned in SetSVarFloat.|


## Returns

The float value of the specified server variable. It will still return 0 if the variable is not set.


## Examples


```c
// set "Version"
SetSVarFloat("Version", 0.37);
// will print version that server has
printf("Version: %f", GetSVarFloat("Version"));
```


## Related Functions


-  SetSVarInt: Set an integer for a server variable.
-  GetSVarInt: Get a player server as an integer.
-  SetSVarString: Set a string for a server variable.
-  GetSVarString: Get the previously set string from a server variable.
-  SetSVarFloat: Set a float for a server variable.
-  DeleteSVar: Delete a server variable.