---
title: "GetPlayerNetworkStats | open.mp"
description: "Gets a player's network stats and saves them into a string."
canonical: https://open.mp/docs/scripting/functions/GetPlayerNetworkStats
language: en
---

# GetPlayerNetworkStats

## Description

Gets a player's network stats and saves them into a string.

| Name | Description |
| --- | --- |
| playerid | The ID of the player you want to get the networkstats of. |
| output\[\] | The string to store the networkstats in, passed by reference. |
| size = sizeof (output) | The length of the string that should be stored. |

## Returns

This function always returns **1**.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/mynetstats"))
    {
        new stats[400 + 1];
        GetPlayerNetworkStats(playerid, stats, sizeof(stats));
        ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "My Network Stats", stats, "Okay", "");
    }
    return 1;
}
```

## Notes

note

This function may not return accurate data when used under [OnPlayerDisconnect](https://open.mp/docs/scripting/callbacks/OnPlayerDisconnect) if the player has quit normally. It usually returns accurate data if the player has been kicked or has timed out.

## Related Functions

-   [GetNetworkStats](https://open.mp/docs/scripting/functions/GetNetworkStats): Gets the servers networkstats and saves it into a string.
-   [NetStats\_GetConnectedTime](https://open.mp/docs/scripting/functions/NetStats_GetConnectedTime): Get the time that a player has been connected for.
-   [NetStats\_MessagesReceived](https://open.mp/docs/scripting/functions/NetStats_MessagesReceived): Get the number of network messages the server has received from the player.
-   [NetStats\_BytesReceived](https://open.mp/docs/scripting/functions/NetStats_BytesReceived): Get the amount of information (in bytes) that the server has received from the player.
-   [NetStats\_MessagesSent](https://open.mp/docs/scripting/functions/NetStats_MessagesSent): Get the number of network messages the server has sent to the player.
-   [NetStats\_BytesSent](https://open.mp/docs/scripting/functions/NetStats_BytesSent): Get the amount of information (in bytes) that the server has sent to the player.
-   [NetStats\_MessagesRecvPerSecond](https://open.mp/docs/scripting/functions/NetStats_MessagesRecvPerSecond): Get the number of network messages the server has received from the player in the last second.
-   [NetStats\_PacketLossPercent](https://open.mp/docs/scripting/functions/NetStats_PacketLossPercent): Get a player's packet loss percent.
-   [NetStats\_ConnectionStatus](https://open.mp/docs/scripting/functions/NetStats_ConnectionStatus): Get a player's connection status.
-   [NetStats\_GetIpPort](https://open.mp/docs/scripting/functions/NetStats_GetIpPort): Get a player's IP and port.
