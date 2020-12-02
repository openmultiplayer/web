---
title: GetPVarFloat
description: Gets a player variable as a float.
tags: ["pvar"]
---

## Description

Gets a player variable as a float.

| Name     | Description                                                 |
| -------- | ----------------------------------------------------------- |
| playerid | The ID of the player whose player variable you want to get. |
| varname  | The name of the player variable.                            |

## Returns

The float from the specified player variable

## Examples

```c
forward LoadPos(playerid);
public LoadPos(playerid)
{
    SetPlayerPos(playerid, GetPVarFloat(playerid,"xpos"), GetPVarFloat(playerid,"ypos"), GetPVarFloat(playerid,"zpos"));
    return 1;
}
```

## Notes

:::tip

Variables aren't reset until after OnPlayerDisconnect is called, so the values are still accessible in OnPlayerDisconnect.

:::

## Related Functions

- [SetPVarInt](SetPVarInt.md): Set an integer for a player variable.
- [GetPVarInt](GetPVarInt.md): Get the previously set integer from a player variable.
- [SetPVarString](SetPVarString.md): Set a string for a player variable.
- [GetPVarString](GetPVarString.md): Get the previously set string from a player variable.
- [SetPVarFloat](SetPVarFloat.md): Set a float for a player variable.
- [DeletePVar](DeletePVar.md): Delete a player variable.
