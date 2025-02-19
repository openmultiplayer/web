---
title: GetPVarFloat
sidebar_label: GetPVarFloat
description: Gets a player variable as a float.
tags: ["player variable", "pvar"]
---

## Description

Gets a player variable as a float.

| Name         | Description                                                 |
| ------------ | ----------------------------------------------------------- |
| playerid     | The ID of the player whose player variable you want to get. |
| const pvar[] | The name of the player variable.                            |

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

:::tip

Variables aren't reset until after [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) is called, so the values are still accessible in OnPlayerDisconnect.

:::

## Related Functions

- [SetPVarInt](SetPVarInt): Set an integer for a player variable.
- [GetPVarInt](GetPVarInt): Get the previously set integer from a player variable.
- [SetPVarString](SetPVarString): Set a string for a player variable.
- [GetPVarString](GetPVarString): Get the previously set string from a player variable.
- [SetPVarFloat](SetPVarFloat): Set a float for a player variable.
- [DeletePVar](DeletePVar): Delete a player variable.
