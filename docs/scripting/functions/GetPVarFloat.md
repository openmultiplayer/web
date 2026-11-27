---
title: "GetPVarFloat | open.mp"
description: "Gets a player variable as a float."
canonical: https://open.mp/docs/scripting/functions/GetPVarFloat
language: en
---

# GetPVarFloat

## Description

Gets a player variable as a float.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player variable you want to get. |
| const pvar\[\] | The name of the player variable. |

## Returns

The float from the specified player variable

## Examples

```c
LoadPlayerPos(playerid)
{
    new Float:x, Float:y, Float:z;

    x = GetPVarFloat(playerid, "Xpos");
    y = GetPVarFloat(playerid, "Ypos");
    z = GetPVarFloat(playerid, "Zpos");

    SetPlayerPos(playerid, x, y, z);
    return 1;
}
```

## Notes

note

Variables aren't reset until after [OnPlayerDisconnect](https://open.mp/docs/scripting/callbacks/OnPlayerDisconnect) is called, so the values are still accessible in OnPlayerDisconnect.

## Related Functions

-   [SetPVarInt](https://open.mp/docs/scripting/functions/SetPVarInt): Set an integer for a player variable.
-   [GetPVarInt](https://open.mp/docs/scripting/functions/GetPVarInt): Get the previously set integer from a player variable.
-   [SetPVarString](https://open.mp/docs/scripting/functions/SetPVarString): Set a string for a player variable.
-   [GetPVarString](https://open.mp/docs/scripting/functions/GetPVarString): Get the previously set string from a player variable.
-   [SetPVarFloat](https://open.mp/docs/scripting/functions/SetPVarFloat): Set a float for a player variable.
-   [DeletePVar](https://open.mp/docs/scripting/functions/DeletePVar): Delete a player variable.
