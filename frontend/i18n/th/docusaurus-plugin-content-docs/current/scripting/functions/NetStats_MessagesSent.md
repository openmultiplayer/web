---
title: NetStats_MessagesSent
description: Gets the number of messages the server has sent to the player.
tags: []
---

## คำอธิบาย

Gets the number of messages the server has sent to the player.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player to get the data from. |

## ส่งคืน

The number of messages the server has sent to the player.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/msgsent"))
    {
        new szString[144];
        format(szString, sizeof(szString), "You have recieved %i network messages.", NetStats_MessagesSent(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetPlayerNetworkStats](../functions/GetPlayerNetworkStats.md): Gets a player networkstats and saves it into a string.
- [GetNetworkStats](../functions/GetNetworkStats.md): Gets the servers networkstats and saves it into a string.
- [NetStats_GetConnectedTime](../functions/NetStats_GetConnectedTime.md): Get the time that a player has been connected for.
- [NetStats_MessagesReceived](../functions/NetStats_MessagesReceived.md): Get the number of network messages the server has received from the player.
- [NetStats_BytesReceived](../functions/NetStats_BytesReceived.md): Get the amount of information (in bytes) that the server has received from the player.
- [NetStats_BytesSent](../functions/NetStats_BytesSent.md): Get the amount of information (in bytes) that the server has sent to the player.
- [NetStats_MessagesRecvPerSecond](../functions/NetStats_MessagesRecvPerSecond.md): Get the number of network messages the server has received from the player in the last second.
- [NetStats_PacketLossPercent](../functions/NetStats_PacketLossPercent.md): Get a player's packet loss percent.
- [NetStats_ConnectionStatus](../functions/NetStats_ConnectionStatus.md): Get a player's connection status.
- [NetStats_GetIpPort](../functions/NetStats_GetIpPort.md): Get a player's IP and port.
