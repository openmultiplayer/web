---
title: "SetWeather | open.mp"
description: "Set the world weather for all players."
canonical: https://open.mp/docs/scripting/functions/SetWeather
language: en
---

# SetWeather

## Description

Set the world weather for all players.

| Name | Description |
| --- | --- |
| weatherid | The [weather](https://open.mp/docs/scripting/resources/weatherid) to set. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/sandstorm", true))
    {
        SetWeather(19);
        return 1;
    }
    return 1;
}
```

## Notes

note

-   If [TogglePlayerClock](https://open.mp/docs/scripting/functions/TogglePlayerClock) is enabled, weather will slowly change over time, instead of changing instantly.
-   There are only valid 21 weather IDs in the game (0 - 20), however the game does not have any form of range check.

## Related Functions

-   [GetWeather](https://open.mp/docs/scripting/functions/GetWeather): Get the current world weather.
-   [SetPlayerWeather](https://open.mp/docs/scripting/functions/SetPlayerWeather): Set a player's weather.
-   [SetGravity](https://open.mp/docs/scripting/functions/SetGravity): Set the global gravity.

## Related Resources

-   [Weather IDs](https://open.mp/docs/scripting/resources/weatherid)
