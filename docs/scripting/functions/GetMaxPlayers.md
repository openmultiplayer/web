---
title: "GetMaxPlayers | open.mp"
description: "Returns the maximum number of players that can join the server, as set by the server variable 'max_players'."
canonical: https://open.mp/docs/scripting/functions/GetMaxPlayers
language: en
---

# GetMaxPlayers

## Description

Returns the maximum number of players that can join the server, as set by the server variable 'max\_players' in config.json.

## Examples

```c
new string[128];
format(string, sizeof(string), "There are %i slots on this server!", GetMaxPlayers());
SendClientMessage(playerid, 0xFFFFFFFF, string);
```

## Notes

warning

This function can not be used in place of MAX\_PLAYERS. It can not be used at compile time (e.g. for array sizes). `MAX_PLAYERS` should always be re-defined to what the 'max\_players' var will be, or higher.

## Related Functions

-   [GetPlayerPoolSize](https://open.mp/docs/scripting/functions/GetPlayerPoolSize): Gets the highest playerid connected to the server.
-   [IsPlayerConnected](https://open.mp/docs/scripting/functions/IsPlayerConnected): Check if a player is connected to the server.
