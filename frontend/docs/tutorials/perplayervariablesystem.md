---
title: Per-player variable system
sidebar_label: Per-player variable system
description: The per-player variable system (put short, PVar) is a new way of creating player variables in an efficient dynamically created method globally, meaning they can be used in server's gamemode and filterscripts at the same time.
---

The **per-player variable system** (put short, **PVar**) is a new way of creating player variables efficiently and dynamically, meaning that they can be used in server's gamemode and filterscripts at the same time.

They are similar to [SVars](servervariablesystem), but are on a per-player basis.

:::warning

This system was introduced in SA-MP 0.3a R5 and will not work in earlier versions!

:::

## Advantages

The per-player variable system has several major advantages over creating an array sized `MAX_PLAYERS`.

- PVars can be shared/accessed across gamemode scripts and filterscripts, making it easier to modularize your code.

- PVars are automatically deleted when a player leaves the server (after [OnPlayerDisconnect](../scripting/callbacks/OnPlayerDisconnect)), meaning you don't have to manually reset variables for the next player who joins.

- No real need for complex enums/player info structures.

- Saves memory by not allocating pawn array elements for playerids which will probably never be used.

- You can easily enumerate and print/store the PVar list. This makes both debugging and player info storage easier.

- Even if a PVar hasn't been created, it still will return a default value of 0.

- PVars can hold very large strings using dynamically allocated memory.

- You can Set, Get, Create PVars ingame.

## Drawbacks

- PVars are several times slower than regular variables. It is generally more favorable to trade in memory for speed, rather than the other way round.

## Related Functions

- [SetPVarInt](../scripting/functions/SetPVarInt): set an integer for a player variable.
- [GetPVarInt](../scripting/functions/GetPVarInt): get the previously set integer from a player variable.
- [SetPVarString](../scripting/functions/SetPVarString): set a string for a player variable.
- [GetPVarString](../scripting/functions/GetPVarString): get the previously set string from a player variable.
- [SetPVarFloat](../scripting/functions/SetPVarFloat): set a float for a player variable.
- [GetPVarFloat](../scripting/functions/GetPVarFloat): get the previously set float from a player variable.
- [DeletePVar](../scripting/functions/DeletePVar): delete a player variable.
- [GetPVarsUpperIndex](../scripting/functions/GetPVarsUpperIndex): each PVar has an index or 'id', this returns the highest one.
- [GetPVarNameAtIndex](../scripting/functions/GetPVarNameAtIndex): get the player variable's name from its index.
- [GetPVarType](../scripting/functions/GetPVarType): get the [type](../scripting/resources/pvartypes) of the player variable.
