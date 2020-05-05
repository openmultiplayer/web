---
id: SetWeather
title: SetWeather
description: Set the world weather for all players.
tags: []
---

## Description

Set the world weather for all players.

| Name      | Description         |
| --------- | ------------------- |
| weatherid | The weather to set. |

## Returns

This function does not return any specific values.

## Examples

```c
if(!strcmp(cmdtext, "/sandstorm", true))
{
    SetWeather(19);
    return 1;
}
```

## Notes

:::tip

If TogglePlayerClock is enabled, weather will slowly change over time, instead of changing instantly.

:::

## Related Functions

- SetPlayerWeather: Set a player's weather.
- SetGravity: Set the global gravity.
