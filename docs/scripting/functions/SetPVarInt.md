---
title: "SetPVarInt | open.mp"
description: "Set an integer player variable."
canonical: https://open.mp/docs/scripting/functions/SetPVarInt
language: en
---

# SetPVarInt

## Description

Set an integer player variable.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player variable will be set. |
| const pvar\[\] | The name of the player variable. |
| value | The integer to be set. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. Either the player specified is not connected, or the variable name is null or over 40 characters.

## Examples

```c
// set GetPlayerMoney the value of player variable named "Money"
SetPVarInt(playerid, "Money", GetPlayerMoney(playerid));

// will print money that player has
printf("money: %d", GetPVarInt(playerid, "Money"));
```

## Notes

note

Variables aren't reset until after [OnPlayerDisconnect](https://open.mp/docs/scripting/callbacks/OnPlayerDisconnect) is called, so the values are still accessible in OnPlayerDisconnect.

## Related Functions

-   [GetPVarInt](https://open.mp/docs/scripting/functions/GetPVarInt): Get the previously set integer from a player variable.
-   [SetPVarString](https://open.mp/docs/scripting/functions/SetPVarString): Set a string for a player variable.
-   [GetPVarString](https://open.mp/docs/scripting/functions/GetPVarString): Get the previously set string from a player variable.
-   [SetPVarFloat](https://open.mp/docs/scripting/functions/SetPVarFloat): Set a float for a player variable.
-   [GetPVarFloat](https://open.mp/docs/scripting/functions/GetPVarFloat): Get the previously set float from a player variable.
-   [DeletePVar](https://open.mp/docs/scripting/functions/DeletePVar): Delete a player variable.
