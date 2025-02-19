---
title: PlayerHasClockEnabled
sidebar_label: PlayerHasClockEnabled
description: Checks whether the player has their in-game clock enabled.
tags: ["player"]
---

## Description

Checks whether the player has their in-game clock enabled. ([TogglePlayerClock](TogglePlayerClock))

| Name     | Description                               |
| -------- | ----------------------------------------- |
| playerid | The player whose clock you want to check. |

## Returns

**true** - The clock is enabled.

**false** - The clock isn't enabled, or the specified player does not exist.

## Examples

```c
public OnPlayerConnect(playerid)
{
    TogglePlayerClock(playerid, true); // Show the clock

    if (PlayerHasClockEnabled(playerid))
    {
        SendClientMessage(playerid, COLOR_WHITE, "The clock is enabled.");
    }
    return 1;
}
```

## Notes

:::tip

Time is not synced with other players! Time can be synced using [SetPlayerTime](SetPlayerTime).

:::

## Related Functions

- [SetPlayerTime](SetPlayerTime): Set a player's time.
- [SetWorldTime](SetWorldTime): Set the global server time.
- [TogglePlayerClock](TogglePlayerClock): Toggle the clock in the top-right corner.
