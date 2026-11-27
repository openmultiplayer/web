---
title: "GetPVarInt | open.mp"
description: "Gets an integer player variable's value."
canonical: https://open.mp/docs/scripting/functions/GetPVarInt
language: en
---

# GetPVarInt

## Description

Gets an integer player variable's value.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player variable to get. |
| const pvar\[\] | The name of the player variable (case-insensitive).  
Assigned in [SetPVarInt](https://open.mp/docs/scripting/functions/SetPVarInt). |

## Returns

The integer value of the specified player variable.

It will still return **0** if the variable is not set, or the player does not exist.

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

note

Variables aren't reset until after [OnPlayerDisconnect](https://open.mp/docs/scripting/callbacks/OnPlayerDisconnect) is called, so the values are still accessible in OnPlayerDisconnect.

## Related Functions

-   [SetPVarInt](https://open.mp/docs/scripting/functions/SetPVarInt): Set an integer for a player variable.
-   [SetPVarString](https://open.mp/docs/scripting/functions/SetPVarString): Set a string for a player variable.
-   [GetPVarString](https://open.mp/docs/scripting/functions/GetPVarString): Get the previously set string from a player variable.
-   [SetPVarFloat](https://open.mp/docs/scripting/functions/SetPVarFloat): Set a float for a player variable.
-   [GetPVarFloat](https://open.mp/docs/scripting/functions/GetPVarFloat): Get the previously set float from a player variable.
-   [DeletePVar](https://open.mp/docs/scripting/functions/DeletePVar): Delete a player variable.
