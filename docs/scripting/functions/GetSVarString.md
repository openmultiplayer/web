---
title: "GetSVarString | open.mp"
description: "Gets a string server variable's value."
canonical: https://open.mp/docs/scripting/functions/GetSVarString
language: en
---

# GetSVarString

warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

## Description

Gets a string server variable's value.

| Name | Description |
| --- | --- |
| const svar\[\] | The name of the server variable (case-insensitive).  
Assigned in [SetSVarString](https://open.mp/docs/scripting/functions/SetSVarString). |
| output\[\] | The array in which to store the string value in, passed by reference. |
| len = sizeof (output) | The maximum length of the returned string. |

## Returns

The length of the string.

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

-   [SetSVarInt](https://open.mp/docs/scripting/functions/SetSVarInt): Set an integer for a server variable.
-   [GetSVarInt](https://open.mp/docs/scripting/functions/GetSVarInt): Get a player server as an integer.
-   [SetSVarString](https://open.mp/docs/scripting/functions/SetSVarString): Set a string for a server variable.
-   [SetSVarFloat](https://open.mp/docs/scripting/functions/SetSVarFloat): Set a float for a server variable.
-   [GetSVarFloat](https://open.mp/docs/scripting/functions/GetSVarFloat): Get the previously set float from a server variable.
-   [DeleteSVar](https://open.mp/docs/scripting/functions/DeleteSVar): Delete a server variable.
