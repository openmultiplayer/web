---
title: "SendRconCommand | open.mp"
description: "Sends an RCON (Remote Console) command."
canonical: https://open.mp/docs/scripting/functions/SendRconCommand
language: en
---

# SendRconCommand

## Description

Sends an RCON (Remote Console) command.

| Name | Description |
| --- | --- |
| const format\[\] | The [RCON command](https://open.mp/docs/server/ControllingServer#rcon-commands) to be executed. |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

This function always returns **1**.

## Examples

```c
SendRconCommand("gmx");
// This is a scripted version of typing "/rcon gmx" in-game.
// GMX restarts the game mode.

// Example using format()
new szMapName[] = "Los Santos";
new szCmd[64];
format(szCmd, sizeof(szCmd), "mapname %s", szMapName);
SendRconCommand(szCmd);

// PRO TIP: You don't need `format` in open.mp
SendRconCommand("game.map %s", szMapName);
```

## Notes

note

-   Does not support **login**, due to the lack of a `playerid` parameter.
-   'password 0' will remove the server's password if one is set.
-   This function will result in [OnRconCommand](https://open.mp/docs/scripting/callbacks/OnRconCommand) being called.

info

See [config.json](https://open.mp/docs/server/config.json)

## Related Functions

-   [IsPlayerAdmin](https://open.mp/docs/scripting/functions/IsPlayerAdmin): Checks if a player is logged into RCON.

## Related Callbacks

-   [OnRconCommand](https://open.mp/docs/scripting/callbacks/OnRconCommand): Called when an RCON command is sent.
-   [OnRconLoginAttempt](https://open.mp/docs/scripting/callbacks/OnRconLoginAttempt): Called when an attempt to login to RCON is made.
