---
id: NetStats_BytesSent
title: NetStats_BytesSent
description: Gets the amount of data (in bytes) that the server has sent to the player.
tags: []
---

<TagLinks />

:::warning

This function was added in SA-MP 0.3z and will not work in earlier versions!

:::

## Description

Gets the amount of data (in bytes) that the server has sent to the player.


| Name | Description |
|------|-------------|
|playerid | The ID of the player to get the data from.|


## Returns

[edit]


## Examples


```c
public OnPlayerCommandText(playerid,cmdtext[])
{    
    if(!strcmp(cmdtext, "/bytes_sent"))
    {
        new szString[144];
        format(szString, sizeof(szString), "You have sent %i bytes of information to the server.", NetStats_BytesSent(playerid));
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
-  NetStats_MessagesSent: Get the number of network messages the server has sent to the player.
-  NetStats_BytesReceived: Get the amount of information (in bytes) that the server has received from the player.
-  NetStats_MessagesRecvPerSecond: Get the number of network messages the server has received from the player in the last second.
-  NetStats_PacketLossPercent: Get a player's packet loss percent.
-  NetStats_ConnectionStatus: Get a player's connection status.
-  NetStats_GetIpPort: Get a player's IP and port.