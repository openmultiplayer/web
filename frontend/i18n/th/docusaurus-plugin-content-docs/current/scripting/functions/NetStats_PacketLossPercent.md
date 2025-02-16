---
title: NetStats_PacketLossPercent
description: Gets the packet loss percentage of a player.
tags: []
---

## คำอธิบาย

Gets the packet loss percentage of a player. Packet loss means data the player is sending to the server is being lost (or vice-versa).

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player to get the data from. |

## ส่งคืน

The percentage packet loss as a float. 0 if player not connected.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/packetloss"))
    {
        new szString[144];
        format(szString, sizeof(szString), "Packets lost: %.2f percent.", NetStats_PacketLossPercent(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## บันทึก

:::tip

Be advised that this function will report the packets lost by the server. The packet loss number reported by the client **will** be different, not because either is incorrect, but because both the server and the client are only aware of the loss packages sent by them.

:::

:::tip

Anything greater than 0.0% should already be a cause of concern. Anything greater than 1.0% is outright bad.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetPlayerNetworkStats](../functions/GetPlayerNetworkStats.md): Gets a player networkstats and saves it into a string.
- [GetNetworkStats](../functions/GetNetworkStats.md): Gets the servers networkstats and saves it into a string.
- [NetStats_GetConnectedTime](../functions/NetStats_GetConnectedTime.md): Get the time that a player has been connected for.
- [NetStats_MessagesReceived](../functions/NetStats_MessagesReceived.md): Get the number of network messages the server has received from the player.
- [NetStats_BytesReceived](../functions/NetStats_BytesReceived.md): Get the amount of information (in bytes) that the server has received from the player.
- [NetStats_MessagesSent](../functions/NetStats_MessagesSent.md): Get the number of network messages the server has sent to the player.
- [NetStats_BytesSent](../functions/NetStats_BytesSent.md): Get the amount of information (in bytes) that the server has sent to the player.
- [NetStats_MessagesRecvPerSecond](../functions/NetStats_MessagesRecvPerSecond.md): Get the number of network messages the server has received from the player in the last second.
- [NetStats_ConnectionStatus](../functions/NetStats_ConnectionStatus.md): Get a player's connection status.
- [NetStats_GetIpPort](../functions/NetStats_GetIpPort.md): Get a player's IP and port.
