---
title: "SetPVarFloat | open.mp"
description: "Set a float player variable's value."
canonical: https://open.mp/docs/scripting/functions/SetPVarFloat
language: en
---

# SetPVarFloat

## Description

Set a float player variable's value.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player variable will be set. |
| const pvar\[\] | The name of the player variable. |
| Float:value | The float you want to save in the player variable. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. Either the player specified is not connected, or the variable name is null or over 40 characters.

## Examples

```c
SavePlayerPos(playerid)
{
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z); // Get the players position

    SetPVarFloat(playerid, "Xpos", x); // Save the float into a player variable
    SetPVarFloat(playerid, "Ypos", y); // Save the float into a player variable
    SetPVarFloat(playerid, "Zpos", z); // Save the float into a player variable
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
-   [GetPVarFloat](https://open.mp/docs/scripting/functions/GetPVarFloat): Get the previously set float from a player variable.
-   [DeletePVar](https://open.mp/docs/scripting/functions/DeletePVar): Delete a player variable.
