---
title: GetMaxPlayers
sidebar_label: GetMaxPlayers
description: Returns the maximum number of players that can join the server, as set by the server variable 'maxplayers' in server.
tags: ["player"]
---

## Description

Returns the maximum number of players that can join the server, as set by the server variable 'max_players' in config.json.

## Examples

```c
new string[128];
format(string, sizeof(string), "There are %i slots on this server!", GetMaxPlayers());
SendClientMessage(playerid, 0xFFFFFFFF, string);
```

## Notes

:::warning

- This function can not be used in place of MAX_PLAYERS.
- It can not be used at compile time (e.g. for array sizes).
- `MAX_PLAYERS` should always be re-defined to what the 'max_players' var will be, or higher.

:::

## Related Functions

- [GetPlayerPoolSize](GetPlayerPoolSize): Gets the highest playerid connected to the server.
- [IsPlayerConnected](IsPlayerConnected): Check if a player is connected to the server.
