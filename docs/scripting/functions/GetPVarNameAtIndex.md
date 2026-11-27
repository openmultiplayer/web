---
title: "GetPVarNameAtIndex | open.mp"
description: "Retrieve the name of a player's pVar via the index."
canonical: https://open.mp/docs/scripting/functions/GetPVarNameAtIndex
language: en
---

# GetPVarNameAtIndex

## Description

Retrieve the name of a player's pVar via the index.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player variable to get the name of. |
| index | The index of the player's pVar. |
| output\[\] | A string to store the pVar's name in, passed by reference. |
| size = sizeof (output) | The max length of the returned string. |

## Returns

This function does not return any specific values.

## Related Functions

-   [GetPVarType](https://open.mp/docs/scripting/functions/GetPVarType): Get the type of the player variable.
-   [GetPVarInt](https://open.mp/docs/scripting/functions/GetPVarInt): Get the previously set integer from a player variable.
-   [GetPVarFloat](https://open.mp/docs/scripting/functions/GetPVarFloat): Get the previously set float from a player variable.
-   [GetPVarString](https://open.mp/docs/scripting/functions/GetPVarString): Get the previously set string from a player variable.
