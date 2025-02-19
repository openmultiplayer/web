---
title: Server variable system
sidebar_label: Server variable system

description: The server variable system (put short, SVar) is a new way of creating server variables in an efficient dynamically created method globally, meaning they can be used in server's gamemode and filterscripts at the same time.
---

The **server variable system** (put short, **SVar**) is a new way of creating server variables in an efficient dynamically created method globally, meaning they can be used in server's gamemode and filterscripts at the same time.

They are similar to [PVars](perplayervariablesystem), but are not tied to a player ID.

:::note The SVar system is the same as the PVars, although the variables created are server-wide, not attached to any playerid, and persist through gamemode changes. :::

## Advantages

The new system was introduced in SA-MP 0.3.7 R2-1.

- SVars can be shared/accessed across gamemode scripts and filterscripts.

- You can easily enumerate and print/store the SVar list. This makes debugging easier.

- Even if a SVar hasn't been created, it still will return a default value of 0.

- SVars can hold very large strings using dynamically allocated memory.

- You can Set, Get, Create SVars ingame.

## Drawbacks

- SVars are several times slower than regular variables. It is generally more favorable to trade in memory for speed, rather than the other way round.

## Functions

The functions for setting and retrieving the server variables are:

- [SetSVarInt](../scripting/functions/SetSVarInt) Set an integer for a server variable.

- [GetSVarInt](../scripting/functions/GetSVarInt) Get a player server as an integer.

- [SetSVarString](../scripting/functions/SetSVarString) Set a string for a server variable.

- [GetSVarString](../scripting/functions/GetSVarString) Get the previously set string from a server variable.

- [SetSVarFloat](../scripting/functions/SetSVarFloat) Set a float for a server variable.

- [GetSVarFloat](../scripting/functions/GetSVarFloat) Get the previously set float from a server variable

- [DeleteSVar](../scripting/functions/DeleteSVar) Delete a server variable.

```c
#define SERVER_VARTYPE_NONE   (0)
#define SERVER_VARTYPE_INT    (1)
#define SERVER_VARTYPE_STRING (2)
#define SERVER_VARTYPE_FLOAT  (3)
```
