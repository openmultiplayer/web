---
title: NetStats_GetConnectedTime
sidebar_label: NetStats_GetConnectedTime
description: Gets the amount of time (in milliseconds) that a player has been connected to the server for.
tags: []
---

## คำอธิบาย

Gets the amount of time (in milliseconds) that a player has been connected to the server for.

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| playerid | The ID of the player to get the connected time of. |

## ส่งคืน

This function returns the amount of time (in milliseconds) that a player has been connected to the server for. 0 is returned if the player is not connected.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/connectedtime"))
    {
        new szString[144];
        format(szString, sizeof(szString), "You have been connected for %i milliseconds.", NetStats_GetConnectedTime(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## บันทึก

:::tip

The return value is not reset to zero after changing the game mode (using the RCON command "gmx").

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetPlayerNetworkStats](GetPlayerNetworkStats): Gets a player networkstats and saves it into a string.
- [GetNetworkStats](GetNetworkStats): Gets the servers networkstats and saves it into a string.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Get the number of network messages the server has received from the player.
- [NetStats_BytesReceived](NetStats_BytesReceived): Get the amount of information (in bytes) that the server has received from the player.
- [NetStats_MessagesSent](NetStats_MessagesSent): Get the number of network messages the server has sent to the player.
- [NetStats_BytesSent](NetStats_BytesSent): Get the amount of information (in bytes) that the server has sent to the player.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Get the number of network messages the server has received from the player in the last second.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Get a player's packet loss percent.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Get a player's connection status.
- [NetStats_GetIpPort](NetStats_GetIpPort): Get a player's IP and port.
