---
id: OnIncomingConnection
title: OnIncomingConnection
description: This callback is called when an IP address attempts a connection to the server.
tags: []
---

:::warning

This callback was added in SA-MP 0.3z R2-2 and will not work in earlier versions!

:::

## Description

This callback is called when an IP address attempts a connection to the server. To block incoming connections, use BlockIpAddress.

| Name         | Description                                        |
| ------------ | -------------------------------------------------- |
| playerid     | The ID of the player attempting to connect         |
| ip_address[] | The IP address of the player attempting to connect |
| port         | The port of the attempted connection               |

## Returns

1 - Will prevent other filterscripts from receiving this callback.

0 - Indicates that this callback will be passed to the next filterscript.

It is always called first in filterscripts.

## Examples

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("Incoming connection for player ID %i [IP/port: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## Related Functions

- [BlockIpAddress](../functions/BlockIpAddress.md): Block an IP address from connecting to the server for a set amount of time.
- [UnBlockIpAddress](../functions/UnBlockIpAddress.md): Unblock an IP that was previously blocked.
