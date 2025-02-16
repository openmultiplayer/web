---
title: GetPlayerWeather
sidebar_label: GetPlayerWeather
description: Get a player's weather.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get a player's weather.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The ID of the player to get the weather of. |

## Returns

Returns the player's weather.

## Examples

```c
SetPlayerWeather(playerid, 8);

printf("Player weather: %d", GetPlayerWeather(playerid));
// The output will be 'Player weather: 8'
```

## Related Functions

- [SetPlayerWeather](SetPlayerWeather): Set a player's weather.
- [SetWeather](SetWeather): Set the world weather for all players.

## Related Resources

- [Weather IDs](../resources/weatherid)
