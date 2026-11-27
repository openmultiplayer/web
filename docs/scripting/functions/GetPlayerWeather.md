---
title: "GetPlayerWeather | open.mp"
description: "Get a player's weather."
canonical: https://open.mp/docs/scripting/functions/GetPlayerWeather
language: en
---

# GetPlayerWeather

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get a player's weather.

| Name | Description |
| --- | --- |
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

-   [SetPlayerWeather](https://open.mp/docs/scripting/functions/SetPlayerWeather): Set a player's weather.
-   [SetWeather](https://open.mp/docs/scripting/functions/SetWeather): Set the world weather for all players.

## Related Resources

-   [Weather IDs](https://open.mp/docs/scripting/resources/weatherid)
