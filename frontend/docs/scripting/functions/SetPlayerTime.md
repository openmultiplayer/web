---
title: SetPlayerTime
sidebar_label: SetPlayerTime
description: Sets the game time for a player.
tags: ["player"]
---

## Description

Sets the game time for a player. If a player's clock is enabled ([TogglePlayerClock](TogglePlayerClock)) the time displayed by it will update automatically.

| Name     | Description                                   |
| -------- | --------------------------------------------- |
| playerid | The ID of the player to set the game time of. |
| hour     | Hour to set (0-23).                           |
| minute   | Minutes to set (0-59).                        |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The player specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/noon", true))
    {
        SetPlayerTime(playerid, 12, 0); // Noon
        return 1;
    }
    if (!strcmp(cmdtext, "/midnight", true))
    {
        SetPlayerTime(playerid, 0, 0); // Midnight
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

Using this function under [OnPlayerConnect](../callbacks/OnPlayerConnect) doesn't work.

:::

## Related Functions

- [SetWorldTime](SetWorldTime): Set the global server time.
- [GetPlayerTime](GetPlayerTime): Get the time of a player.
- [TogglePlayerClock](TogglePlayerClock): Toggle the clock in the top-right corner.
