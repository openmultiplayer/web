---
title: "OnIncomingConnection | open.mp"
description: "This callback is called when an IP address attempts a connection to the server."
canonical: https://open.mp/docs/scripting/callbacks/OnIncomingConnection
language: en
---

# OnIncomingConnection

## Description

This callback is called when an IP address attempts a connection to the server. To block incoming connections, use [BlockIpAddress](https://open.mp/docs/scripting/functions/BlockIpAddress).

| Name | Description |
| --- | --- |
| playerid | The ID of the player attempting to connect |
| ip\_address\[\] | The IP address of the player attempting to connect |
| port | The port of the attempted connection |

## Returns

**1** - Will prevent other filterscripts from receiving this callback.

**0** - Indicates that this callback will be passed to the next filterscript.

It is always called first in filterscripts.

## Examples

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("Incoming connection for player ID %i [IP/port: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnPlayerConnect](https://open.mp/docs/scripting/callbacks/OnPlayerConnect): This callback is called when a player connects to the server.
-   [OnPlayerDisconnect](https://open.mp/docs/scripting/callbacks/OnPlayerDisconnect): This callback is called when a player disconnects from the server.
-   [OnPlayerFinishedDownloading](https://open.mp/docs/scripting/callbacks/OnPlayerFinishedDownloading): This callback is called when a player finishes downloading custom models.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [BlockIpAddress](https://open.mp/docs/scripting/functions/BlockIpAddress): Block an IP address from connecting to the server for a set amount of time.
-   [UnBlockIpAddress](https://open.mp/docs/scripting/functions/UnBlockIpAddress): Unblock an IP that was previously blocked.
