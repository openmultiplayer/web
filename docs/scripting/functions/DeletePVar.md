---
title: "DeletePVar | open.mp"
description: "Deletes a previously set player variable."
canonical: https://open.mp/docs/scripting/functions/DeletePVar
language: en
---

# DeletePVar

## Description

Deletes a previously set player variable.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player variable to delete. |
| const pvar\[\] | The name of the player variable to delete. |

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

note

Once a variable is deleted, attempts to retrieve the value will return **0** for integers and 0.0 for floats and **NULL** for strings.

## Related Functions

-   [SetPVarInt](https://open.mp/docs/scripting/functions/SetPVarInt): Set an integer for a player variable.
-   [GetPVarInt](https://open.mp/docs/scripting/functions/GetPVarInt): Get the previously set integer from a player variable.
-   [SetPVarString](https://open.mp/docs/scripting/functions/SetPVarString): Set a string for a player variable.
-   [GetPVarString](https://open.mp/docs/scripting/functions/GetPVarString): Get the previously set string from a player variable.
-   [SetPVarFloat](https://open.mp/docs/scripting/functions/SetPVarFloat): Set a float for a player variable.
-   [GetPVarFloat](https://open.mp/docs/scripting/functions/GetPVarFloat): Get the previously set float from a player variable.
