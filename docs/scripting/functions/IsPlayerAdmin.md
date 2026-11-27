---
title: "IsPlayerAdmin | open.mp"
description: "Check if a player is logged in as an RCON admin."
canonical: https://open.mp/docs/scripting/functions/IsPlayerAdmin
language: en
---

# IsPlayerAdmin

## Description

Check if a player is logged in as an RCON admin.

| Name | Description |
| --- | --- |
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

-   [SetPlayerAdmin](https://open.mp/docs/scripting/functions/SetPlayerAdmin): Sets the player as an RCON admin.
-   [SendRconCommand](https://open.mp/docs/scripting/functions/SendRconCommand): Sends an RCON command via the script.

## Related Callbacks

-   [OnRconLoginAttempt](https://open.mp/docs/scripting/callbacks/OnRconLoginAttempt): Called when an attempt to login to RCON is made.
