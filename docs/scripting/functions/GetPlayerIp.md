---
title: "GetPlayerIp | open.mp"
description: "Get the specified player's IP address and store it in a string."
canonical: https://open.mp/docs/scripting/functions/GetPlayerIp
language: en
---

# GetPlayerIp

## Description

Get the specified player's IP address and store it in a string.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the IP address of. |
| ip\[\] | The string to store the player's IP address in, passed by reference. |
| len = sizeof (ip) | The maximum length of the IP address (recommended 16). |

## Returns

The length of the player's IP address.

**\-1** if player specified doesn't exist.

The player's IP address is stored in the specified array.

## Examples

```c
public OnPlayerConnect(playerid)
{
    new ipAddress[16];
    GetPlayerIp(playerid, ipAddress, sizeof(ipAddress));
    if (!strcmp(ipAddress, "127.0.0.1"))
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to your server, master :)");
    }
    return 1;
}
```

## Notes

note

-   PAWN is case-sensitive. GetPlayerI**P** will not work.
-   **SA-MP server**: This function **does not work** when used in [OnPlayerDisconnect](https://open.mp/docs/scripting/callbacks/OnPlayerDisconnect) because the player is already disconnected. It will return an invalid IP (255.255.255.255). Save players' IPs under [OnPlayerConnect](https://open.mp/docs/scripting/callbacks/OnPlayerConnect) if they need to be used under [OnPlayerDisconnect](https://open.mp/docs/scripting/callbacks/OnPlayerDisconnect).
-   **open.mp server**: This function **work** when used in [OnPlayerDisconnect](https://open.mp/docs/scripting/callbacks/OnPlayerDisconnect).

## Related Functions

-   [NetStats\_GetIpPort](https://open.mp/docs/scripting/functions/NetStats_GetIpPort): Get a player's IP and port.
-   [GetPlayerRawIp](https://open.mp/docs/scripting/functions/GetPlayerRawIp): Get a player's Raw IP.
-   [GetPlayerName](https://open.mp/docs/scripting/functions/GetPlayerName): Get a player's name.
-   [GetPlayerPing](https://open.mp/docs/scripting/functions/GetPlayerPing): Get the ping of a player.
-   [GetPlayerVersion](https://open.mp/docs/scripting/functions/GetPlayerVersion): Get a player's client-version.

## Related Callbacks

-   [OnIncomingConnection](https://open.mp/docs/scripting/callbacks/OnIncomingConnection): Called when a player is attempting to connect to the server.
-   [OnPlayerConnect](https://open.mp/docs/scripting/callbacks/OnPlayerConnect): Called when a player connects to the server.
-   [OnPlayerDisconnect](https://open.mp/docs/scripting/callbacks/OnPlayerDisconnect): Called when a player leaves the server.
