---
title: "NetStats_GetIpPort | open.mp"
description: "Get a player's IP and port."
canonical: https://open.mp/docs/scripting/functions/NetStats_GetIpPort
language: en
---

# NetStats\_GetIpPort

## Description

Get a player's IP **and port**.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the IP and port of. |
| output\[\] | A string array to store the IP and port in, passed by reference. |
| size = sizeof (output) | The maximum length of the IP/port. 22 is recommended. |

## Returns

The player's IP and port is stored in the specified array.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/ipandport"))
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

-   [GetPlayerIp](https://open.mp/docs/scripting/functions/GetPlayerIp): Get a player's IP.
-   [GetPlayerNetworkStats](https://open.mp/docs/scripting/functions/GetPlayerNetworkStats): Gets a player's networkstats and saves it into a string.
-   [GetNetworkStats](https://open.mp/docs/scripting/functions/GetNetworkStats): Gets the server's networkstats and saves it into a string.
-   [NetStats\_GetConnectedTime](https://open.mp/docs/scripting/functions/NetStats_GetConnectedTime): Get the time that a player has been connected for.
-   [NetStats\_MessagesReceived](https://open.mp/docs/scripting/functions/NetStats_MessagesReceived): Get the number of network messages the server has received from the player.
-   [NetStats\_BytesReceived](https://open.mp/docs/scripting/functions/NetStats_BytesReceived): Get the amount of information (in bytes) that the server has received from the player.
-   [NetStats\_MessagesSent](https://open.mp/docs/scripting/functions/NetStats_MessagesSent): Get the number of network messages the server has sent to the player.
-   [NetStats\_BytesSent](https://open.mp/docs/scripting/functions/NetStats_BytesSent): Get the amount of information (in bytes) that the server has sent to the player.
-   [NetStats\_MessagesRecvPerSecond](https://open.mp/docs/scripting/functions/NetStats_MessagesRecvPerSecond): Get the number of network messages the server has received from the player in the last second.
-   [NetStats\_PacketLossPercent](https://open.mp/docs/scripting/functions/NetStats_PacketLossPercent): Get a player's packet loss percent.
-   [NetStats\_ConnectionStatus](https://open.mp/docs/scripting/functions/NetStats_ConnectionStatus): Get a player's connection status.
