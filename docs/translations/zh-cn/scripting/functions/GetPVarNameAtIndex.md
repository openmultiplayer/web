---
title: GetPVarNameAtIndex
description: Retrieve the name of a player's pVar via the index.
tags: ["player variable", "pvar"]
---

## Description

Retrieve the name of a player's pVar via the index.

| Name                   | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| playerid               | The ID of the player whose player variable to get the name of. |
| index                  | The index of the player's pVar.                                |
| output[]               | A string to store the pVar's name in, passed by reference.     |
| size = sizeof (output) | The max length of the returned string.                         |

## Returns

This function does not return any specific values.

## Related Functions

- [GetPVarType](GetPVarType): Get the type of the player variable.
- [GetPVarInt](GetPVarInt): Get the previously set integer from a player variable.
- [GetPVarFloat](GetPVarFloat): Get the previously set float from a player variable.
- [GetPVarString](GetPVarString): Get the previously set string from a player variable.
