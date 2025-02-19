---
title: SetPVarFloat
sidebar_label: SetPVarFloat
description: Set a float player variable's value.
tags: ["player variable", "pvar"]
---

## Description

Set a float player variable's value.

| Name         | Description                                             |
| ------------ | ------------------------------------------------------- |
| playerid     | The ID of the player whose player variable will be set. |
| const pvar[] | The name of the player variable.                        |
| Float:value  | The float you want to save in the player variable.      |

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

:::tip

Variables aren't reset until after [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) is called, so the values are still accessible in OnPlayerDisconnect.

:::

## Related Functions

- [SetPVarInt](SetPVarInt): Set an integer for a player variable.
- [GetPVarInt](GetPVarInt): Get the previously set integer from a player variable.
- [SetPVarString](SetPVarString): Set a string for a player variable.
- [GetPVarString](GetPVarString): Get the previously set string from a player variable.
- [GetPVarFloat](GetPVarFloat): Get the previously set float from a player variable.
- [DeletePVar](DeletePVar): Delete a player variable.
