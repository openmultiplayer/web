---
id: NetStats_ConnectionStatus
title: NetStats_ConnectionStatus
description: Gets the player's current connection status.
tags: []
---

:::warning

This function was added in SA-MP 0.3z and will not work in earlier versions!

:::

## Description

Gets the player's current connection status.


| Name | Description |
|------|-------------|
|playerid | The ID of the player to get the connection status of.|


## Returns

The player's connection status, as an integer value.


## Examples


```c
public OnPlayerCommandText(playerid,cmdtext[])
{    
    if(!strcmp(cmdtext, "/connectionstatus"))
    {
        new szString[144];
        format(szString, sizeof(szString), "Your current connection status: %i.", NetStats_ConnectionStatus(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```


## Related Functions


-  GetPlayerNetworkStats: Gets a player networkstats and saves it into a string.
-  GetNetworkStats: Gets the servers networkstats and saves it into a string.
-  NetStats_GetConnectedTime: Get the time that a player has been connected for.
-  NetStats_MessagesReceived: Get the number of network messages the server has received from the player.
-  NetStats_BytesReceived: Get the amount of information (in bytes) that the server has received from the player.
-  NetStats_MessagesSent: Get the number of network messages the server has sent to the player.
-  NetStats_BytesSent: Get the amount of information (in bytes) that the server has sent to the player.
-  NetStats_MessagesRecvPerSecond: Get the number of network messages the server has received from the player in the last second.
-  NetStats_PacketLossPercent: Get a player's packet loss percent.
-  NetStats_GetIpPort: Get a player's IP and port.
-  IsPlayerConnected: Check if a player is connected to the server.
-  OnPlayerConnect: Called when a player connects to the server.
-  OnPlayerDisconnect: Called when a player leaves the server.