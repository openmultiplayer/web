---
title: IsPlayerAdmin
description: Check if a player is logged in as an RCON admin.
tags: ["player", "rcon", "administration"]
---

## Description

Check if a player is logged in as an RCON admin.

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |

## Returns

**true** - Player is an RCON admin.

**false** - Player is NOT an RCON admin.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerAdmin(playerid))
    {
        SendClientMessageToAll(0xDEEE20FF, "An admin spawned.");
    }
    return 1;
}
```

## Related Functions

- [SetPlayerAdmin](SetPlayerAdmin): Sets the player as an RCON admin.
- [SendRconCommand](SendRconCommand): Sends an RCON command via the script.

## Related Callbacks

- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): Called when an attempt to login to RCON is made.
