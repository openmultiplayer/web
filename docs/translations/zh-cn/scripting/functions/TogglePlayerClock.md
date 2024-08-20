---
title: TogglePlayerClock
description: Toggle the in-game clock (top-right corner) for a specific player.
tags: ["player"]
---

## Description

Toggle the in-game clock (top-right corner) for a specific player. When this is enabled, time will progress at 1 minute per second. Weather will also interpolate (slowly change over time) when set using [SetWeather](SetWeather)/[SetPlayerWeather](SetPlayerWeather).

| Name        | Description                                            |
| ----------- | ------------------------------------------------------ |
| playerid    | The player whose clock you want to enable/disable      |
| bool:toggle | 'true' to show and 'false' to hide. Hidden by default. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The specified player does not exist.

## Examples

```c
public OnPlayerConnect(playerid)
{
    TogglePlayerClock(playerid, true); // Show the clock
    return 1;
}
```

## Notes

:::tip

- Time is not synced with other players! Time can be synced using [SetPlayerTime](SetPlayerTime).
- Time will automatically advance 6 hours when the player dies.

:::

## Related Functions

- [GetPlayerTime](GetPlayerTime): Get the time of a player.
- [SetPlayerTime](SetPlayerTime): Set a player's time.
- [SetWorldTime](SetWorldTime): Set the global server time.
