---
title: "OnPlayerConnect | open.mp"
description: "This callback is called when a player connects to the server."
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerConnect
language: en
---

# OnPlayerConnect

## Description

This callback is called when a player connects to the server.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that connected. |

## Returns

**0** - Will prevent other filterscripts from receiving this callback.

**1** - Indicates that this callback will be passed to the next filterscript.

It is always called first in filterscripts.

## Examples

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s has joined the server. Welcome!", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Notes

note

This callback can also be called by NPC.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnPlayerDisconnect](https://open.mp/docs/scripting/callbacks/OnPlayerDisconnect): This callback is called when a player leaves the server.
-   [OnIncomingConnection](https://open.mp/docs/scripting/callbacks/OnIncomingConnection): This callback is called when a player is attempting to connect to the server.
-   [OnPlayerFinishedDownloading](https://open.mp/docs/scripting/callbacks/OnPlayerFinishedDownloading): This callback is called when a player finishes downloading custom models.
