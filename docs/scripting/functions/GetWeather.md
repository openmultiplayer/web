---
title: "GetWeather | open.mp"
description: "Get the current world weather."
canonical: https://open.mp/docs/scripting/functions/GetWeather
language: en
---

# GetWeather

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the current world weather.

## Examples

```c
SetWeather(19);

printf("Current world weather: %d", GetWeather());
// The output will be 'Current world weather: 19'
```

## Related Functions

-   [SetWeather](https://open.mp/docs/scripting/functions/SetWeather): Set the world weather for all players.
-   [GetPlayerWeather](https://open.mp/docs/scripting/functions/GetPlayerWeather): Get a player's weather.
-   [SetPlayerWeather](https://open.mp/docs/scripting/functions/SetPlayerWeather): Set a player's weather.

## Related Resources

-   [Weather IDs](https://open.mp/docs/scripting/resources/weatherid)
