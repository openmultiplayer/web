---
title: GetPVarInt
sidebar_label: GetPVarInt
description: Gets an integer player variable's value.
tags: ["player variable", "pvar"]
---

## Description

Gets an integer player variable's value.

| Name         | Description                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| playerid     | The ID of the player whose player variable to get.                                             |
| const pvar[] | The name of the player variable (case-insensitive).<br />Assigned in [SetPVarInt](SetPVarInt). |

## Returns

The integer value of the specified player variable.

It will still return 0 if the variable is not set, or the player does not exist.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    SetPVarInt(playerid, "Level", 20);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    printf("Level: %d", GetPVarInt(playerid, "Level")); // get the saved value ('Level')
    // will print 'Level: 20'
    return 1;
}
```

## Notes

:::tip

Variables aren't reset until after [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) is called, so the values are still accessible in OnPlayerDisconnect.

:::

## Related Functions

- [SetPVarInt](SetPVarInt): Set an integer for a player variable.
- [SetPVarString](SetPVarString): Set a string for a player variable.
- [GetPVarString](GetPVarString): Get the previously set string from a player variable.
- [SetPVarFloat](SetPVarFloat): Set a float for a player variable.
- [GetPVarFloat](GetPVarFloat): Get the previously set float from a player variable.
- [DeletePVar](DeletePVar): Delete a player variable.
