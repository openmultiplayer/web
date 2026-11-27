---
title: "NetStats_GetConnectedTime | open.mp"
description: "Gets the amount of time (in milliseconds) that a player has been connected to the server for."
canonical: https://open.mp/docs/scripting/functions/NetStats_GetConnectedTime
language: en
---

# NetStats\_GetConnectedTime

## Description

Gets the amount of time (in milliseconds) that a player has been connected to the server for.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the connected time of. |

## Returns

This function returns the amount of time (in milliseconds) that a player has been connected to the server for.

**0** is returned if the player is not connected.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/connectedtime"))
    {
        new szString[144];
        format(szString, sizeof(szString), "You have been connected for %i milliseconds.", NetStats_GetConnectedTime(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## Notes

note

The return value is not reset to zero after changing the game mode (using the RCON command "[gmx](https://open.mp/docs/server/ControllingServer#rcon-commands)").

## Related Functions

-   [GetPlayerNetworkStats](https://open.mp/docs/scripting/functions/GetPlayerNetworkStats): Gets a player's networkstats and saves it into a string.
-   [GetNetworkStats](https://open.mp/docs/scripting/functions/GetNetworkStats): Gets the server's networkstats and saves it into a string.
-   [NetStats\_MessagesReceived](https://open.mp/docs/scripting/functions/NetStats_MessagesReceived): Get the number of network messages the server has received from the player.
-   [NetStats\_BytesReceived](https://open.mp/docs/scripting/functions/NetStats_BytesReceived): Get the amount of information (in bytes) that the server has received from the player.
-   [NetStats\_MessagesSent](https://open.mp/docs/scripting/functions/NetStats_MessagesSent): Get the number of network messages the server has sent to the player.
-   [NetStats\_BytesSent](https://open.mp/docs/scripting/functions/NetStats_BytesSent): Get the amount of information (in bytes) that the server has sent to the player.
-   [NetStats\_MessagesRecvPerSecond](https://open.mp/docs/scripting/functions/NetStats_MessagesRecvPerSecond): Get the number of network messages the server has received from the player in the last second.
-   [NetStats\_PacketLossPercent](https://open.mp/docs/scripting/functions/NetStats_PacketLossPercent): Get a player's packet loss percent.
-   [NetStats\_ConnectionStatus](https://open.mp/docs/scripting/functions/NetStats_ConnectionStatus): Get a player's connection status.
-   [NetStats\_GetIpPort](https://open.mp/docs/scripting/functions/NetStats_GetIpPort): Get a player's IP and port.
