---
title: "GetNetworkStats | open.mp"
description: "Gets the server's network stats and stores them in a string."
canonical: https://open.mp/docs/scripting/functions/GetNetworkStats
language: en
---

# GetNetworkStats

## Description

Gets the server's network stats and stores them in a string.

| Name | Description |
| --- | --- |
| output\[\] | The string to store the network stats in, passed by reference. |
| size = sizeof (output) | The length of the string to be stored. |

## Returns

This function always returns **1**.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/netstats"))
    {
        new stats[400 + 1];
        GetNetworkStats(stats, sizeof(stats)); // Get the servers networkstats
        ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "Server Network Stats", stats, "Close", "");
    }
    return 1;
}
```

**Output:**

```text
Server Ticks: 200
Messages in Send buffer: 0
Messages sent: 142
Bytes sent: 8203
Acks sent: 11
Acks in send buffer: 0
Messages waiting for ack: 0
Messages resent: 0
Bytes resent: 0
Packetloss: 0.0%
Messages received: 54
Bytes received: 2204
Acks received: 0
Duplicate acks received: 0
Inst. KBits per second: 28.8
KBits per second sent: 10.0
KBits per second received: 2.7
```

## Related Functions

-   [GetPlayerNetworkStats](https://open.mp/docs/scripting/functions/GetPlayerNetworkStats): Gets a player networkstats and saves it into a string.
-   [NetStats\_GetConnectedTime](https://open.mp/docs/scripting/functions/NetStats_GetConnectedTime): Get the time that a player has been connected for.
-   [NetStats\_MessagesReceived](https://open.mp/docs/scripting/functions/NetStats_MessagesReceived): Get the number of network messages the server has received from the player.
-   [NetStats\_BytesReceived](https://open.mp/docs/scripting/functions/NetStats_BytesReceived): Get the amount of information (in bytes) that the server has received from the player.
-   [NetStats\_MessagesSent](https://open.mp/docs/scripting/functions/NetStats_MessagesSent): Get the number of network messages the server has sent to the player.
-   [NetStats\_BytesSent](https://open.mp/docs/scripting/functions/NetStats_BytesSent): Get the amount of information (in bytes) that the server has sent to the player.
-   [NetStats\_MessagesRecvPerSecond](https://open.mp/docs/scripting/functions/NetStats_MessagesRecvPerSecond): Get the number of network messages the server has received from the player in the last second.
-   [NetStats\_PacketLossPercent](https://open.mp/docs/scripting/functions/NetStats_PacketLossPercent): Get a player's packet loss percent.
-   [NetStats\_ConnectionStatus](https://open.mp/docs/scripting/functions/NetStats_ConnectionStatus): Get a player's connection status.
-   [NetStats\_GetIpPort](https://open.mp/docs/scripting/functions/NetStats_GetIpPort): Get a player's IP and port.
