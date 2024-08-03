---
title: IsPlayerConnected
description: Checks if a player is connected (if an ID is taken by a connected player).
tags: ["player"]
---

## Description

Checks if a player is connected (if an ID is taken by a connected player).

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |

## Returns

**true** - Player is connected.

**false** - Player is NOT connected.

## Examples

```c
KillPlayer(playerid)
{
    if (!IsPlayerConnected(playerid))
    {
        printf("Player ID %i is not connected!", playerid);
    }
    else
    {
        SetPlayerHealth(playerid, 0.0);
    }
}
```

## Notes

:::tip

This function can be omitted in a lot of cases. Many other functions already have some sort of connection check built in.

:::

## Related Functions

- [IsPlayerAdmin](IsPlayerAdmin): Checks if a player is logged into RCON.

## Related Callbacks

- [OnPlayerConnect](../callbacks/OnPlayerConnect): Called when a player connects to the server.
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): Called when a player leaves the server.
