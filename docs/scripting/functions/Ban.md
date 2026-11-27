---
title: "Ban | open.mp"
description: "Ban a player who is currently in the server."
canonical: https://open.mp/docs/scripting/functions/Ban
language: en
---

# Ban

## Description

Ban a player who is currently in the server. They will be unable to join the server ever again.

The ban will be IP-based, and be saved in the **bans.json** file in the server's root directory.

[BanEx](https://open.mp/docs/scripting/functions/BanEx) can be used to give a reason for the ban.

IP bans can be added/removed using the [RCON](https://open.mp/docs/server/RemoteConsole) `banip` and `unbanip` commands ([SendRconCommand](https://open.mp/docs/scripting/functions/SendRconCommand)).

| Name | Description |
| --- | --- |
| playerid | The ID of the player to ban. |

## Returns

This function does not return any specific values.

## Notes

warning

Any action taken directly before Ban (such as sending a message with [SendClientMessage](https://open.mp/docs/scripting/functions/SendClientMessage)) will not reach the player. A timer must be used to delay the ban.

## Examples

```c
// In order to display a message (eg. reason) for the player before the connection is closed
// you have to use a timer to create a delay. This delay needs only to be a few milliseconds long,
// but this example uses a full second just to be on the safe side.

forward DelayedBan(playerid);
public DelayedBan(playerid)
{
    Ban(playerid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // Bans the player who executed this command.

        // First, send them a message.
        SendClientMessage(playerid, 0xFF0000FF, "You have been banned!");

        // Actually ban them a second later on a timer.
        SetTimerEx("DelayedBan", 1000, false, "d", playerid);
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [BanEx](https://open.mp/docs/scripting/functions/BanEx): Ban a player with a custom reason.
-   [Kick](https://open.mp/docs/scripting/functions/Kick): Kick a player from the server.
-   [BlockIpAddress](https://open.mp/docs/scripting/functions/BlockIpAddress): Block an IP address from connecting to the server for a set amount of time.
-   [UnBlockIpAddress](https://open.mp/docs/scripting/functions/UnBlockIpAddress): Unblock an IP that was previously blocked.
