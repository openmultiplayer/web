---
title: "GetSVarNameAtIndex | open.mp"
description: "Retrieve the name of a sVar via the index."
canonical: https://open.mp/docs/scripting/functions/GetSVarNameAtIndex
language: en
---

# GetSVarNameAtIndex

## Description

Retrieve the name of a sVar via the index.

| Name | Description |
| --- | --- |
| index | The index of the sVar. |
| output\[\] | A string to store the sVar's name in, passed by reference. |
| size = sizeof (output) | The max length of the returned string. |

## Returns

This function does not return any specific values.

## Related Functions

-   [GetSVarType](https://open.mp/docs/scripting/functions/GetSVarType): Get the type of the server variable.
-   [GetSVarInt](https://open.mp/docs/scripting/functions/GetSVarInt): Get a player server as an integer.
-   [GetSVarFloat](https://open.mp/docs/scripting/functions/GetSVarFloat): Get the previously set float from a server variable.
-   [GetSVarString](https://open.mp/docs/scripting/functions/GetSVarString): Get the previously set string from a server variable.
