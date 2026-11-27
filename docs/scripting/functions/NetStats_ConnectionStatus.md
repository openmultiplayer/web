---
title: "NetStats_ConnectionStatus | open.mp"
description: "Gets the player's current connection status."
canonical: https://open.mp/docs/scripting/functions/NetStats_ConnectionStatus
language: en
---

# NetStats\_ConnectionStatus

## Description

Gets the player's current connection status.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the connection status of. |

## Returns

The player's [connection status](https://open.mp/docs/scripting/resources/connectionstatus), as an integer value.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/connectionstatus"))
    {
        static ConnectionStatuses[9][48] =
        {
            "No Action",
            "Disconnect ASAP",
            "Disconnect ASAP Silently",
            "Disconnect On No Ack",
            "Requested Connection",
            "Handling Connection Request",
            "Unverified Sender",
            "Set Encryption On Multiple 16 Byte Packet",
            "Connected"
        };

        new connectionStatus = NetStats_ConnectionStatus(playerid);

        new string[144];
        format(string, sizeof(string), "Your current connection status: %s", ConnectionStatuses[connectionStatus]);
        SendClientMessage(playerid, -1, string);
    }
    return 1;
}
```

## Related Functions

-   [GetPlayerNetworkStats](https://open.mp/docs/scripting/functions/GetPlayerNetworkStats): Gets a player's networkstats and saves it into a string.
-   [GetNetworkStats](https://open.mp/docs/scripting/functions/GetNetworkStats): Gets the server's networkstats and saves it into a string.
-   [NetStats\_GetConnectedTime](https://open.mp/docs/scripting/functions/NetStats_GetConnectedTime): Get the time that a player has been connected for.
-   [NetStats\_MessagesReceived](https://open.mp/docs/scripting/functions/NetStats_MessagesReceived): Get the number of network messages the server has received from the player.
-   [NetStats\_BytesReceived](https://open.mp/docs/scripting/functions/NetStats_BytesReceived): Get the amount of information (in bytes) that the server has received from the player.
-   [NetStats\_MessagesSent](https://open.mp/docs/scripting/functions/NetStats_MessagesSent): Get the number of network messages the server has sent to the player.
-   [NetStats\_BytesSent](https://open.mp/docs/scripting/functions/NetStats_BytesSent): Get the amount of information (in bytes) that the server has sent to the player.
-   [NetStats\_MessagesRecvPerSecond](https://open.mp/docs/scripting/functions/NetStats_MessagesRecvPerSecond): Get the number of network messages the server has received from the player in the last second.
-   [NetStats\_PacketLossPercent](https://open.mp/docs/scripting/functions/NetStats_PacketLossPercent): Get a player's packet loss percent.
-   [NetStats\_GetIpPort](https://open.mp/docs/scripting/functions/NetStats_GetIpPort): Get a player's IP and port.
-   [IsPlayerConnected](https://open.mp/docs/scripting/functions/IsPlayerConnected): Check if a player is connected to the server.

## Related Callbacks

-   [OnPlayerConnect](https://open.mp/docs/scripting/callbacks/OnPlayerConnect): Called when a player connects to the server.
-   [OnPlayerDisconnect](https://open.mp/docs/scripting/callbacks/OnPlayerDisconnect): Called when a player leaves the server.

## Related Resources

-   [Connection Status](https://open.mp/docs/scripting/resources/connectionstatus)
