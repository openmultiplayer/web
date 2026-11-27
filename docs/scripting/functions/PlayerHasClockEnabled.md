---
title: "PlayerHasClockEnabled | open.mp"
description: "Checks whether the player has their in-game clock enabled."
canonical: https://open.mp/docs/scripting/functions/PlayerHasClockEnabled
language: en
---

# PlayerHasClockEnabled

## Description

Checks whether the player has their in-game clock enabled. ([TogglePlayerClock](https://open.mp/docs/scripting/functions/TogglePlayerClock))

| Name | Description |
| --- | --- |
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

note

Time is not synced with other players! Time can be synced using [SetPlayerTime](https://open.mp/docs/scripting/functions/SetPlayerTime).

## Related Functions

-   [SetPlayerTime](https://open.mp/docs/scripting/functions/SetPlayerTime): Set a player's time.
-   [SetWorldTime](https://open.mp/docs/scripting/functions/SetWorldTime): Set the global server time.
-   [TogglePlayerClock](https://open.mp/docs/scripting/functions/TogglePlayerClock): Toggle the clock in the top-right corner.
