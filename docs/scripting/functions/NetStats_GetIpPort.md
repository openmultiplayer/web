---
id: NetStats_GetIpPort
title: NetStats_GetIpPort
description: Get a player's IP and port.
tags: []
---

:::warning

This function was added in SA-MP 0.3z and will not work in earlier versions!

:::

## Description

Get a player's IP and port.

| Name        | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| playerid    | The ID of the player to get the IP and port of.                  |
| ip_port[]   | A string array to store the IP and port in, passed by reference. |
| ip_port_len | The maximum length of the IP/port. 22 is recommended.            |

## Returns

The player's IP and port is stored in the specified array.

## Examples

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if(!strcmp(cmdtext, "/ipandport"))
    {
        new dest[22];
        NetStats_GetIpPort(playerid, dest, sizeof(dest));

        new szString[144];
        format(szString, sizeof(szString), "Your current IP and port: %s.", dest);
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## Related Functions

- [GetPlayerIp](../functions/GetPlayerIp.md): Get a player's IP.
- [GetPlayerNetworkStats](../functions/GetPlayerNetworkStats.md): Gets a player networkstats and saves it into a string.
- [GetNetworkStats](../functions/GetNetworkStats.md): Gets the servers networkstats and saves it into a string.
- [NetStats_GetConnectedTime](../functions/NetStats_GetConnectedTime.md): Get the time that a player has been connected for.
- [NetStats_MessagesReceived](../functions/NetStats_MessagesReceived.md): Get the number of network messages the server has received from the player.
- [NetStats_BytesReceived](../functions/NetStats_BytesReceived.md): Get the amount of information (in bytes) that the server has received from the player.
- [NetStats_MessagesSent](../functions/NetStats_MessagesSent.md): Get the number of network messages the server has sent to the player.
- [NetStats_BytesSent](../functions/NetStats_BytesSent.md): Get the amount of information (in bytes) that the server has sent to the player.
- [NetStats_MessagesRecvPerSecond](../functions/NetStats_MessagesRecvPerSecond.md): Get the number of network messages the server has received from the player in the last second.
- [NetStats_PacketLossPercent](../functions/NetStats_PacketLossPercent.md): Get a player's packet loss percent.
- [NetStats_ConnectionStatus](../functions/NetStats_ConnectionStatus.md): Get a player's connection status.
