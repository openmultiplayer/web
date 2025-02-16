---
title: OnPlayerCommandText
sidebar_label: OnPlayerCommandText
description: This callback is called when a player enters a command into the client chat window.
tags: ["player"]
---

## Description

This callback is called when a player enters a command into the client chat window. Commands are anything that start with a forward slash, e.g. /help.

| Name      | Description                                                 |
| --------- | ----------------------------------------------------------- |
| playerid  | The ID of the player that entered a command.                |
| cmdtext[] | The command that was entered (including the forward slash). |

## Returns

It is always called first in filterscripts so returning 1 there blocks other scripts from processing it.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/help", true))
    {
        SendClientMessage(playerid, -1, "SERVER: This is the /help command!");
        return 1;
        // Returning 1 informs the server that the command has been processed.
        // OnPlayerCommandText won't be called in other scripts.
    }
    return 0;
    // Returning 0 informs the server that the command hasn't been processed by this script.
    // OnPlayerCommandText will be called in other scripts until one returns 1.
    // If no scripts return 1, the 'SERVER: Unknown Command' message will be shown to the player.
}
```

## Notes

<TipNPCCallbacks />

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnPlayerText](OnPlayerText): This callback is called when a player sends a chat message.
- [OnRconCommand](OnRconCommand): This callback is called when a command is sent through the server console, remote RCON, or via the in-game "/rcon command".

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [SendRconCommand](../functions/SendRconCommand): Sends an RCON command via the script.
