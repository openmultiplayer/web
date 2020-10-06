---
id: NetStats_MessagesReceived
title: NetStats_MessagesReceived
description: Gets the number of messages the server has received from the player.
tags: []
---

:::warning

This function was added in SA-MP 0.3z and will not work in earlier versions!

:::

## Description

Gets the number of messages the server has received from the player.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player to get the data from. |

## Returns

This function returns the number of messages the server has received from the player. 0 is returned if the player is not connected.

## Examples

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if(!strcmp(cmdtext, "/msgs"))
    {
        new szString[144];
        format(szString, sizeof(szString), "You have sent %i network messages.", NetStats_MessagesReceived(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## Related Functions

- [GetPlayerNetworkStats](GetPlayerNetworkStats.md): Gets a player networkstats and saves it into a string.
- [GetNetworkStats](GetNetworkStats.md): Gets the servers networkstats and saves it into a string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime.md): Get the time that a player has been connected for.
- [NetStats_BytesReceived](NetStats_BytesReceived.md): Get the amount of information (in bytes) that the server has received from the player.
- [NetStats_MessagesSent](NetStats_MessagesSent.md): Get the number of network messages the server has sent to the player.
- [NetStats_BytesSent](NetStats_BytesSent.md): Get the amount of information (in bytes) that the server has sent to the player.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond.md): Get the number of network messages the server has received from the player in the last second.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent.md): Get a player's packet loss percent.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus.md): Get a player's connection status.
- [NetStats_GetIpPort](NetStats_GetIpPort.md): Get a player's IP and port.
