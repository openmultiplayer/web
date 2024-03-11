---
title: DeletePVar
description: Deletes a previously set player variable.
tags: ["player variable", "pvar"]
---

## Description

Deletes a previously set player variable.

| Name         | Description                                           |
| ------------ | ----------------------------------------------------- |
| playerid     | The ID of the player whose player variable to delete. |
| const pvar[] | The name of the player variable to delete.            |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. Either the player specified isn't connected or there is no variable set with the given name.

## Examples

```c
SetPVarInt(playerid, "SomeVarName", 69);

// Later on, when the variable is no longer needed...

DeletePVar(playerid, "SomeVarName");
```

## Notes

:::tip

Once a variable is deleted, attempts to retrieve the value will return 0 for integers and 0.0 for floats and NULL for strings.

:::

## Related Functions

- [SetPVarInt](SetPVarInt): Set an integer for a player variable.
- [GetPVarInt](GetPVarInt): Get the previously set integer from a player variable.
- [SetPVarString](SetPVarString): Set a string for a player variable.
- [GetPVarString](GetPVarString): Get the previously set string from a player variable.
- [SetPVarFloat](SetPVarFloat): Set a float for a player variable.
- [GetPVarFloat](GetPVarFloat): Get the previously set float from a player variable.
