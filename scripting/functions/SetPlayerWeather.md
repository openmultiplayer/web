---
title: SetPlayerWeather
description: Set a player's weather.
tags: ["player"]
---

# SetPlayerWeather

## Description

Set a player's weather.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player whose weather to set. |
| weather  | The weather to set.                        |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if(!strcmp(cmdtext, "/storm", true))
    {
        SetPlayerWeather(playerid, 8);
        return 1;
    }
    return 0;
}
```

## Notes

::: tip

If TogglePlayerClock is enabled, weather will slowly change over time, instead of changing instantly.

:::

## Related Functions

- SetWeather: Set the global weather.
- SetGravity: Set the global gravity.
