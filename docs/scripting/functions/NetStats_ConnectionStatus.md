---
title: NetStats_ConnectionStatus
description: Gets the player's current connection status.
tags: []
---

<VersionWarn version='SA-MP 0.3z' />

## Description

Gets the player's current connection status.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| playerid | The ID of the player to get the connection status of. |

## Returns

The player's [connection status](../resources/connectionstatus.md), as an integer value.

## Examples

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/connectionstatus"))
    {
        new szString[144];
        format(szString, sizeof(szString), "Your current connection status: %i.", NetStats_ConnectionStatus(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## Related Functions

- [GetPlayerNetworkStats](GetPlayerNetworkStats.md): Gets a player networkstats and saves it into a string.
- [GetNetworkStats](GetNetworkStats.md): Gets the servers networkstats and saves it into a string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime.md): Get the time that a player has been connected for.
- [NetStats_MessagesReceived](NetStats_MessagesReceived.md): Get the number of network messages the server has received from the player.
- [NetStats_BytesReceived](NetStats_BytesReceived.md): Get the amount of information (in bytes) that the server has received from the player.
- [NetStats_MessagesSent](NetStats_MessagesSent.md): Get the number of network messages the server has sent to the player.
- [NetStats_BytesSent](NetStats_BytesSent.md): Get the amount of information (in bytes) that the server has sent to the player.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond.md): Get the number of network messages the server has received from the player in the last second.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent.md): Get a player's packet loss percent.
- [NetStats_GetIpPort](NetStats_GetIpPort.md): Get a player's IP and port.
- [IsPlayerConnected](IsPlayerConnected.md): Check if a player is connected to the server.
- [OnPlayerConnect](../callbacks/OnPlayerConnect.md): Called when a player connects to the server.
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect.md): Called when a player leaves the server.
