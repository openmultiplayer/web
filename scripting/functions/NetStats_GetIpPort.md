---
title: NetStats_GetIpPort
description: Get a player's IP and port.
tags: []
---

# NetStats_GetIpPort

<TagLinks />

::: warning

This function was added in SA-MP 0.3z and will not work in earlier versions!

:::

## Description

Get a player's IP and port.


| Name | Description |
|------|-------------|
|playerid | The ID of the player to get the IP and port of.|
|ip_port[] | A string array to store the IP and port in, passed by reference.|
|ip_port_len | The maximum length of the IP/port. 22 is recommended.|


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


-  GetPlayerIp: Get a player's IP.
-  GetPlayerNetworkStats: Gets a player networkstats and saves it into a string.
-  GetNetworkStats: Gets the servers networkstats and saves it into a string.
-  NetStats_GetConnectedTime: Get the time that a player has been connected for.
-  NetStats_MessagesReceived: Get the number of network messages the server has received from the player.
-  NetStats_BytesReceived: Get the amount of information (in bytes) that the server has received from the player.
-  NetStats_MessagesSent: Get the number of network messages the server has sent to the player.
-  NetStats_BytesSent: Get the amount of information (in bytes) that the server has sent to the player.
-  NetStats_MessagesRecvPerSecond: Get the number of network messages the server has received from the player in the last second.
-  NetStats_PacketLossPercent: Get a player's packet loss percent.
-  NetStats_ConnectionStatus: Get a player's connection status.