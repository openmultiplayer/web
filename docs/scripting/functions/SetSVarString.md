---
title: "SetSVarString | open.mp"
description: "Set a string server variable."
canonical: https://open.mp/docs/scripting/functions/SetSVarString
language: en
---

# SetSVarString

warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

## Description

Set a string server variable.

| Name | Description |
| --- | --- |
| const svar\[\] | The name of the server variable. |
| const value\[\] | The string to be set. |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The variable name is null or over 40 characters.

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
-   [GetSVarString](https://open.mp/docs/scripting/functions/GetSVarString): Get the previously set string from a server variable.
-   [SetSVarFloat](https://open.mp/docs/scripting/functions/SetSVarFloat): Set a float for a server variable.
-   [GetSVarFloat](https://open.mp/docs/scripting/functions/GetSVarFloat): Get the previously set float from a server variable.
-   [DeleteSVar](https://open.mp/docs/scripting/functions/DeleteSVar): Delete a server variable.
