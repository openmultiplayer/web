---
title: GetWeather
sidebar_label: GetWeather
description: Get the current world weather.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the current world weather.

## Examples

```c
SetWeather(19);

printf("Current world weather: %d", GetWeather());
// The output will be 'Current world weather: 19'
```

## Related Functions

- [SetWeather](SetWeather): Set the world weather for all players.
- [GetPlayerWeather](GetPlayerWeather): Get a player's weather.
- [SetPlayerWeather](SetPlayerWeather): Set a player's weather.

## Related Resources

- [Weather IDs](../resources/weatherid)
