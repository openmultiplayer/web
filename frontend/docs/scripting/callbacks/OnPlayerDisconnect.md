---
title: OnPlayerDisconnect
description: This callback is called when a player disconnects from the server.
tags: ["player"]
---

## Description

This callback is called when a player disconnects from the server.

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| playerid | The ID of the player that disconnected.            |
| reason   | The reason for the disconnection. See table below. |

## Returns

0 - Will prevent other filterscripts from receiving this callback.

1 - Indicates that this callback will be passed to the next filterscript.

It is always called first in filterscripts.

## Reasons

| ID  | Reason        | Details                                                                                         |
| --- | ------------- | ----------------------------------------------------------------------------------------------- |
| 0   | Timeout/Crash | The player's connection was lost. Either their game crashed or their network had a fault.       |
| 1   | Quit          | The player purposefully quit, either using the /quit (/q) command or via the pause menu.        |
| 2   | Kick/Ban      | The player was kicked or banned by the server.                                                  |
| 3   | Custom        | Used by some libraries. Reserved for modes' private uses.                                       |
| 4   | Mode End      | The current mode is ending so disconnecting all players from it (they are still on the server). |

:::warning

Reason 3 was originally added in SA:MP by [fixes.inc](https://github.com/pawn-lang/sa-mp-fixes)

Reasons 3 and 4 were added by the Open Multiplayer server.

:::

## Examples

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[5][] =
    {
        "Timeout/Crash",
        "Quit",
        "Kick/Ban",
        "Custom",
        "Mode End"
    };

    format(szString, sizeof szString, "%s left the server (%s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## Notes

:::tip

Some functions might not work correctly when used in this callback because the player is already disconnected when the callback is called. This means that you can't get unambiguous information from functions like [GetPlayerIp](GetPlayerIp) and [GetPlayerPos](GetPlayerPos).

This issue is solved in open.mp server.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnPlayerConnect](OnPlayerConnect): This callback is called when a player connects to the server.
- [OnIncomingConnection](OnIncomingConnection): This callback is called when a player is attempting to connect to the server.
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): This callback is called when a player finishes downloading custom models.
