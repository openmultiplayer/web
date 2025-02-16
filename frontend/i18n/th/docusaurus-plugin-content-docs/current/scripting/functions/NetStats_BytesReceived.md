---
title: NetStats_BytesReceived
sidebar_label: NetStats_BytesReceived
description: Gets the amount of data (in bytes) that the server has received from the player.
tags: []
---

## คำอธิบาย

Gets the amount of data (in bytes) that the server has received from the player.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player to get the data from. |

## ส่งคืน

This function returns the number of bytes the server has received from the player. 0 is returned if the player is not connected.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/bytesreceived"))
    {
        new szString[144];
        format(szString, sizeof(szString), "You have sent %i bytes of information to the server.", NetStats_BytesReceived(playerid));
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
- [NetStats_MessagesSent](../functions/NetStats_MessagesSent.md): Get the number of network messages the server has sent to the player.
- [NetStats_BytesSent](../functions/NetStats_BytesSent.md): Get the amount of information (in bytes) that the server has sent to the player.
- [NetStats_MessagesRecvPerSecond](../functions/NetStats_MessagesRecvPerSecond.md): Get the number of network messages the server has received from the player in the last second.
- [NetStats_PacketLossPercent](../functions/NetStats_PacketLossPercent.md): Get a player's packet loss percent.
- [NetStats_ConnectionStatus](../functions/NetStats_ConnectionStatus.md): Get a player's connection status.
- [NetStats_GetIpPort](../functions/NetStats_GetIpPort.md): Get a player's IP and port.
